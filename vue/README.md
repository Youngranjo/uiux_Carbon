# vue/

Carbon은 IBM 공식 Vue 패키지가 없습니다. 공식 가이드는 "Vue는 Web Components를 네이티브 HTML 태그처럼
그대로 쓸 수 있다"는 것이므로, 이 폴더의 각 `.vue` 파일은 `@carbon/web-components`의 실제 커스텀 엘리먼트를
감싸는 얇은 SFC 래퍼입니다 (재구현 아님).

```
vue/
└── components/*.vue   Web Component 태그 1개당 파일 1개 (총 217개)
```

## 설치

```bash
npm install --save @carbon/web-components @carbon/styles
```

## Vue 앱 엔트리에서 한 번만

```js
// main.js
import { createApp } from 'vue';
import '@carbon/web-components/es/index.js';

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-');
app.mount('#app');
```

```html
<!-- index.html -->
<link rel="stylesheet" href="node_modules/@carbon/styles/css/styles.min.css" />
```

## 사용

```vue
<script setup>
import Button from './components/Button.vue';
</script>

<template>
  <Button kind="primary">저장</Button>
</template>
```

## 컴포넌트 목록

| 파일 | 태그 | 소속 패밀리 |
|---|---|---|
| `AccordionItem.vue` | `<cds-accordion-item>` | Accordion |
| `Accordion.vue` | `<cds-accordion>` | Accordion |
| `AiLabelActionButton.vue` | `<cds-ai-label-action-button>` | AILabel |
| `AiLabel.vue` | `<cds-ai-label>` | AILabel |
| `AiSkeletonIcon.vue` | `<cds-ai-skeleton-icon>` | AISkeleton |
| `AiSkeletonPlaceholder.vue` | `<cds-ai-skeleton-placeholder>` | AISkeleton |
| `AiSkeletonText.vue` | `<cds-ai-skeleton-text>` | AISkeleton |
| `ColumnHang.vue` | `<cds-column-hang>` | AspectRatio |
| `Column.vue` | `<cds-column>` | AspectRatio |
| `Grid.vue` | `<cds-grid>` | AspectRatio |
| `BadgeIndicator.vue` | `<cds-badge-indicator>` | BadgeIndicator |
| `BreadcrumbItem.vue` | `<cds-breadcrumb-item>` | Breadcrumb |
| `BreadcrumbLink.vue` | `<cds-breadcrumb-link>` | Breadcrumb |
| `BreadcrumbOverflowMenu.vue` | `<cds-breadcrumb-overflow-menu>` | Breadcrumb |
| `Breadcrumb.vue` | `<cds-breadcrumb>` | Breadcrumb |
| `ButtonSetBase.vue` | `<cds-button-set-base>` | Button |
| `ButtonSet.vue` | `<cds-button-set>` | Button |
| `Button.vue` | `<cds-button>` | Button |
| `ButtonSetBase.vue` | `<cds-button-set-base>` | ButtonSet |
| `ButtonSet.vue` | `<cds-button-set>` | ButtonSet |
| `Button.vue` | `<cds-button>` | ButtonSet |
| `ChatButtonSkeleton.vue` | `<cds-chat-button-skeleton>` | ChatButton |
| `ChatButton.vue` | `<cds-chat-button>` | ChatButton |
| `CheckboxGroup.vue` | `<cds-checkbox-group>` | Checkbox |
| `Checkbox.vue` | `<cds-checkbox>` | Checkbox |
| `CheckboxGroup.vue` | `<cds-checkbox-group>` | CheckboxGroup |
| `Checkbox.vue` | `<cds-checkbox>` | CheckboxGroup |
| `CodeSnippet.vue` | `<cds-code-snippet>` | CodeSnippet |
| `ComboBoxItem.vue` | `<cds-combo-box-item>` | ComboBox |
| `ComboBox.vue` | `<cds-combo-box>` | ComboBox |
| `ComboButton.vue` | `<cds-combo-button>` | ComboButton |
| `ModalBodyContent.vue` | `<cds-modal-body-content>` | ComposedModal |
| `ModalBody.vue` | `<cds-modal-body>` | ComposedModal |
| `ModalCloseButton.vue` | `<cds-modal-close-button>` | ComposedModal |
| `ModalFooterButton.vue` | `<cds-modal-footer-button>` | ComposedModal |
| `ModalFooter.vue` | `<cds-modal-footer>` | ComposedModal |
| `ModalHeader.vue` | `<cds-modal-header>` | ComposedModal |
| `ModalHeading.vue` | `<cds-modal-heading>` | ComposedModal |
| `ModalLabel.vue` | `<cds-modal-label>` | ComposedModal |
| `Modal.vue` | `<cds-modal>` | ComposedModal |
| `ContainedListDescription.vue` | `<cds-contained-list-description>` | ContainedList |
| `ContainedListItem.vue` | `<cds-contained-list-item>` | ContainedList |
| `ContainedList.vue` | `<cds-contained-list>` | ContainedList |
| `ContentSwitcherItem.vue` | `<cds-content-switcher-item>` | ContentSwitcher |
| `ContentSwitcher.vue` | `<cds-content-switcher>` | ContentSwitcher |
| `MenuItemDivider.vue` | `<cds-menu-item-divider>` | ContextMenu |
| `MenuItemGroup.vue` | `<cds-menu-item-group>` | ContextMenu |
| `MenuItemRadioGroup.vue` | `<cds-menu-item-radio-group>` | ContextMenu |
| `MenuItemSelectable.vue` | `<cds-menu-item-selectable>` | ContextMenu |
| `MenuItem.vue` | `<cds-menu-item>` | ContextMenu |
| `Copy.vue` | `<cds-copy>` | Copy |
| `CopyButton.vue` | `<cds-copy-button>` | CopyButton |
| `ButtonSetBase.vue` | `<cds-button-set-base>` | DangerButton |
| `ButtonSet.vue` | `<cds-button-set>` | DangerButton |
| `Button.vue` | `<cds-button>` | DangerButton |
| `TableBatchActions.vue` | `<cds-table-batch-actions>` | DataTable |
| `TableBody.vue` | `<cds-table-body>` | DataTable |
| `TableCellContent.vue` | `<cds-table-cell-content>` | DataTable |
| `TableCell.vue` | `<cds-table-cell>` | DataTable |
| `TableExpandedRow.vue` | `<cds-table-expanded-row>` | DataTable |
| `TableHead.vue` | `<cds-table-head>` | DataTable |
| `TableHeaderCell.vue` | `<cds-table-header-cell>` | DataTable |
| `TableHeaderDescription.vue` | `<cds-table-header-description>` | DataTable |
| `TableHeaderRow.vue` | `<cds-table-header-row>` | DataTable |
| `TableHeaderTitle.vue` | `<cds-table-header-title>` | DataTable |
| `TableRow.vue` | `<cds-table-row>` | DataTable |
| `TableSkeleton.vue` | `<cds-table-skeleton>` | DataTable |
| `TableToolbarContent.vue` | `<cds-table-toolbar-content>` | DataTable |
| `TableToolbarSearch.vue` | `<cds-table-toolbar-search>` | DataTable |
| `TableToolbar.vue` | `<cds-table-toolbar>` | DataTable |
| `Table.vue` | `<cds-table>` | DataTable |
| `TableBatchActions.vue` | `<cds-table-batch-actions>` | DataTableSkeleton |
| `TableBody.vue` | `<cds-table-body>` | DataTableSkeleton |
| `TableCellContent.vue` | `<cds-table-cell-content>` | DataTableSkeleton |
| `TableCell.vue` | `<cds-table-cell>` | DataTableSkeleton |
| `TableExpandedRow.vue` | `<cds-table-expanded-row>` | DataTableSkeleton |
| `TableHead.vue` | `<cds-table-head>` | DataTableSkeleton |
| `TableHeaderCell.vue` | `<cds-table-header-cell>` | DataTableSkeleton |
| `TableHeaderDescription.vue` | `<cds-table-header-description>` | DataTableSkeleton |
| `TableHeaderRow.vue` | `<cds-table-header-row>` | DataTableSkeleton |
| `TableHeaderTitle.vue` | `<cds-table-header-title>` | DataTableSkeleton |
| `TableRow.vue` | `<cds-table-row>` | DataTableSkeleton |
| `TableSkeleton.vue` | `<cds-table-skeleton>` | DataTableSkeleton |
| `TableToolbarContent.vue` | `<cds-table-toolbar-content>` | DataTableSkeleton |
| `TableToolbarSearch.vue` | `<cds-table-toolbar-search>` | DataTableSkeleton |
| `TableToolbar.vue` | `<cds-table-toolbar>` | DataTableSkeleton |
| `Table.vue` | `<cds-table>` | DataTableSkeleton |
| `DatePickerInput.vue` | `<cds-date-picker-input>` | DatePicker |
| `DatePicker.vue` | `<cds-date-picker>` | DatePicker |
| `DatePickerInput.vue` | `<cds-date-picker-input>` | DatePickerInput |
| `DatePicker.vue` | `<cds-date-picker>` | DatePickerInput |
| `DialogBody.vue` | `<cds-dialog-body>` | Dialog |
| `DialogCloseButton.vue` | `<cds-dialog-close-button>` | Dialog |
| `DialogControls.vue` | `<cds-dialog-controls>` | Dialog |
| `DialogFooterButton.vue` | `<cds-dialog-footer-button>` | Dialog |
| `DialogFooter.vue` | `<cds-dialog-footer>` | Dialog |
| `DialogHeader.vue` | `<cds-dialog-header>` | Dialog |
| `DialogSubtitle.vue` | `<cds-dialog-subtitle>` | Dialog |
| `DialogTitle.vue` | `<cds-dialog-title>` | Dialog |
| `Dialog.vue` | `<cds-dialog>` | Dialog |
| `DropdownItem.vue` | `<cds-dropdown-item>` | Dropdown |
| `Dropdown.vue` | `<cds-dropdown>` | Dropdown |
| `Search.vue` | `<cds-search>` | ExpandableSearch |
| `FileUploaderButton.vue` | `<cds-file-uploader-button>` | FileUploader |
| `FileUploaderDropContainer.vue` | `<cds-file-uploader-drop-container>` | FileUploader |
| `FileUploaderItem.vue` | `<cds-file-uploader-item>` | FileUploader |
| `FileUploaderSkeleton.vue` | `<cds-file-uploader-skeleton>` | FileUploader |
| `FileUploader.vue` | `<cds-file-uploader>` | FileUploader |
| `FluidComboBoxSkeleton.vue` | `<cds-fluid-combo-box-skeleton>` | FluidComboBox |
| `FluidComboBox.vue` | `<cds-fluid-combo-box>` | FluidComboBox |
| `FluidComboBoxSkeleton.vue` | `<cds-fluid-combo-box-skeleton>` | FluidDatePicker |
| `FluidComboBox.vue` | `<cds-fluid-combo-box>` | FluidDatePicker |
| `FluidComboBoxSkeleton.vue` | `<cds-fluid-combo-box-skeleton>` | FluidDatePickerInput |
| `FluidComboBox.vue` | `<cds-fluid-combo-box>` | FluidDatePickerInput |
| `FluidDropdownSkeleton.vue` | `<cds-fluid-dropdown-skeleton>` | FluidDropdown |
| `FluidDropdown.vue` | `<cds-fluid-dropdown>` | FluidDropdown |
| `FluidForm.vue` | `<cds-fluid-form>` | FluidForm |
| `FluidMultiSelectSkeleton.vue` | `<cds-fluid-multi-select-skeleton>` | FluidMultiSelect |
| `FluidMultiSelect.vue` | `<cds-fluid-multi-select>` | FluidMultiSelect |
| `FluidNumberInputSkeleton.vue` | `<cds-fluid-number-input-skeleton>` | FluidNumberInput |
| `FluidNumberInput.vue` | `<cds-fluid-number-input>` | FluidNumberInput |
| `FluidSearchSkeleton.vue` | `<cds-fluid-search-skeleton>` | FluidSearch |
| `FluidSearch.vue` | `<cds-fluid-search>` | FluidSearch |
| `FluidSelectSkeleton.vue` | `<cds-fluid-select-skeleton>` | FluidSelect |
| `FluidSelect.vue` | `<cds-fluid-select>` | FluidSelect |
| `FluidTextareaSkeleton.vue` | `<cds-fluid-textarea-skeleton>` | FluidTextArea |
| `FluidTextarea.vue` | `<cds-fluid-textarea>` | FluidTextArea |
| `FluidTextInputSkeleton.vue` | `<cds-fluid-text-input-skeleton>` | FluidTextInput |
| `FluidTextInput.vue` | `<cds-fluid-text-input>` | FluidTextInput |
| `FluidTimePickerSelect.vue` | `<cds-fluid-time-picker-select>` | FluidTimePicker |
| `FluidTimePickerSkeleton.vue` | `<cds-fluid-time-picker-skeleton>` | FluidTimePicker |
| `FluidTimePicker.vue` | `<cds-fluid-time-picker>` | FluidTimePicker |
| `FluidTimePickerSelect.vue` | `<cds-fluid-time-picker-select>` | FluidTimePickerSelect |
| `FluidTimePickerSkeleton.vue` | `<cds-fluid-time-picker-skeleton>` | FluidTimePickerSelect |
| `FluidTimePicker.vue` | `<cds-fluid-time-picker>` | FluidTimePickerSelect |
| `FormItem.vue` | `<cds-form-item>` | Form |
| `Form.vue` | `<cds-form>` | Form |
| `FormGroup.vue` | `<cds-form-group>` | FormGroup |
| `FormItem.vue` | `<cds-form-item>` | FormItem |
| `Form.vue` | `<cds-form>` | FormItem |
| `FormItem.vue` | `<cds-form-item>` | FormLabel |
| `Form.vue` | `<cds-form>` | FormLabel |
| `ColumnHang.vue` | `<cds-column-hang>` | Grid |
| `Column.vue` | `<cds-column>` | Grid |
| `Grid.vue` | `<cds-grid>` | Grid |
| `Heading.vue` | `<cds-heading>` | Heading |
| `Icon.vue` | `<cds-icon>` | Icon |
| `IconButton.vue` | `<cds-icon-button>` | IconButton |
| `IconIndicator.vue` | `<cds-icon-indicator>` | IconIndicator |
| `CheckboxGroup.vue` | `<cds-checkbox-group>` | InlineCheckbox |
| `Checkbox.vue` | `<cds-checkbox>` | InlineCheckbox |
| `InlineLoading.vue` | `<cds-inline-loading>` | InlineLoading |
| `Layer.vue` | `<cds-layer>` | Layer |
| `LayoutConstraint.vue` | `<cds-layout-constraint>` | Layout |
| `Layout.vue` | `<cds-layout>` | Layout |
| `Link.vue` | `<cds-link>` | Link |
| `ListItem.vue` | `<cds-list-item>` | ListItem |
| `OrderedList.vue` | `<cds-ordered-list>` | ListItem |
| `UnorderedList.vue` | `<cds-unordered-list>` | ListItem |
| `Loading.vue` | `<cds-loading>` | Loading |
| `MenuItemDivider.vue` | `<cds-menu-item-divider>` | Menu |
| `MenuItemGroup.vue` | `<cds-menu-item-group>` | Menu |
| `MenuItemRadioGroup.vue` | `<cds-menu-item-radio-group>` | Menu |
| `MenuItemSelectable.vue` | `<cds-menu-item-selectable>` | Menu |
| `MenuItem.vue` | `<cds-menu-item>` | Menu |
| `MenuButton.vue` | `<cds-menu-button>` | MenuButton |
| `ModalBodyContent.vue` | `<cds-modal-body-content>` | Modal |
| `ModalBody.vue` | `<cds-modal-body>` | Modal |
| `ModalCloseButton.vue` | `<cds-modal-close-button>` | Modal |
| `ModalFooterButton.vue` | `<cds-modal-footer-button>` | Modal |
| `ModalFooter.vue` | `<cds-modal-footer>` | Modal |
| `ModalHeader.vue` | `<cds-modal-header>` | Modal |
| `ModalHeading.vue` | `<cds-modal-heading>` | Modal |
| `ModalLabel.vue` | `<cds-modal-label>` | Modal |
| `Modal.vue` | `<cds-modal>` | Modal |
| `ModalBodyContent.vue` | `<cds-modal-body-content>` | ModalWrapper |
| `ModalBody.vue` | `<cds-modal-body>` | ModalWrapper |
| `ModalCloseButton.vue` | `<cds-modal-close-button>` | ModalWrapper |
| `ModalFooterButton.vue` | `<cds-modal-footer-button>` | ModalWrapper |
| `ModalFooter.vue` | `<cds-modal-footer>` | ModalWrapper |
| `ModalHeader.vue` | `<cds-modal-header>` | ModalWrapper |
| `ModalHeading.vue` | `<cds-modal-heading>` | ModalWrapper |
| `ModalLabel.vue` | `<cds-modal-label>` | ModalWrapper |
| `Modal.vue` | `<cds-modal>` | ModalWrapper |
| `MultiSelectItem.vue` | `<cds-multi-select-item>` | MultiSelect |
| `MultiSelect.vue` | `<cds-multi-select>` | MultiSelect |
| `ActionableNotificationButton.vue` | `<cds-actionable-notification-button>` | Notification |
| `ActionableNotification.vue` | `<cds-actionable-notification>` | Notification |
| `CalloutNotification.vue` | `<cds-callout-notification>` | Notification |
| `InlineNotification.vue` | `<cds-inline-notification>` | Notification |
| `ToastNotification.vue` | `<cds-toast-notification>` | Notification |
| `NumberInput.vue` | `<cds-number-input>` | NumberInput |
| `ListItem.vue` | `<cds-list-item>` | OrderedList |
| `OrderedList.vue` | `<cds-ordered-list>` | OrderedList |
| `UnorderedList.vue` | `<cds-unordered-list>` | OrderedList |
| `OverflowMenuBody.vue` | `<cds-overflow-menu-body>` | OverflowMenu |
| `OverflowMenuItem.vue` | `<cds-overflow-menu-item>` | OverflowMenu |
| `OverflowMenu.vue` | `<cds-overflow-menu>` | OverflowMenu |
| `OverflowMenuBody.vue` | `<cds-overflow-menu-body>` | OverflowMenuItem |
| `OverflowMenuItem.vue` | `<cds-overflow-menu-item>` | OverflowMenuItem |
| `OverflowMenu.vue` | `<cds-overflow-menu>` | OverflowMenuItem |
| `PageHeaderBreadcrumb.vue` | `<cds-page-header-breadcrumb>` | PageHeader |
| `PageHeaderContentText.vue` | `<cds-page-header-content-text>` | PageHeader |
| `PageHeaderContent.vue` | `<cds-page-header-content>` | PageHeader |
| `PageHeaderHeroImage.vue` | `<cds-page-header-hero-image>` | PageHeader |
| `PageHeaderTabs.vue` | `<cds-page-header-tabs>` | PageHeader |
| `PageHeader.vue` | `<cds-page-header>` | PageHeader |
| `Pagination.vue` | `<cds-pagination>` | Pagination |
| `PaginationNav.vue` | `<cds-pagination-nav>` | PaginationNav |
| `PopoverContent.vue` | `<cds-popover-content>` | Popover |
| `Popover.vue` | `<cds-popover>` | Popover |
| `ButtonSetBase.vue` | `<cds-button-set-base>` | PrimaryButton |
| `ButtonSet.vue` | `<cds-button-set>` | PrimaryButton |
| `Button.vue` | `<cds-button>` | PrimaryButton |
| `ProgressBar.vue` | `<cds-progress-bar>` | ProgressBar |
| `ProgressIndicator.vue` | `<cds-progress-indicator>` | ProgressIndicator |
| `ProgressStep.vue` | `<cds-progress-step>` | ProgressIndicator |
| `RadioButtonGroup.vue` | `<cds-radio-button-group>` | RadioButton |
| `RadioButton.vue` | `<cds-radio-button>` | RadioButton |
| `RadioButtonGroup.vue` | `<cds-radio-button-group>` | RadioButtonGroup |
| `RadioButton.vue` | `<cds-radio-button>` | RadioButtonGroup |
| `ClickableTile.vue` | `<cds-clickable-tile>` | RadioTile |
| `ExpandableTile.vue` | `<cds-expandable-tile>` | RadioTile |
| `RadioTile.vue` | `<cds-radio-tile>` | RadioTile |
| `SelectableTile.vue` | `<cds-selectable-tile>` | RadioTile |
| `TileGroup.vue` | `<cds-tile-group>` | RadioTile |
| `Tile.vue` | `<cds-tile>` | RadioTile |
| `Search.vue` | `<cds-search>` | Search |
| `ButtonSetBase.vue` | `<cds-button-set-base>` | SecondaryButton |
| `ButtonSet.vue` | `<cds-button-set>` | SecondaryButton |
| `Button.vue` | `<cds-button>` | SecondaryButton |
| `SelectItemGroup.vue` | `<cds-select-item-group>` | Select |
| `SelectItem.vue` | `<cds-select-item>` | Select |
| `Select.vue` | `<cds-select>` | Select |
| `SelectItemGroup.vue` | `<cds-select-item-group>` | SelectItem |
| `SelectItem.vue` | `<cds-select-item>` | SelectItem |
| `Select.vue` | `<cds-select>` | SelectItem |
| `SelectItemGroup.vue` | `<cds-select-item-group>` | SelectItemGroup |
| `SelectItem.vue` | `<cds-select-item>` | SelectItemGroup |
| `Select.vue` | `<cds-select>` | SelectItemGroup |
| `ShapeIndicator.vue` | `<cds-shape-indicator>` | ShapeIndicator |
| `SidePanel.vue` | `<cds-side-panel>` | SidePanel |
| `SkeletonIcon.vue` | `<cds-skeleton-icon>` | SkeletonIcon |
| `SkeletonPlaceholder.vue` | `<cds-skeleton-placeholder>` | SkeletonPlaceholder |
| `SkeletonText.vue` | `<cds-skeleton-text>` | SkeletonText |
| `SkipToContent.vue` | `<cds-skip-to-content>` | SkipToContent |
| `SliderInput.vue` | `<cds-slider-input>` | Slider |
| `Slider.vue` | `<cds-slider>` | Slider |
| `SlugActionButton.vue` | `<cds-slug-action-button>` | Slug |
| `Slug.vue` | `<cds-slug>` | Slug |
| `Stack.vue` | `<cds-stack>` | Stack |
| `StructuredListBody.vue` | `<cds-structured-list-body>` | StructuredList |
| `StructuredListCell.vue` | `<cds-structured-list-cell>` | StructuredList |
| `StructuredListHead.vue` | `<cds-structured-list-head>` | StructuredList |
| `StructuredListHeaderCell.vue` | `<cds-structured-list-header-cell>` | StructuredList |
| `StructuredListHeaderRow.vue` | `<cds-structured-list-header-row>` | StructuredList |
| `StructuredListRow.vue` | `<cds-structured-list-row>` | StructuredList |
| `StructuredList.vue` | `<cds-structured-list>` | StructuredList |
| `ContentSwitcherItem.vue` | `<cds-content-switcher-item>` | Switch |
| `ContentSwitcher.vue` | `<cds-content-switcher>` | Switch |
| `TabsStoryWrapper.vue` | `<tabs-story-wrapper>` | TabContent |
| `TabSkeleton.vue` | `<cds-tab-skeleton>` | TabContent |
| `Tab.vue` | `<cds-tab>` | TabContent |
| `TabsSkeleton.vue` | `<cds-tabs-skeleton>` | TabContent |
| `TabsVertical.vue` | `<cds-tabs-vertical>` | TabContent |
| `Tabs.vue` | `<cds-tabs>` | TabContent |
| `TabsStoryWrapper.vue` | `<tabs-story-wrapper>` | Tabs |
| `TabSkeleton.vue` | `<cds-tab-skeleton>` | Tabs |
| `Tab.vue` | `<cds-tab>` | Tabs |
| `TabsSkeleton.vue` | `<cds-tabs-skeleton>` | Tabs |
| `TabsVertical.vue` | `<cds-tabs-vertical>` | Tabs |
| `Tabs.vue` | `<cds-tabs>` | Tabs |
| `DismissibleTag.vue` | `<cds-dismissible-tag>` | Tag |
| `OperationalTag.vue` | `<cds-operational-tag>` | Tag |
| `SelectableTag.vue` | `<cds-selectable-tag>` | Tag |
| `TagSkeleton.vue` | `<cds-tag-skeleton>` | Tag |
| `Tag.vue` | `<cds-tag>` | Tag |
| `Tearsheet.vue` | `<cds-tearsheet>` | Tearsheet |
| `TextareaSkeleton.vue` | `<cds-textarea-skeleton>` | TextArea |
| `Textarea.vue` | `<cds-textarea>` | TextArea |
| `TextInputSkeleton.vue` | `<cds-text-input-skeleton>` | TextInput |
| `TextInput.vue` | `<cds-text-input>` | TextInput |
| `ClickableTile.vue` | `<cds-clickable-tile>` | Tile |
| `ExpandableTile.vue` | `<cds-expandable-tile>` | Tile |
| `RadioTile.vue` | `<cds-radio-tile>` | Tile |
| `SelectableTile.vue` | `<cds-selectable-tile>` | Tile |
| `TileGroup.vue` | `<cds-tile-group>` | Tile |
| `Tile.vue` | `<cds-tile>` | Tile |
| `ClickableTile.vue` | `<cds-clickable-tile>` | TileGroup |
| `ExpandableTile.vue` | `<cds-expandable-tile>` | TileGroup |
| `RadioTile.vue` | `<cds-radio-tile>` | TileGroup |
| `SelectableTile.vue` | `<cds-selectable-tile>` | TileGroup |
| `TileGroup.vue` | `<cds-tile-group>` | TileGroup |
| `Tile.vue` | `<cds-tile>` | TileGroup |
| `TimePickerSelect.vue` | `<cds-time-picker-select>` | TimePicker |
| `TimePicker.vue` | `<cds-time-picker>` | TimePicker |
| `TimePickerSelect.vue` | `<cds-time-picker-select>` | TimePickerSelect |
| `TimePicker.vue` | `<cds-time-picker>` | TimePickerSelect |
| `ToggleSkeleton.vue` | `<cds-toggle-skeleton>` | Toggle |
| `Toggle.vue` | `<cds-toggle>` | Toggle |
| `ToggleSkeleton.vue` | `<cds-toggle-skeleton>` | ToggleSmall |
| `Toggle.vue` | `<cds-toggle>` | ToggleSmall |
| `Toggletip.vue` | `<cds-toggletip>` | Toggletip |
| `DefinitionTooltip.vue` | `<cds-definition-tooltip>` | Tooltip |
| `TooltipContent.vue` | `<cds-tooltip-content>` | Tooltip |
| `Tooltip.vue` | `<cds-tooltip>` | Tooltip |
| `TreeNode.vue` | `<cds-tree-node>` | TreeView |
| `TreeView.vue` | `<cds-tree-view>` | TreeView |
| `HeaderGlobalAction.vue` | `<cds-header-global-action>` | UIShell |
| `HeaderMenuButton.vue` | `<cds-header-menu-button>` | UIShell |
| `HeaderMenuItem.vue` | `<cds-header-menu-item>` | UIShell |
| `HeaderMenu.vue` | `<cds-header-menu>` | UIShell |
| `HeaderName.vue` | `<cds-header-name>` | UIShell |
| `HeaderNavItem.vue` | `<cds-header-nav-item>` | UIShell |
| `HeaderNav.vue` | `<cds-header-nav>` | UIShell |
| `HeaderPanel.vue` | `<cds-header-panel>` | UIShell |
| `HeaderSideNavItems.vue` | `<cds-header-side-nav-items>` | UIShell |
| `Header.vue` | `<cds-header>` | UIShell |
| `SideNavDivider.vue` | `<cds-side-nav-divider>` | UIShell |
| `SideNavItems.vue` | `<cds-side-nav-items>` | UIShell |
| `SideNavLink.vue` | `<cds-side-nav-link>` | UIShell |
| `SideNavMenuItem.vue` | `<cds-side-nav-menu-item>` | UIShell |
| `SideNavMenu.vue` | `<cds-side-nav-menu>` | UIShell |
| `SideNav.vue` | `<cds-side-nav>` | UIShell |
| `SwitcherDivider.vue` | `<cds-switcher-divider>` | UIShell |
| `SwitcherItem.vue` | `<cds-switcher-item>` | UIShell |
| `Switcher.vue` | `<cds-switcher>` | UIShell |
| `ListItem.vue` | `<cds-list-item>` | UnorderedList |
| `OrderedList.vue` | `<cds-ordered-list>` | UnorderedList |
| `UnorderedList.vue` | `<cds-unordered-list>` | UnorderedList |
