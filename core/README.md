# core/

프레임워크 없이 순수 HTML에서 Carbon을 쓰는 방법입니다. Astryx의 `core/`와 달리 CSS를 실측/재구현하지
않았습니다 — Carbon은 오픈소스이므로 **실제 IBM 공식 패키지**(`@carbon/web-components`, `@carbon/styles`)를
그대로 설치해서 씁니다.

```
core/
└── components/*.html   Web Component 태그 1개당 파일 1개 (총 217개)
```

## 설치

```bash
npm install --save @carbon/web-components @carbon/styles
```

## 프로젝트에서 쓰는 법

```html
<link rel="stylesheet" href="node_modules/@carbon/styles/css/styles.min.css" />

<cds-button kind="primary">저장</cds-button>

<script type="module">
  import '@carbon/web-components/es/index.js'; // 전체 컴포넌트 등록
  // 또는 필요한 것만:
  // import '@carbon/web-components/es/components/button/index.js';
</script>
```

이 폴더의 각 `.html` 파일은 `../assets/carbon-web-components.bundle.js`(위 소스를 esbuild로
오프라인 번들링한 것)와 `../assets/carbon-styles.min.css`를 불러와 브라우저에서 바로 열어도 동작합니다.

## 컴포넌트 목록 (Web Component 태그 기준)

| 파일 | 태그 | 소속 패밀리 | 설명 |
|---|---|---|---|
| `AccordionItem.html` | `<cds-accordion-item>` | Accordion | Accordion item. |
| `Accordion.html` | `<cds-accordion>` | Accordion | Accordion container. |
| `AiLabelActionButton.html` | `<cds-ai-label-action-button>` | AILabel | AI Label action button. |
| `AiLabel.html` | `<cds-ai-label>` | AILabel | Basic AI Label. |
| `AiSkeletonIcon.html` | `<cds-ai-skeleton-icon>` | AISkeleton | AI skeleton icon. |
| `AiSkeletonPlaceholder.html` | `<cds-ai-skeleton-placeholder>` | AISkeleton | AI skeleton placeholder. |
| `AiSkeletonText.html` | `<cds-ai-skeleton-text>` | AISkeleton | AI skeleton text. |
| `ColumnHang.html` | `<cds-column-hang>` | AspectRatio | The column component. |
| `Column.html` | `<cds-column>` | AspectRatio | The column component. |
| `Grid.html` | `<cds-grid>` | AspectRatio | The grid component. |
| `BadgeIndicator.html` | `<cds-badge-indicator>` | BadgeIndicator | Badge Indicator. |
| `BreadcrumbItem.html` | `<cds-breadcrumb-item>` | Breadcrumb | Breadcrumb item. |
| `BreadcrumbLink.html` | `<cds-breadcrumb-link>` | Breadcrumb | Link in breadcrumb. |
| `BreadcrumbOverflowMenu.html` | `<cds-breadcrumb-overflow-menu>` | Breadcrumb | Overflow menu in breadcrumb. |
| `Breadcrumb.html` | `<cds-breadcrumb>` | Breadcrumb | Breadcrumb. |
| `ButtonSetBase.html` | `<cds-button-set-base>` | Button | Button set without button checks |
| `ButtonSet.html` | `<cds-button-set>` | Button | Button set. |
| `Button.html` | `<cds-button>` | Button | Button. |
| `ButtonSetBase.html` | `<cds-button-set-base>` | ButtonSet | Button set without button checks |
| `ButtonSet.html` | `<cds-button-set>` | ButtonSet | Button set. |
| `Button.html` | `<cds-button>` | ButtonSet | Button. |
| `ChatButtonSkeleton.html` | `<cds-chat-button-skeleton>` | ChatButton | Chat button skeleton. |
| `ChatButton.html` | `<cds-chat-button>` | ChatButton | Chat Button |
| `CheckboxGroup.html` | `<cds-checkbox-group>` | Checkbox | Check box. |
| `Checkbox.html` | `<cds-checkbox>` | Checkbox | Check box. |
| `CheckboxGroup.html` | `<cds-checkbox-group>` | CheckboxGroup | Check box. |
| `Checkbox.html` | `<cds-checkbox>` | CheckboxGroup | Check box. |
| `CodeSnippet.html` | `<cds-code-snippet>` | CodeSnippet | Basic code snippet. |
| `ComboBoxItem.html` | `<cds-combo-box-item>` | ComboBox | Combo box item. |
| `ComboBox.html` | `<cds-combo-box>` | ComboBox | Combo box. |
| `ComboButton.html` | `<cds-combo-button>` | ComboButton | Combo button. |
| `ModalBodyContent.html` | `<cds-modal-body-content>` | ComposedModal | Modal body content |
| `ModalBody.html` | `<cds-modal-body>` | ComposedModal | Modal body. |
| `ModalCloseButton.html` | `<cds-modal-close-button>` | ComposedModal | Modal close button. |
| `ModalFooterButton.html` | `<cds-modal-footer-button>` | ComposedModal | Modal footer button. |
| `ModalFooter.html` | `<cds-modal-footer>` | ComposedModal | Modal footer. |
| `ModalHeader.html` | `<cds-modal-header>` | ComposedModal | Modal header. |
| `ModalHeading.html` | `<cds-modal-heading>` | ComposedModal | Modal heading. |
| `ModalLabel.html` | `<cds-modal-label>` | ComposedModal | Modal label. |
| `Modal.html` | `<cds-modal>` | ComposedModal | Modal. |
| `ContainedListDescription.html` | `<cds-contained-list-description>` | ContainedList | Contained list description text. |
| `ContainedListItem.html` | `<cds-contained-list-item>` | ContainedList | Contained list item. |
| `ContainedList.html` | `<cds-contained-list>` | ContainedList | Contained list. |
| `ContentSwitcherItem.html` | `<cds-content-switcher-item>` | ContentSwitcher | Content switcher button. |
| `ContentSwitcher.html` | `<cds-content-switcher>` | ContentSwitcher | Content switcher. |
| `MenuItemDivider.html` | `<cds-menu-item-divider>` | ContextMenu | Menu Item. |
| `MenuItemGroup.html` | `<cds-menu-item-group>` | ContextMenu | Menu Item. |
| `MenuItemRadioGroup.html` | `<cds-menu-item-radio-group>` | ContextMenu | Menu Item. |
| `MenuItemSelectable.html` | `<cds-menu-item-selectable>` | ContextMenu | Menu Item Selectable. |
| `MenuItem.html` | `<cds-menu-item>` | ContextMenu | Menu Item. |
| `Copy.html` | `<cds-copy>` | Copy | Copy. |
| `CopyButton.html` | `<cds-copy-button>` | CopyButton | Copy button. |
| `ButtonSetBase.html` | `<cds-button-set-base>` | DangerButton | Button set without button checks |
| `ButtonSet.html` | `<cds-button-set>` | DangerButton | Button set. |
| `Button.html` | `<cds-button>` | DangerButton | Button. |
| `TableBatchActions.html` | `<cds-table-batch-actions>` | DataTable | Table batch actions. |
| `TableBody.html` | `<cds-table-body>` | DataTable | Data table body. |
| `TableCellContent.html` | `<cds-table-cell-content>` | DataTable | Data table cell content. |
| `TableCell.html` | `<cds-table-cell>` | DataTable | Data table cell. |
| `TableExpandedRow.html` | `<cds-table-expanded-row>` | DataTable | Table row of collapsible details. |
| `TableHead.html` | `<cds-table-head>` | DataTable | Data table header. |
| `TableHeaderCell.html` | `<cds-table-header-cell>` | DataTable | Data table header cell. |
| `TableHeaderDescription.html` | `<cds-table-header-description>` | DataTable | Data table header description |
| `TableHeaderRow.html` | `<cds-table-header-row>` | DataTable | Data table header row. |
| `TableHeaderTitle.html` | `<cds-table-header-title>` | DataTable | Data table header title |
| `TableRow.html` | `<cds-table-row>` | DataTable | Data table row. |
| `TableSkeleton.html` | `<cds-table-skeleton>` | DataTable | Data table skeleton |
| `TableToolbarContent.html` | `<cds-table-toolbar-content>` | DataTable | Table toolbar content. |
| `TableToolbarSearch.html` | `<cds-table-toolbar-search>` | DataTable | Table toolbar search. |
| `TableToolbar.html` | `<cds-table-toolbar>` | DataTable | Table toolbar. |
| `Table.html` | `<cds-table>` | DataTable | Data table. |
| `TableBatchActions.html` | `<cds-table-batch-actions>` | DataTableSkeleton | Table batch actions. |
| `TableBody.html` | `<cds-table-body>` | DataTableSkeleton | Data table body. |
| `TableCellContent.html` | `<cds-table-cell-content>` | DataTableSkeleton | Data table cell content. |
| `TableCell.html` | `<cds-table-cell>` | DataTableSkeleton | Data table cell. |
| `TableExpandedRow.html` | `<cds-table-expanded-row>` | DataTableSkeleton | Table row of collapsible details. |
| `TableHead.html` | `<cds-table-head>` | DataTableSkeleton | Data table header. |
| `TableHeaderCell.html` | `<cds-table-header-cell>` | DataTableSkeleton | Data table header cell. |
| `TableHeaderDescription.html` | `<cds-table-header-description>` | DataTableSkeleton | Data table header description |
| `TableHeaderRow.html` | `<cds-table-header-row>` | DataTableSkeleton | Data table header row. |
| `TableHeaderTitle.html` | `<cds-table-header-title>` | DataTableSkeleton | Data table header title |
| `TableRow.html` | `<cds-table-row>` | DataTableSkeleton | Data table row. |
| `TableSkeleton.html` | `<cds-table-skeleton>` | DataTableSkeleton | Data table skeleton |
| `TableToolbarContent.html` | `<cds-table-toolbar-content>` | DataTableSkeleton | Table toolbar content. |
| `TableToolbarSearch.html` | `<cds-table-toolbar-search>` | DataTableSkeleton | Table toolbar search. |
| `TableToolbar.html` | `<cds-table-toolbar>` | DataTableSkeleton | Table toolbar. |
| `Table.html` | `<cds-table>` | DataTableSkeleton | Data table. |
| `DatePickerInput.html` | `<cds-date-picker-input>` | DatePicker | The input box for date picker. |
| `DatePicker.html` | `<cds-date-picker>` | DatePicker | Date picker. |
| `DefinitionTooltip.html` | `<cds-definition-tooltip>` | DefinitionTooltip | Definition tooltip. |
| `DialogBody.html` | `<cds-dialog-body>` | Dialog | Dialog body. |
| `DialogCloseButton.html` | `<cds-dialog-close-button>` | Dialog | Dialog close button. |
| `DialogControls.html` | `<cds-dialog-controls>` | Dialog | Dialog header controls. |
| `DialogFooterButton.html` | `<cds-dialog-footer-button>` | Dialog | Dialog footer button. |
| `DialogFooter.html` | `<cds-dialog-footer>` | Dialog | Dialog footer. |
| `DialogHeader.html` | `<cds-dialog-header>` | Dialog | Dialog header. |
| `DialogSubtitle.html` | `<cds-dialog-subtitle>` | Dialog | Dialog subtitle. |
| `DialogTitle.html` | `<cds-dialog-title>` | Dialog | Dialog title. |
| `Dialog.html` | `<cds-dialog>` | Dialog | Dialog. |
| `DropdownItem.html` | `<cds-dropdown-item>` | Dropdown | Dropdown item. |
| `Dropdown.html` | `<cds-dropdown>` | Dropdown | Dropdown. |
| `Search.html` | `<cds-search>` | ExpandableSearch | Search box. |
| `FileUploaderButton.html` | `<cds-file-uploader-button>` | FileUploader | File uploader button . |
| `FileUploaderDropContainer.html` | `<cds-file-uploader-drop-container>` | FileUploader | File uploader drop container. |
| `FileUploaderItem.html` | `<cds-file-uploader-item>` | FileUploader | File uploader item. |
| `FileUploaderSkeleton.html` | `<cds-file-uploader-skeleton>` | FileUploader | The File uploader skeleton. |
| `FileUploader.html` | `<cds-file-uploader>` | FileUploader | The file uploader component. |
| `FluidComboBoxSkeleton.html` | `<cds-fluid-combo-box-skeleton>` | FluidComboBox | Fluid combo box skeleton. |
| `FluidComboBox.html` | `<cds-fluid-combo-box>` | FluidComboBox | Fluid combo box. |
| `FluidComboBoxSkeleton.html` | `<cds-fluid-combo-box-skeleton>` | FluidDatePicker | Fluid combo box skeleton. |
| `FluidComboBox.html` | `<cds-fluid-combo-box>` | FluidDatePicker | Fluid combo box. |
| `FluidComboBoxSkeleton.html` | `<cds-fluid-combo-box-skeleton>` | FluidDatePickerInput | Fluid combo box skeleton. |
| `FluidComboBox.html` | `<cds-fluid-combo-box>` | FluidDatePickerInput | Fluid combo box. |
| `FluidDropdownSkeleton.html` | `<cds-fluid-dropdown-skeleton>` | FluidDropdown | Fluid dropdown skeleton. |
| `FluidDropdown.html` | `<cds-fluid-dropdown>` | FluidDropdown | Fluid dropdown. |
| `FluidForm.html` | `<cds-fluid-form>` | FluidForm | Presentational element for fluid form |
| `FluidMultiSelectSkeleton.html` | `<cds-fluid-multi-select-skeleton>` | FluidMultiSelect | Fluid multi select skeleton. |
| `FluidMultiSelect.html` | `<cds-fluid-multi-select>` | FluidMultiSelect | Fluid multi select. |
| `FluidNumberInputSkeleton.html` | `<cds-fluid-number-input-skeleton>` | FluidNumberInput | Fluid number input. |
| `FluidNumberInput.html` | `<cds-fluid-number-input>` | FluidNumberInput | Fluid number input. |
| `FluidPasswordInput.html` | `<cds-fluid-password-input>` | FluidPasswordInput | Fluid password input. |
| `FluidSearchSkeleton.html` | `<cds-fluid-search-skeleton>` | FluidSearch | Fluid Search. |
| `FluidSearch.html` | `<cds-fluid-search>` | FluidSearch | Fluid text input. |
| `FluidSelectSkeleton.html` | `<cds-fluid-select-skeleton>` | FluidSelect | Fluid text area input. |
| `FluidSelect.html` | `<cds-fluid-select>` | FluidSelect | Fluid text select. |
| `FluidTextareaSkeleton.html` | `<cds-fluid-textarea-skeleton>` | FluidTextArea | Fluid text area skeleton. |
| `FluidTextarea.html` | `<cds-fluid-textarea>` | FluidTextArea | Fluid text area input. |
| `FluidTextInputSkeleton.html` | `<cds-fluid-text-input-skeleton>` | FluidTextInput | Fluid text area input. |
| `FluidTextInput.html` | `<cds-fluid-text-input>` | FluidTextInput | Fluid text input. |
| `FluidTimePickerSelect.html` | `<cds-fluid-time-picker-select>` | FluidTimePicker | Fluid time picker select. |
| `FluidTimePickerSkeleton.html` | `<cds-fluid-time-picker-skeleton>` | FluidTimePicker | Fluid time picker skeleton. |
| `FluidTimePicker.html` | `<cds-fluid-time-picker>` | FluidTimePicker | Fluid Time Picker component. |
| `FluidTimePickerSelect.html` | `<cds-fluid-time-picker-select>` | FluidTimePickerSelect | Fluid time picker select. |
| `FluidTimePickerSkeleton.html` | `<cds-fluid-time-picker-skeleton>` | FluidTimePickerSelect | Fluid time picker skeleton. |
| `FluidTimePicker.html` | `<cds-fluid-time-picker>` | FluidTimePickerSelect | Fluid Time Picker component. |
| `FormItem.html` | `<cds-form-item>` | Form | Presentational element for form items |
| `Form.html` | `<cds-form>` | Form | Presentational element for form |
| `FormGroup.html` | `<cds-form-group>` | FormGroup | The shell UI for file uploader. |
| `FormItem.html` | `<cds-form-item>` | FormItem | Presentational element for form items |
| `Form.html` | `<cds-form>` | FormItem | Presentational element for form |
| `FormItem.html` | `<cds-form-item>` | FormLabel | Presentational element for form items |
| `Form.html` | `<cds-form>` | FormLabel | Presentational element for form |
| `ColumnHang.html` | `<cds-column-hang>` | Grid | The column component. |
| `Column.html` | `<cds-column>` | Grid | The column component. |
| `Grid.html` | `<cds-grid>` | Grid | The grid component. |
| `Heading.html` | `<cds-heading>` | Heading | The heading component |
| `Icon.html` | `<cds-icon>` | Icon | Icon component that renders imported icons or custom SVG content. |
| `IconButton.html` | `<cds-icon-button>` | IconButton | Icon Button |
| `IconIndicator.html` | `<cds-icon-indicator>` | IconIndicator | Icon Indicator. |
| `CheckboxGroup.html` | `<cds-checkbox-group>` | InlineCheckbox | Check box. |
| `Checkbox.html` | `<cds-checkbox>` | InlineCheckbox | Check box. |
| `InlineLoading.html` | `<cds-inline-loading>` | InlineLoading | Lnline loading spinner. |
| `Layer.html` | `<cds-layer>` | Layer | Basic layer |
| `LayoutConstraint.html` | `<cds-layout-constraint>` | Layout | `<cds-layout-constraint>` restricts the size range available to its |
| `Layout.html` | `<cds-layout>` | Layout | `<cds-layout>` sets a layout context (size and/or density) for all |
| `Link.html` | `<cds-link>` | Link | Link. |
| `ListItem.html` | `<cds-list-item>` | ListItem | List item. |
| `OrderedList.html` | `<cds-ordered-list>` | ListItem | Ordered list. |
| `UnorderedList.html` | `<cds-unordered-list>` | ListItem | Unordered list. |
| `Loading.html` | `<cds-loading>` | Loading | Spinner indicating loading state. |
| `MenuItemDivider.html` | `<cds-menu-item-divider>` | Menu | Menu Item. |
| `MenuItemGroup.html` | `<cds-menu-item-group>` | Menu | Menu Item. |
| `MenuItemRadioGroup.html` | `<cds-menu-item-radio-group>` | Menu | Menu Item. |
| `MenuItemSelectable.html` | `<cds-menu-item-selectable>` | Menu | Menu Item Selectable. |
| `MenuItem.html` | `<cds-menu-item>` | Menu | Menu Item. |
| `MenuButton.html` | `<cds-menu-button>` | MenuButton | Menu button. |
| `ModalBodyContent.html` | `<cds-modal-body-content>` | Modal | Modal body content |
| `ModalBody.html` | `<cds-modal-body>` | Modal | Modal body. |
| `ModalCloseButton.html` | `<cds-modal-close-button>` | Modal | Modal close button. |
| `ModalFooterButton.html` | `<cds-modal-footer-button>` | Modal | Modal footer button. |
| `ModalFooter.html` | `<cds-modal-footer>` | Modal | Modal footer. |
| `ModalHeader.html` | `<cds-modal-header>` | Modal | Modal header. |
| `ModalHeading.html` | `<cds-modal-heading>` | Modal | Modal heading. |
| `ModalLabel.html` | `<cds-modal-label>` | Modal | Modal label. |
| `Modal.html` | `<cds-modal>` | Modal | Modal. |
| `ModalBodyContent.html` | `<cds-modal-body-content>` | ModalWrapper | Modal body content |
| `ModalBody.html` | `<cds-modal-body>` | ModalWrapper | Modal body. |
| `ModalCloseButton.html` | `<cds-modal-close-button>` | ModalWrapper | Modal close button. |
| `ModalFooterButton.html` | `<cds-modal-footer-button>` | ModalWrapper | Modal footer button. |
| `ModalFooter.html` | `<cds-modal-footer>` | ModalWrapper | Modal footer. |
| `ModalHeader.html` | `<cds-modal-header>` | ModalWrapper | Modal header. |
| `ModalHeading.html` | `<cds-modal-heading>` | ModalWrapper | Modal heading. |
| `ModalLabel.html` | `<cds-modal-label>` | ModalWrapper | Modal label. |
| `Modal.html` | `<cds-modal>` | ModalWrapper | Modal. |
| `MultiSelectItem.html` | `<cds-multi-select-item>` | MultiSelect | Multi select item. |
| `MultiSelect.html` | `<cds-multi-select>` | MultiSelect | Multi select. |
| `ActionableNotificationButton.html` | `<cds-actionable-notification-button>` | Notification | Actionable notification action button. |
| `ActionableNotification.html` | `<cds-actionable-notification>` | Notification | Actionable notification. |
| `CalloutNotification.html` | `<cds-callout-notification>` | Notification | Callout notification. |
| `InlineNotification.html` | `<cds-inline-notification>` | Notification | Inline notification. |
| `ToastNotification.html` | `<cds-toast-notification>` | Notification | Toast notification. |
| `NumberInput.html` | `<cds-number-input>` | NumberInput | Number input. |
| `ListItem.html` | `<cds-list-item>` | OrderedList | List item. |
| `OrderedList.html` | `<cds-ordered-list>` | OrderedList | Ordered list. |
| `UnorderedList.html` | `<cds-unordered-list>` | OrderedList | Unordered list. |
| `OverflowMenuBody.html` | `<cds-overflow-menu-body>` | OverflowMenu | Overflow menu body. |
| `OverflowMenuItem.html` | `<cds-overflow-menu-item>` | OverflowMenu | Overflow menu item. |
| `OverflowMenu.html` | `<cds-overflow-menu>` | OverflowMenu | Overflow menu. |
| `OverflowMenuBody.html` | `<cds-overflow-menu-body>` | OverflowMenuItem | Overflow menu body. |
| `OverflowMenuItem.html` | `<cds-overflow-menu-item>` | OverflowMenuItem | Overflow menu item. |
| `OverflowMenu.html` | `<cds-overflow-menu>` | OverflowMenuItem | Overflow menu. |
| `PageHeaderBreadcrumb.html` | `<cds-page-header-breadcrumb>` | PageHeader | Page header Breadcrumb Bar. |
| `PageHeaderContentText.html` | `<cds-page-header-content-text>` | PageHeader | Page header Content Text. |
| `PageHeaderContent.html` | `<cds-page-header-content>` | PageHeader | Page header content. |
| `PageHeaderHeroImage.html` | `<cds-page-header-hero-image>` | PageHeader | Page header Hero Image. |
| `PageHeaderTabs.html` | `<cds-page-header-tabs>` | PageHeader | Page header Tabs Bar. |
| `PageHeader.html` | `<cds-page-header>` | PageHeader | Page header. |
| `Pagination.html` | `<cds-pagination>` | Pagination | Pagination UI. |
| `PaginationNav.html` | `<cds-pagination-nav>` | PaginationNav | Pagination Navigation. |
| `PopoverContent.html` | `<cds-popover-content>` | Popover | Popover. |
| `Popover.html` | `<cds-popover>` | Popover | Popover. |
| `ButtonSetBase.html` | `<cds-button-set-base>` | PrimaryButton | Button set without button checks |
| `ButtonSet.html` | `<cds-button-set>` | PrimaryButton | Button set. |
| `Button.html` | `<cds-button>` | PrimaryButton | Button. |
| `ProgressBar.html` | `<cds-progress-bar>` | ProgressBar | Progress bar. |
| `ProgressIndicator.html` | `<cds-progress-indicator>` | ProgressIndicator | Progress indicator. |
| `ProgressStep.html` | `<cds-progress-step>` | ProgressIndicator | Progress step. |
| `RadioButtonGroup.html` | `<cds-radio-button-group>` | RadioButton | Radio button group. |
| `RadioButton.html` | `<cds-radio-button>` | RadioButton | Radio button. |
| `RadioButtonGroup.html` | `<cds-radio-button-group>` | RadioButtonGroup | Radio button group. |
| `RadioButton.html` | `<cds-radio-button>` | RadioButtonGroup | Radio button. |
| `ClickableTile.html` | `<cds-clickable-tile>` | RadioTile | Clickable tile. |
| `ExpandableTile.html` | `<cds-expandable-tile>` | RadioTile | Expandable tile. |
| `RadioTile.html` | `<cds-radio-tile>` | RadioTile | Radio tile. |
| `SelectableTile.html` | `<cds-selectable-tile>` | RadioTile | Multi-selectable tile. |
| `TileGroup.html` | `<cds-tile-group>` | RadioTile | Tile group. |
| `Tile.html` | `<cds-tile>` | RadioTile | Basic tile. |
| `Search.html` | `<cds-search>` | Search | Search box. |
| `ButtonSetBase.html` | `<cds-button-set-base>` | SecondaryButton | Button set without button checks |
| `ButtonSet.html` | `<cds-button-set>` | SecondaryButton | Button set. |
| `Button.html` | `<cds-button>` | SecondaryButton | Button. |
| `SelectItemGroup.html` | `<cds-select-item-group>` | Select | An option group in select box. |
| `SelectItem.html` | `<cds-select-item>` | Select | An option in select box. |
| `Select.html` | `<cds-select>` | Select | Select box. |
| `SelectItemGroup.html` | `<cds-select-item-group>` | SelectItem | An option group in select box. |
| `SelectItem.html` | `<cds-select-item>` | SelectItem | An option in select box. |
| `Select.html` | `<cds-select>` | SelectItem | Select box. |
| `SelectItemGroup.html` | `<cds-select-item-group>` | SelectItemGroup | An option group in select box. |
| `SelectItem.html` | `<cds-select-item>` | SelectItemGroup | An option in select box. |
| `Select.html` | `<cds-select>` | SelectItemGroup | Select box. |
| `ShapeIndicator.html` | `<cds-shape-indicator>` | ShapeIndicator | Shape Indicator. |
| `SidePanel.html` | `<cds-side-panel>` | SidePanel | SidePanel. |
| `SkeletonIcon.html` | `<cds-skeleton-icon>` | SkeletonIcon | Skeleton icon. |
| `SkeletonPlaceholder.html` | `<cds-skeleton-placeholder>` | SkeletonPlaceholder | Skeleton placeholder. |
| `SkeletonText.html` | `<cds-skeleton-text>` | SkeletonText | Skeleton text. |
| `SkipToContent.html` | `<cds-skip-to-content>` | SkipToContent | Skip-to-content link. |
| `SliderInput.html` | `<cds-slider-input>` | Slider | The `<input>` box for slider. |
| `Slider.html` | `<cds-slider>` | Slider | Slider. |
| `SlugActionButton.html` | `<cds-slug-action-button>` | Slug | Slug action button. |
| `Slug.html` | `<cds-slug>` | Slug | Basic slug. |
| `Stack.html` | `<cds-stack>` | Stack | The Stack component is a useful layout utility in a component-based model. |
| `StructuredListBody.html` | `<cds-structured-list-body>` | StructuredList | Structured list body. |
| `StructuredListCell.html` | `<cds-structured-list-cell>` | StructuredList | Structured list cell. |
| `StructuredListHead.html` | `<cds-structured-list-head>` | StructuredList | Structured list header. |
| `StructuredListHeaderCell.html` | `<cds-structured-list-header-cell>` | StructuredList | Structured list header cell. |
| `StructuredListHeaderRow.html` | `<cds-structured-list-header-row>` | StructuredList | Structured list header row. |
| `StructuredListRow.html` | `<cds-structured-list-row>` | StructuredList | Structured list row. |
| `StructuredList.html` | `<cds-structured-list>` | StructuredList | Structured list wrapper. |
| `ContentSwitcherItem.html` | `<cds-content-switcher-item>` | Switch | Content switcher button. |
| `ContentSwitcher.html` | `<cds-content-switcher>` | Switch | Content switcher. |
| `TabSkeleton.html` | `<cds-tab-skeleton>` | TabContent | Skeleton of tab. |
| `Tab.html` | `<cds-tab>` | TabContent | Basic tab. |
| `TabsSkeleton.html` | `<cds-tabs-skeleton>` | TabContent | Skeleton of tabs. |
| `TabsVertical.html` | `<cds-tabs-vertical>` | TabContent | Vertical tabs container component. |
| `Tabs.html` | `<cds-tabs>` | TabContent | Tabs. |
| `TabSkeleton.html` | `<cds-tab-skeleton>` | Tabs | Skeleton of tab. |
| `Tab.html` | `<cds-tab>` | Tabs | Basic tab. |
| `TabsSkeleton.html` | `<cds-tabs-skeleton>` | Tabs | Skeleton of tabs. |
| `TabsVertical.html` | `<cds-tabs-vertical>` | Tabs | Vertical tabs container component. |
| `Tabs.html` | `<cds-tabs>` | Tabs | Tabs. |
| `DismissibleTag.html` | `<cds-dismissible-tag>` | Tag | Dismissible Tag. |
| `OperationalTag.html` | `<cds-operational-tag>` | Tag | Operational tag. |
| `SelectableTag.html` | `<cds-selectable-tag>` | Tag | Selectable tag. |
| `TagSkeleton.html` | `<cds-tag-skeleton>` | Tag | Skeleton of tag. |
| `Tag.html` | `<cds-tag>` | Tag | Tag. |
| `Tearsheet.html` | `<cds-tearsheet>` | Tearsheet | Tearsheet. |
| `TextareaSkeleton.html` | `<cds-textarea-skeleton>` | TextArea |  |
| `Textarea.html` | `<cds-textarea>` | TextArea | Text area. |
| `TextInputSkeleton.html` | `<cds-text-input-skeleton>` | TextInput |  |
| `TextInput.html` | `<cds-text-input>` | TextInput | Text Input element. Supports all the usual attributes for textual input types |
| `ClickableTile.html` | `<cds-clickable-tile>` | Tile | Clickable tile. |
| `ExpandableTile.html` | `<cds-expandable-tile>` | Tile | Expandable tile. |
| `RadioTile.html` | `<cds-radio-tile>` | Tile | Radio tile. |
| `SelectableTile.html` | `<cds-selectable-tile>` | Tile | Multi-selectable tile. |
| `TileGroup.html` | `<cds-tile-group>` | Tile | Tile group. |
| `Tile.html` | `<cds-tile>` | Tile | Basic tile. |
| `ClickableTile.html` | `<cds-clickable-tile>` | TileGroup | Clickable tile. |
| `ExpandableTile.html` | `<cds-expandable-tile>` | TileGroup | Expandable tile. |
| `RadioTile.html` | `<cds-radio-tile>` | TileGroup | Radio tile. |
| `SelectableTile.html` | `<cds-selectable-tile>` | TileGroup | Multi-selectable tile. |
| `TileGroup.html` | `<cds-tile-group>` | TileGroup | Tile group. |
| `Tile.html` | `<cds-tile>` | TileGroup | Basic tile. |
| `TimePickerSelect.html` | `<cds-time-picker-select>` | TimePicker | Time picker select dropdown. |
| `TimePicker.html` | `<cds-time-picker>` | TimePicker | Time Picker component. |
| `TimePickerSelect.html` | `<cds-time-picker-select>` | TimePickerSelect | Time picker select dropdown. |
| `TimePicker.html` | `<cds-time-picker>` | TimePickerSelect | Time Picker component. |
| `ToggleSkeleton.html` | `<cds-toggle-skeleton>` | Toggle |  |
| `Toggle.html` | `<cds-toggle>` | Toggle | Basic toggle. |
| `ToggleSkeleton.html` | `<cds-toggle-skeleton>` | ToggleSmall |  |
| `Toggle.html` | `<cds-toggle>` | ToggleSmall | Basic toggle. |
| `Toggletip.html` | `<cds-toggletip>` | Toggletip | Definition tooltip. |
| `TooltipContent.html` | `<cds-tooltip-content>` | Tooltip | Tooltip content. |
| `Tooltip.html` | `<cds-tooltip>` | Tooltip | Trigger button of tooltip. |
| `TreeNode.html` | `<cds-tree-node>` | TreeView | Tree node. |
| `TreeView.html` | `<cds-tree-view>` | TreeView | Tree view. |
| `HeaderGlobalAction.html` | `<cds-header-global-action>` | UIShell | Header global action button |
| `HeaderMenuButton.html` | `<cds-header-menu-button>` | UIShell | The trigger button for side nav in header nav. |
| `HeaderMenuItem.html` | `<cds-header-menu-item>` | UIShell | Header submenu item. |
| `HeaderMenu.html` | `<cds-header-menu>` | UIShell | Header menu. |
| `HeaderName.html` | `<cds-header-name>` | UIShell | The product name UI in header nav. |
| `HeaderNavItem.html` | `<cds-header-nav-item>` | UIShell | Header nav item. |
| `HeaderNav.html` | `<cds-header-nav>` | UIShell | Header. |
| `HeaderPanel.html` | `<cds-header-panel>` | UIShell | Header panel |
| `HeaderSideNavItems.html` | `<cds-header-side-nav-items>` | UIShell | Header Side Nav Items section |
| `Header.html` | `<cds-header>` | UIShell | Header. |
| `SideNavDivider.html` | `<cds-side-nav-divider>` | UIShell | A divider in side nav. |
| `SideNavItems.html` | `<cds-side-nav-items>` | UIShell | Side nav items. |
| `SideNavLink.html` | `<cds-side-nav-link>` | UIShell | Side nav menu item. |
| `SideNavMenuItem.html` | `<cds-side-nav-menu-item>` | UIShell | Side nav menu item. |
| `SideNavMenu.html` | `<cds-side-nav-menu>` | UIShell | Side nav menu. |
| `SideNav.html` | `<cds-side-nav>` | UIShell | Side nav. |
| `SwitcherDivider.html` | `<cds-switcher-divider>` | UIShell | A divider in switcher. |
| `SwitcherItem.html` | `<cds-switcher-item>` | UIShell | Switcher menu item. |
| `Switcher.html` | `<cds-switcher>` | UIShell | Switcher |
| `ListItem.html` | `<cds-list-item>` | UnorderedList | List item. |
| `OrderedList.html` | `<cds-ordered-list>` | UnorderedList | Ordered list. |
| `UnorderedList.html` | `<cds-unordered-list>` | UnorderedList | Unordered list. |
