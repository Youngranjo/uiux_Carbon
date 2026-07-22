# react/

Carbon은 React를 공식 지원하므로, Astryx의 react/ 폴더와 동일한 방식(공식 패키지를 그대로 감싸서
재export)으로 구성했습니다. 재구현 없음 — `node_modules/@carbon/react`의 실제 소스를 그대로 씁니다.

```
react/
└── components/*.jsx   React 패밀리(폴더) 1개당 파일 1개 (총 118개)
```

## 설치

```bash
npm install --save @carbon/react @carbon/styles react react-dom
```

## 프로젝트 엔트리에서 한 번만

```js
import '@carbon/react/index.scss';
// Sass 빌드 파이프라인이 없다면 미리 컴파일된 CSS를 대신 써도 됩니다:
// import '../assets/carbon-styles.min.css';
```

## 사용

```jsx
import { Button } from './components/Button';

<Button kind="primary">저장</Button>
```

## 컴포넌트 목록

일부 항목(11개)은 `@carbon/web-components`에서는 안정 버전이지만
`@carbon/react`에서는 아직 `unstable_`/`preview_` 접두사의 실험적 API로만 제공됩니다 — 표에 "preview only"로 표시했습니다.

| 파일 | 상태 | export |
|---|---|---|
| `Accordion.jsx` | ready | Accordion, AccordionItem, AccordionSkeleton |
| `AILabel.jsx` | ready | AILabel, AILabelActions, AILabelContent |
| `AISkeleton.jsx` | ready | AISkeletonIcon, AISkeletonPlaceholder, AISkeletonText |
| `AspectRatio.jsx` | ready | AspectRatio |
| `BadgeIndicator.jsx` | preview only | (experimental: unstable_BadgeIndicator) |
| `Breadcrumb.jsx` | ready | Breadcrumb, BreadcrumbItem, BreadcrumbSkeleton |
| `Button.jsx` | ready | Button, ButtonKinds, ButtonSizes, ButtonSkeleton, ButtonTooltipAlignments, ButtonTooltipPositions |
| `ButtonSet.jsx` | ready | ButtonSet |
| `ChatButton.jsx` | preview only | (experimental: unstable_ChatButton) |
| `Checkbox.jsx` | ready | Checkbox, CheckboxSkeleton |
| `CheckboxGroup.jsx` | ready | CheckboxGroup |
| `ClassPrefix.jsx` | ready | ClassPrefix |
| `CodeSnippet.jsx` | ready | CodeSnippet, CodeSnippetSkeleton |
| `ComboBox.jsx` | ready | ComboBox |
| `ComboButton.jsx` | ready | ComboButton |
| `ComposedModal.jsx` | ready | ComposedModal, ComposedModalPresence, ModalBody, ModalFooter, ModalHeader, withComposedModalPresence |
| `ContainedList.jsx` | ready | ContainedList, ContainedListItem |
| `ContentSwitcher.jsx` | ready | ContentSwitcher |
| `ContextMenu.jsx` | ready | useContextMenu |
| `Copy.jsx` | ready | Copy |
| `CopyButton.jsx` | ready | CopyButton |
| `DangerButton.jsx` | ready | DangerButton |
| `DataTable.jsx` | ready | DataTable, Table, TableActionList, TableBatchAction, TableBatchActions, TableBody, TableCell, TableContainer, TableDecoratorRow, TableExpandHeader, TableExpandRow, TableExpandedRow, TableHead, TableHeader, TableRow, TableSelectAll, TableSelectRow, TableSlugRow, TableToolbar, TableToolbarAction, TableToolbarContent, TableToolbarMenu, TableToolbarSearch |
| `DataTableSkeleton.jsx` | ready | DataTableSkeleton |
| `DatePicker.jsx` | ready | DatePicker, DatePickerSkeleton |
| `DefinitionTooltip.jsx` | ready | DefinitionTooltip |
| `Dialog.jsx` | preview only | (experimental: unstable_Dialog) |
| `Dropdown.jsx` | ready | Dropdown, DropdownSkeleton |
| `ErrorBoundary.jsx` | ready | ErrorBoundary, ErrorBoundaryContext |
| `ExpandableSearch.jsx` | ready | ExpandableSearch |
| `FeatureFlags.jsx` | ready | FeatureFlags, useFeatureFlag, useFeatureFlags |
| `FileUploader.jsx` | ready | FileUploader, FileUploaderButton, FileUploaderDropContainer, FileUploaderItem, FileUploaderSkeleton, Filename |
| `FluidComboBox.jsx` | ready | FluidComboBox, FluidComboBoxSkeleton |
| `FluidDatePicker.jsx` | ready | FluidDatePicker, FluidDatePickerSkeleton |
| `FluidDatePickerInput.jsx` | ready | FluidDatePickerInput |
| `FluidDropdown.jsx` | ready | FluidDropdown, FluidDropdownSkeleton |
| `FluidForm.jsx` | ready | FluidForm, FormContext |
| `FluidMultiSelect.jsx` | ready | FluidMultiSelect, FluidMultiSelectSkeleton |
| `FluidNumberInput.jsx` | ready | FluidNumberInput, FluidNumberInputSkeleton |
| `FluidPasswordInput.jsx` | ready | FluidPasswordInput |
| `FluidSearch.jsx` | ready | FluidSearch, FluidSearchSkeleton |
| `FluidSelect.jsx` | ready | FluidSelect, FluidSelectSkeleton |
| `FluidTextArea.jsx` | ready | FluidTextArea, FluidTextAreaSkeleton |
| `FluidTextInput.jsx` | ready | FluidTextInput, FluidTextInputSkeleton |
| `FluidTimePicker.jsx` | ready | FluidTimePicker, FluidTimePickerSkeleton |
| `FluidTimePickerSelect.jsx` | ready | FluidTimePickerSelect |
| `Form.jsx` | ready | Form |
| `FormGroup.jsx` | ready | FormGroup |
| `FormItem.jsx` | ready | FormItem |
| `FormLabel.jsx` | ready | FormLabel |
| `Grid.jsx` | ready | Column, ColumnHang, FlexGrid, Grid, GridSettings, Row |
| `Heading.jsx` | ready | Heading, Section |
| `Icon.jsx` | ready | IconSkeleton |
| `IconButton.jsx` | ready | IconButton, IconButtonKinds |
| `IconIndicator.jsx` | preview only | (experimental: unstable_IconIndicator) |
| `IdPrefix.jsx` | ready | IdPrefix |
| `InlineCheckbox.jsx` | ready | InlineCheckbox |
| `InlineLoading.jsx` | ready | InlineLoading |
| `Layer.jsx` | ready | Layer, useLayer |
| `Layout.jsx` | preview only | (experimental: unstable_Layout) |
| `Link.jsx` | ready | Link |
| `ListItem.jsx` | ready | ListItem |
| `Loading.jsx` | ready | Loading |
| `Menu.jsx` | ready | Menu, MenuItem, MenuItemDivider, MenuItemGroup, MenuItemRadioGroup, MenuItemSelectable |
| `MenuButton.jsx` | ready | MenuButton |
| `Modal.jsx` | ready | Modal, ModalPresence, withModalPresence |
| `ModalWrapper.jsx` | ready | ModalWrapper |
| `MultiSelect.jsx` | ready | FilterableMultiSelect, MultiSelect |
| `Notification.jsx` | ready | ActionableNotification, Callout, InlineNotification, NotificationActionButton, NotificationButton, StaticNotification, ToastNotification |
| `NumberInput.jsx` | ready | NumberInput, NumberInputSkeleton, validateNumberSeparators |
| `OrderedList.jsx` | ready | OrderedList |
| `OverflowMenu.jsx` | ready | OverflowMenu |
| `OverflowMenuItem.jsx` | ready | OverflowMenuItem |
| `PageHeader.jsx` | preview only | (experimental: unstable_PageHeader) |
| `Pagination.jsx` | ready | Pagination, PaginationSkeleton |
| `PaginationNav.jsx` | ready | PaginationNav |
| `PasswordInput.jsx` | ready | PasswordInput |
| `Popover.jsx` | ready | Popover, PopoverContent |
| `PrimaryButton.jsx` | ready | PrimaryButton |
| `ProgressBar.jsx` | ready | ProgressBar |
| `ProgressIndicator.jsx` | ready | ProgressIndicator, ProgressIndicatorSkeleton, ProgressStep |
| `RadioButton.jsx` | ready | RadioButton, RadioButtonSkeleton |
| `RadioButtonGroup.jsx` | ready | RadioButtonGroup |
| `RadioTile.jsx` | ready | RadioTile |
| `Search.jsx` | ready | Search, SearchSkeleton |
| `SecondaryButton.jsx` | ready | SecondaryButton |
| `Select.jsx` | ready | Select, SelectSkeleton |
| `SelectItem.jsx` | ready | SelectItem |
| `SelectItemGroup.jsx` | ready | SelectItemGroup |
| `ShapeIndicator.jsx` | preview only | (experimental: unstable_ShapeIndicator) |
| `SidePanel.jsx` | preview only | (experimental: unstable_SidePanel) |
| `SkeletonIcon.jsx` | ready | SkeletonIcon |
| `SkeletonPlaceholder.jsx` | ready | SkeletonPlaceholder |
| `SkeletonText.jsx` | ready | SkeletonText |
| `SkipToContent.jsx` | preview only | (experimental: unstable_SkipToContent) |
| `Slider.jsx` | ready | Slider, SliderSkeleton |
| `Slug.jsx` | preview only | (experimental: unstable_Slug) |
| `Stack.jsx` | ready | HStack, Stack, VStack |
| `StructuredList.jsx` | ready | StructuredListBody, StructuredListCell, StructuredListHead, StructuredListInput, StructuredListRow, StructuredListSkeleton, StructuredListWrapper |
| `Switch.jsx` | ready | IconSwitch, Switch |
| `TabContent.jsx` | ready | TabContent |
| `Tabs.jsx` | ready | IconTab, Tab, TabList, TabListVertical, TabPanel, TabPanels, Tabs, TabsSkeleton, TabsVertical |
| `Tag.jsx` | ready | DismissibleTag, OperationalTag, SelectableTag, Tag, TagSkeleton |
| `Tearsheet.jsx` | preview only | (experimental: unstable_Tearsheet) |
| `TextArea.jsx` | ready | TextArea, TextAreaSkeleton |
| `TextInput.jsx` | ready | ControlledPasswordInput, TextInput, TextInputSkeleton |
| `Theme.jsx` | ready | GlobalTheme, Theme, ThemeContext, usePrefersDarkScheme, useTheme |
| `Tile.jsx` | ready | ClickableTile, ExpandableTile, SelectableTile, Tile, TileAboveTheFoldContent, TileBelowTheFoldContent |
| `TileGroup.jsx` | ready | TileGroup |
| `TimePicker.jsx` | ready | TimePicker |
| `TimePickerSelect.jsx` | ready | TimePickerSelect |
| `Toggle.jsx` | ready | Toggle, ToggleSkeleton |
| `ToggleSmall.jsx` | ready | ToggleSmallSkeleton |
| `Toggletip.jsx` | ready | Toggletip, ToggletipActions, ToggletipButton, ToggletipContent, ToggletipLabel |
| `Tooltip.jsx` | ready | Tooltip |
| `TreeView.jsx` | ready | TreeNode, TreeView |
| `UIShell.jsx` | ready | Content, Header, HeaderContainer, HeaderGlobalAction, HeaderGlobalBar, HeaderMenu, HeaderMenuButton, HeaderMenuItem, HeaderName, HeaderNavigation, HeaderPanel, HeaderSideNavItems, SideNav, SideNavDetails, SideNavDivider, SideNavFooter, SideNavHeader, SideNavIcon, SideNavItem, SideNavItems, SideNavLink, SideNavLinkText, SideNavMenu, SideNavMenuItem, SideNavSwitcher, SkipToContent, Switcher, SwitcherDivider, SwitcherItem |
| `UnorderedList.jsx` | ready | UnorderedList |
