// Parses the REAL carbon-components-vue index.js (cached from GitHub) to map each
// exported CvXxx component to its source folder, then matches those to our existing
// React-derived family folders (Accordion, DataTable, TextInput, ...) so we can generate
// real @carbon/vue re-export wrappers instead of the web-components-wrapper approach.
import { readFileSync, writeFileSync } from 'node:fs';

const src = readFileSync('scripts/vue-source-cache/index.js', 'utf8');
const families = JSON.parse(readFileSync('scripts/manifest.json', 'utf8'));
const familyNames = new Set(families.map((f) => f.folder));

const exports_ = [...src.matchAll(/export \{ default as (Cv[A-Za-z0-9]+) \} from '\.\/components\/([^/]+)\/([^']+)\.vue';/g)]
  .map((m) => ({ cvName: m[1], cvFolder: m[2], file: m[3] }));

// Manual aliases where the Cv name doesn't map to our folder name by simple stripping
// of the 'Cv' prefix (Carbon 10 naming drifted from Carbon 11 in a few spots).
const ALIASES = {
  CvIconButton: 'IconButton',
  CvButtonSet: 'ButtonSet',
  CvRadioGroup: 'RadioButtonGroup',
  CvInlineNotification: 'Notification',
  CvToastNotification: 'Notification',
  CvSelectOption: 'SelectItem',
  CvSelectOptgroup: 'SelectItemGroup',
  CvDropdownItem: 'Dropdown',
  CvColumn: 'Grid',
  CvRow: 'Grid',
  CvTab: 'Tabs',
  CvHeaderNav: 'UIShell',
  CvSideNav: 'UIShell',
  CvHeader: 'UIShell',
  CvHeaderGlobalAction: 'UIShell',
  CvHeaderMenu: 'UIShell',
  CvHeaderMenuButton: 'UIShell',
  CvHeaderMenuItem: 'UIShell',
  CvHeaderName: 'UIShell',
  CvHeaderPanel: 'UIShell',
  CvContent: 'UIShell',
  CvListItem: 'ListItem',
  CvProgress: 'ProgressIndicator',
  CvProgressStep: 'ProgressIndicator',
  CvDefinitionTooltip: 'Tooltip',
  CvInteractiveTooltip: 'Tooltip',
  CvTileClickable: 'Tile',
  CvTileExpandable: 'Tile',
  CvTileSelectable: 'Tile',
  CvTileStandard: 'Tile',
  CvStructuredListData: 'StructuredList',
  CvStructuredListHeading: 'StructuredList',
  CvStructuredListItem: 'StructuredList',
  CvStructuredListItemSelectable: 'StructuredList',
  CvStructuredListItemStandard: 'StructuredList',
  CvDataTableAction: 'DataTable',
  CvDataTableCell: 'DataTable',
  CvDataTableHeading: 'DataTable',
  CvDataTableRow: 'DataTable',
  CvBreadcrumbSkeletonItem: 'Breadcrumb',
  CvContentSwitcherButton: 'ContentSwitcher',
  CvContentSwitcherContent: 'ContentSwitcher',
  CvList: 'OrderedList',
  CvProgressSkeleton: 'ProgressIndicator',
  CvSideNavIcon: 'UIShell',
  CvSideNavItems: 'UIShell',
  CvSideNavLink: 'UIShell',
  CvSideNavMenu: 'UIShell',
  CvSideNavMenuDivider: 'UIShell',
  CvSideNavMenuItem: 'UIShell',
  CvSwitcher: 'UIShell',
  CvSwitcherItem: 'UIShell',
  CvSwitcherItemLink: 'UIShell',
};

function guessFolder(cvName) {
  if (ALIASES[cvName]) return ALIASES[cvName];
  const stripped = cvName.replace(/^Cv/, '');
  if (familyNames.has(stripped)) return stripped;
  // try stripping a trailing 'Skeleton' etc — match base name
  const base = stripped.replace(/(Skeleton|Item)$/, '');
  if (familyNames.has(base)) return base;
  return null;
}

const mapped = [];
const unmapped = [];
for (const e of exports_) {
  const folder = guessFolder(e.cvName);
  if (folder) mapped.push({ ...e, folder });
  else unmapped.push(e);
}

console.log(`total Cv exports: ${exports_.length}`);
console.log(`mapped to a family folder: ${mapped.length}`);
console.log(`unmapped: ${unmapped.length} -> ${unmapped.map((u) => u.cvName).join(', ')}`);

writeFileSync('scripts/vue-manifest.json', JSON.stringify(mapped, null, 2));
