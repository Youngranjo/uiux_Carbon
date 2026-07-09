// Parses the REAL installed @carbon/react and @carbon/web-components source
// (node_modules, not hand-typed guesses) into one manifest.json describing every
// component "family": its React named exports + its Web Component custom-element tags.
import { readFileSync, writeFileSync } from 'node:fs';

const reactIndexSrc = readFileSync('node_modules/@carbon/react/lib/index.js', 'utf8');
const wcManifest = JSON.parse(readFileSync('node_modules/@carbon/web-components/custom-elements.json', 'utf8'));

// ---- 1. requireVar -> folder (from `const require_X = require("./components/Folder/...")`) ----
const requireVarToFolder = new Map();
for (const m of reactIndexSrc.matchAll(/const (require_[A-Za-z0-9_$]+) = require\("\.\/(components|internal)\/([^/"]+)\/[^"]*"\);/g)) {
  const [, varName, kind, folder] = m;
  requireVarToFolder.set(varName, kind === 'components' ? folder : 'Utilities');
}

// ---- 2. exports.Name = require_X[.Member]; -> folder ----
const folderToExports = new Map();
for (const m of reactIndexSrc.matchAll(/^exports\.([A-Za-z0-9_$]+) = (require_[A-Za-z0-9_$]+)(?:\.([A-Za-z0-9_$]+))?;$/gm)) {
  const [, exportName, varName] = m;
  if (/^(preview_|unstable_)/.test(exportName)) continue; // experimental duplicates, skip
  const folder = requireVarToFolder.get(varName);
  if (!folder) continue;
  if (!folderToExports.has(folder)) folderToExports.set(folder, []);
  folderToExports.get(folder).push(exportName);
}

// ---- 3. Web component tags grouped by folder (from custom-elements.json `path`) ----
const wcFolderToTags = new Map();
for (const tag of wcManifest.tags) {
  const m = tag.path.match(/\.\/src\/components\/([^/]+)\//);
  if (!m) continue;
  const folder = m[1];
  if (!wcFolderToTags.has(folder)) wcFolderToTags.set(folder, []);
  wcFolderToTags.get(folder).push({
    name: tag.name,
    description: tag.description || '',
    attributes: (tag.attributes || []).map((a) => ({
      name: a.name,
      type: a.type,
      default: a.default,
      description: a.description || '',
    })),
    events: (tag.events || []).map((e) => e.name),
  });
}

// ---- 4. React folder (PascalCase) -> Web Component folder (kebab-case) ----
function toKebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

const REACT_TO_WC_FOLDER = {
  PrimaryButton: 'button',
  SecondaryButton: 'button',
  DangerButton: 'button',
  ButtonSet: 'button',
  IconButton: 'icon-button',
  ComboButton: 'combo-button',
  RadioButton: 'radio-button',
  RadioButtonGroup: 'radio-button',
  RadioTile: 'tile',
  Tile: 'tile',
  TileGroup: 'tile',
  ClickableTile: 'tile',
  SelectableTile: 'tile',
  ExpandableTile: 'tile',
  Toggle: 'toggle',
  ToggleSmall: 'toggle',
  Switch: 'content-switcher',
  ContentSwitcher: 'content-switcher',
  Search: 'search',
  ExpandableSearch: 'search',
  Tag: 'tag',
  OperationalTag: 'tag',
  SelectableTag: 'tag',
  DismissibleTag: 'tag',
  Tabs: 'tabs',
  TabsVertical: 'tabs',
  Tab: 'tabs',
  TabContent: 'tabs',
  TabList: 'tabs',
  TabListVertical: 'tabs',
  TabPanel: 'tabs',
  TabPanels: 'tabs',
  Modal: 'modal',
  ComposedModal: 'modal',
  ModalWrapper: 'modal',
  ModalHeader: 'modal',
  ModalFooter: 'modal',
  ModalBody: 'modal',
  Checkbox: 'checkbox',
  CheckboxGroup: 'checkbox',
  InlineCheckbox: 'checkbox',
  Select: 'select',
  SelectItem: 'select',
  SelectItemGroup: 'select',
  TextArea: 'textarea',
  OrderedList: 'list',
  UnorderedList: 'list',
  ListItem: 'list',
  Grid: 'grid',
  FlexGrid: 'grid',
  Row: 'grid',
  Column: 'grid',
  Loading: 'loading',
  InlineLoading: 'inline-loading',
  Heading: 'heading',
  Text: 'heading',
  Copy: 'copy',
  CopyButton: 'copy-button',
  Tooltip: 'tooltip',
  DefinitionTooltip: 'tooltip',
  Toggletip: 'toggle-tip',
  ContextMenu: 'menu',
  Menu: 'menu',
  MenuButton: 'menu-button',
  MenuItem: 'menu',
  MultiSelect: 'multi-select',
  FilterableMultiSelect: 'multi-select',
  TreeView: 'tree-view',
  ComboBox: 'combo-box',
  SkeletonIcon: 'skeleton-icon',
  SkeletonPlaceholder: 'skeleton-placeholder',
  SkeletonText: 'skeleton-text',
  AccordionItem: 'accordion',
  BreadcrumbItem: 'breadcrumb',
  PaginationNav: 'pagination-nav',
  Pagination: 'pagination',
  PasswordInput: 'password-input',
  ControlledPasswordInput: 'password-input',
  ProgressIndicator: 'progress-indicator',
  ProgressStep: 'progress-indicator',
  ProgressBar: 'progress-bar',
  UIShell: 'ui-shell',
  Header: 'ui-shell',
  HeaderContainer: 'ui-shell',
  HeaderGlobalAction: 'ui-shell',
  HeaderGlobalBar: 'ui-shell',
  HeaderMenu: 'ui-shell',
  HeaderMenuButton: 'ui-shell',
  HeaderMenuItem: 'ui-shell',
  HeaderName: 'ui-shell',
  HeaderNavigation: 'ui-shell',
  HeaderPanel: 'ui-shell',
  HeaderSideNavItems: 'ui-shell',
  SideNav: 'ui-shell',
  SideNavDetails: 'ui-shell',
  SideNavDivider: 'ui-shell',
  SideNavFooter: 'ui-shell',
  SideNavHeader: 'ui-shell',
  SideNavIcon: 'ui-shell',
  SideNavItem: 'ui-shell',
  SideNavItems: 'ui-shell',
  SideNavLink: 'ui-shell',
  SideNavLinkText: 'ui-shell',
  SideNavMenu: 'ui-shell',
  SideNavMenuItem: 'ui-shell',
  SideNavSwitcher: 'ui-shell',
  Switcher: 'ui-shell',
  SwitcherDivider: 'ui-shell',
  SwitcherItem: 'ui-shell',
  SkipToContent: 'skip-to-content',
  OverflowMenu: 'overflow-menu',
  OverflowMenuItem: 'overflow-menu',
  OverflowMenuV2: 'overflow-menu',
  Notification: 'notification',
  ActionableNotification: 'notification',
  StaticNotification: 'notification',
  Popover: 'popover',
  Layer: 'layer',
  Stack: 'stack',
  AspectRatio: 'grid',
  ShapeIndicator: 'shape-indicator',
  IconIndicator: 'icon-indicator',
  PageHeader: 'page-header',
  AILabel: 'ai-label',
  AISkeleton: 'ai-skeleton',
  ChatButton: 'chat-button',
  DataTable: 'data-table',
  DataTableSkeleton: 'data-table',
  StructuredList: 'structured-list',
  Slider: 'slider',
  FluidForm: 'fluid-form',
  FluidComboBox: 'fluid-combo-box',
  FluidDropdown: 'fluid-dropdown',
  FluidMultiSelect: 'fluid-multi-select',
  FluidNumberInput: 'fluid-number-input',
  FluidPasswordInput: 'fluid-password-input',
  FluidSearch: 'fluid-search',
  FluidSelect: 'fluid-select',
  FluidTextArea: 'fluid-textarea',
  FluidTextInput: 'fluid-text-input',
  FluidTimePicker: 'fluid-time-picker',
  FluidTimePickerSelect: 'fluid-time-picker',
  FluidDatePicker: 'fluid-combo-box',
  FluidDatePickerInput: 'fluid-combo-box',
  DatePicker: 'date-picker',
  DatePickerInput: 'date-picker',
  TimePicker: 'time-picker',
  TimePickerSelect: 'time-picker',
  NumberInput: 'number-input',
  ContainedList: 'contained-list',
  ContainedListItem: 'contained-list',
  FileUploader: 'file-uploader',
  Form: 'form',
  FormGroup: 'form-group',
  FormItem: 'form',
  FormLabel: 'form',
  ListBox: 'select',
  Dropdown: 'dropdown',
  Link: 'link',
  CodeSnippet: 'code-snippet',
  Slug: 'slug',
  Dialog: 'dialog',
  ErrorBoundary: null,
  ErrorBoundaryContext: null,
  ClassPrefix: null,
  IdPrefix: null,
  LayoutDirection: null,
  FeatureFlags: null,
  Layout: 'layout',
  Portal: null,
  Theme: null,
  Utilities: null,
};

const families = [];
for (const [folder, exportNames] of folderToExports) {
  const wcFolder = REACT_TO_WC_FOLDER[folder] !== undefined ? REACT_TO_WC_FOLDER[folder] : (wcFolderToTags.has(toKebab(folder)) ? toKebab(folder) : null);
  const tags = wcFolder && wcFolderToTags.has(wcFolder) ? wcFolderToTags.get(wcFolder) : [];
  families.push({
    folder,
    reactExports: [...new Set(exportNames)].sort(),
    wcFolder,
    tags,
  });
}
// ---- 5. Web-Components-only families: stable as a custom element but only
// preview_/unstable_ (experimental) in @carbon/react, so they got no folder above ----
const WC_ONLY_FOLDERS = [
  'badge-indicator',
  'chat-button',
  'dialog',
  'icon-indicator',
  'layout',
  'page-header',
  'shape-indicator',
  'side-panel',
  'skip-to-content',
  'slug',
  'tearsheet',
];
const usedWcFolders = new Set(families.map((f) => f.wcFolder).filter(Boolean));
for (const wcFolder of WC_ONLY_FOLDERS) {
  if (usedWcFolders.has(wcFolder) || !wcFolderToTags.has(wcFolder)) continue;
  const folder = wcFolder
    .split('-')
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join('');
  families.push({
    folder,
    reactExports: [], // stable as a Web Component; only preview_/unstable_ in @carbon/react
    wcFolder,
    tags: wcFolderToTags.get(wcFolder),
  });
}

families.sort((a, b) => a.folder.localeCompare(b.folder));

writeFileSync('scripts/manifest.json', JSON.stringify(families, null, 2));
console.log(`families: ${families.length}`);
console.log(`families with wc tags: ${families.filter((f) => f.tags.length).length}`);
console.log(`total react exports: ${families.reduce((n, f) => n + f.reactExports.length, 0)}`);
console.log(`total wc tags used: ${families.reduce((n, f) => n + f.tags.length, 0)} / ${wcManifest.tags.length}`);
