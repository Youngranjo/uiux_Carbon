# vue/

Carbon 공식 Vue 패키지는 [`@carbon/vue`](https://github.com/carbon-design-system/carbon-components-vue)
(`CvXxx` 컴포넌트)로 실제 존재합니다 — 단, **Carbon 10**(`carbon-components`, `bx--` 클래스 접두사)
기준이라 이 프로젝트의 나머지(React/HTML)가 쓰는 **Carbon 11**(`@carbon/react`, `@carbon/styles`,
`@carbon/web-components`, `cds--` 접두사)과 디자인이 다릅니다.

그래서 이 폴더는 두 가지 방식이 섞여 있습니다:

1. **`@carbon/vue`에 대응하는 실제 컴포넌트가 있는 경우(113개)** — 그 컴포넌트를
   그대로 재export합니다(재구현 아님). 파일 주석에 "Carbon 10" 경고가 적혀 있습니다.
2. **없는 경우** — 공식 가이드대로 `@carbon/web-components`(Carbon 11)의 커스텀 엘리먼트를 감싼
   얇은 SFC 래퍼를 씁니다.

```
vue/
├── components/*.vue          위 두 방식 중 하나로 생성된 파일 (총 216개)
└── components/*.stories.js   carbon-components-vue의 실제 Storybook 예제 (있는 경우)
```

## 설치

```bash
# 실제 @carbon/vue(Carbon 10) 컴포넌트를 쓸 경우
npm install --save @carbon/vue vue

# Web Component 래퍼(Carbon 11)를 쓸 경우
npm install --save @carbon/web-components @carbon/styles
```

## @carbon/vue 앱 엔트리에서 한 번만

```js
// main.js
import { createApp } from 'vue';
import CarbonVue3 from '@carbon/vue';
import '@carbon/vue/dist/carbon-vue-3.css';

const app = createApp(App);
app.use(CarbonVue3);
app.mount('#app');
```

## Web Component 래퍼 앱 엔트리에서 한 번만

```js
import { createApp } from 'vue';
import '@carbon/web-components/es/index.js';

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-');
app.mount('#app');
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

| 파일 | 방식 | 실제 소스 | 소속 패밀리 |
|---|---|---|---|
| `Accordion.vue` | @carbon/vue (실제) | `CvAccordion` | Accordion |
| `AccordionItem.vue` | @carbon/vue (실제) | `CvAccordionItem` | Accordion |
| `AccordionSkeleton.vue` | @carbon/vue (실제) | `CvAccordionSkeleton` | Accordion |
| `AiLabelActionButton.vue` | Web Component 래퍼 | `cds-ai-label-action-button` | AILabel |
| `AiLabel.vue` | Web Component 래퍼 | `cds-ai-label` | AILabel |
| `AiSkeletonIcon.vue` | Web Component 래퍼 | `cds-ai-skeleton-icon` | AISkeleton |
| `AiSkeletonPlaceholder.vue` | Web Component 래퍼 | `cds-ai-skeleton-placeholder` | AISkeleton |
| `AiSkeletonText.vue` | Web Component 래퍼 | `cds-ai-skeleton-text` | AISkeleton |
| `AspectRatio.vue` | @carbon/vue (실제) | `CvAspectRatio` | AspectRatio |
| `BadgeIndicator.vue` | Web Component 래퍼 | `cds-badge-indicator` | BadgeIndicator |
| `Breadcrumb.vue` | @carbon/vue (실제) | `CvBreadcrumb` | Breadcrumb |
| `BreadcrumbItem.vue` | @carbon/vue (실제) | `CvBreadcrumbItem` | Breadcrumb |
| `BreadcrumbSkeleton.vue` | @carbon/vue (실제) | `CvBreadcrumbSkeleton` | Breadcrumb |
| `BreadcrumbSkeletonItem.vue` | @carbon/vue (실제) | `CvBreadcrumbSkeletonItem` | Breadcrumb |
| `Button.vue` | @carbon/vue (실제) | `CvButton` | Button |
| `ButtonSkeleton.vue` | @carbon/vue (실제) | `CvButtonSkeleton` | Button |
| `ButtonSet.vue` | @carbon/vue (실제) | `CvButtonSet` | ButtonSet |
| `ChatButtonSkeleton.vue` | Web Component 래퍼 | `cds-chat-button-skeleton` | ChatButton |
| `ChatButton.vue` | Web Component 래퍼 | `cds-chat-button` | ChatButton |
| `Checkbox.vue` | @carbon/vue (실제) | `CvCheckbox` | Checkbox |
| `CheckboxSkeleton.vue` | @carbon/vue (실제) | `CvCheckboxSkeleton` | Checkbox |
| `CheckboxGroup.vue` | Web Component 래퍼 | `cds-checkbox-group` | CheckboxGroup |
| `Checkbox.vue` | Web Component 래퍼 | `cds-checkbox` | CheckboxGroup |
| `CodeSnippet.vue` | @carbon/vue (실제) | `CvCodeSnippet` | CodeSnippet |
| `CodeSnippetSkeleton.vue` | @carbon/vue (실제) | `CvCodeSnippetSkeleton` | CodeSnippet |
| `ComboBox.vue` | @carbon/vue (실제) | `CvComboBox` | ComboBox |
| `ComboButton.vue` | Web Component 래퍼 | `cds-combo-button` | ComboButton |
| `ModalBodyContent.vue` | Web Component 래퍼 | `cds-modal-body-content` | ComposedModal |
| `ModalBody.vue` | Web Component 래퍼 | `cds-modal-body` | ComposedModal |
| `ModalCloseButton.vue` | Web Component 래퍼 | `cds-modal-close-button` | ComposedModal |
| `ModalFooterButton.vue` | Web Component 래퍼 | `cds-modal-footer-button` | ComposedModal |
| `ModalFooter.vue` | Web Component 래퍼 | `cds-modal-footer` | ComposedModal |
| `ModalHeader.vue` | Web Component 래퍼 | `cds-modal-header` | ComposedModal |
| `ModalHeading.vue` | Web Component 래퍼 | `cds-modal-heading` | ComposedModal |
| `ModalLabel.vue` | Web Component 래퍼 | `cds-modal-label` | ComposedModal |
| `Modal.vue` | Web Component 래퍼 | `cds-modal` | ComposedModal |
| `ContainedListDescription.vue` | Web Component 래퍼 | `cds-contained-list-description` | ContainedList |
| `ContainedListItem.vue` | Web Component 래퍼 | `cds-contained-list-item` | ContainedList |
| `ContainedList.vue` | Web Component 래퍼 | `cds-contained-list` | ContainedList |
| `ContentSwitcher.vue` | @carbon/vue (실제) | `CvContentSwitcher` | ContentSwitcher |
| `ContentSwitcherButton.vue` | @carbon/vue (실제) | `CvContentSwitcherButton` | ContentSwitcher |
| `ContentSwitcherContent.vue` | @carbon/vue (실제) | `CvContentSwitcherContent` | ContentSwitcher |
| `MenuItemDivider.vue` | Web Component 래퍼 | `cds-menu-item-divider` | ContextMenu |
| `MenuItemGroup.vue` | Web Component 래퍼 | `cds-menu-item-group` | ContextMenu |
| `MenuItemRadioGroup.vue` | Web Component 래퍼 | `cds-menu-item-radio-group` | ContextMenu |
| `MenuItemSelectable.vue` | Web Component 래퍼 | `cds-menu-item-selectable` | ContextMenu |
| `MenuItem.vue` | Web Component 래퍼 | `cds-menu-item` | ContextMenu |
| `Copy.vue` | Web Component 래퍼 | `cds-copy` | Copy |
| `CopyButton.vue` | @carbon/vue (실제) | `CvCopyButton` | CopyButton |
| `ButtonSetBase.vue` | Web Component 래퍼 | `cds-button-set-base` | DangerButton |
| `ButtonSet.vue` | Web Component 래퍼 | `cds-button-set` | DangerButton |
| `Button.vue` | Web Component 래퍼 | `cds-button` | DangerButton |
| `DataTable.vue` | @carbon/vue (실제) | `CvDataTable` | DataTable |
| `DataTableAction.vue` | @carbon/vue (실제) | `CvDataTableAction` | DataTable |
| `DataTableCell.vue` | @carbon/vue (실제) | `CvDataTableCell` | DataTable |
| `DataTableHeading.vue` | @carbon/vue (실제) | `CvDataTableHeading` | DataTable |
| `DataTableRow.vue` | @carbon/vue (실제) | `CvDataTableRow` | DataTable |
| `DataTableSkeleton.vue` | @carbon/vue (실제) | `CvDataTableSkeleton` | DataTableSkeleton |
| `DatePicker.vue` | @carbon/vue (실제) | `CvDatePicker` | DatePicker |
| `DatePickerSkeleton.vue` | @carbon/vue (실제) | `CvDatePickerSkeleton` | DatePicker |
| `DialogBody.vue` | Web Component 래퍼 | `cds-dialog-body` | Dialog |
| `DialogCloseButton.vue` | Web Component 래퍼 | `cds-dialog-close-button` | Dialog |
| `DialogControls.vue` | Web Component 래퍼 | `cds-dialog-controls` | Dialog |
| `DialogFooterButton.vue` | Web Component 래퍼 | `cds-dialog-footer-button` | Dialog |
| `DialogFooter.vue` | Web Component 래퍼 | `cds-dialog-footer` | Dialog |
| `DialogHeader.vue` | Web Component 래퍼 | `cds-dialog-header` | Dialog |
| `DialogSubtitle.vue` | Web Component 래퍼 | `cds-dialog-subtitle` | Dialog |
| `DialogTitle.vue` | Web Component 래퍼 | `cds-dialog-title` | Dialog |
| `Dialog.vue` | Web Component 래퍼 | `cds-dialog` | Dialog |
| `Dropdown.vue` | @carbon/vue (실제) | `CvDropdown` | Dropdown |
| `DropdownItem.vue` | @carbon/vue (실제) | `CvDropdownItem` | Dropdown |
| `DropdownSkeleton.vue` | @carbon/vue (실제) | `CvDropdownSkeleton` | Dropdown |
| `Search.vue` | Web Component 래퍼 | `cds-search` | ExpandableSearch |
| `FileUploader.vue` | @carbon/vue (실제) | `CvFileUploader` | FileUploader |
| `FileUploaderItem.vue` | @carbon/vue (실제) | `CvFileUploaderItem` | FileUploader |
| `FileUploaderSkeleton.vue` | @carbon/vue (실제) | `CvFileUploaderSkeleton` | FileUploader |
| `FluidComboBoxSkeleton.vue` | Web Component 래퍼 | `cds-fluid-combo-box-skeleton` | FluidComboBox |
| `FluidComboBox.vue` | Web Component 래퍼 | `cds-fluid-combo-box` | FluidComboBox |
| `FluidComboBoxSkeleton.vue` | Web Component 래퍼 | `cds-fluid-combo-box-skeleton` | FluidDatePicker |
| `FluidComboBox.vue` | Web Component 래퍼 | `cds-fluid-combo-box` | FluidDatePicker |
| `FluidComboBoxSkeleton.vue` | Web Component 래퍼 | `cds-fluid-combo-box-skeleton` | FluidDatePickerInput |
| `FluidComboBox.vue` | Web Component 래퍼 | `cds-fluid-combo-box` | FluidDatePickerInput |
| `FluidDropdownSkeleton.vue` | Web Component 래퍼 | `cds-fluid-dropdown-skeleton` | FluidDropdown |
| `FluidDropdown.vue` | Web Component 래퍼 | `cds-fluid-dropdown` | FluidDropdown |
| `FluidForm.vue` | Web Component 래퍼 | `cds-fluid-form` | FluidForm |
| `FluidMultiSelectSkeleton.vue` | Web Component 래퍼 | `cds-fluid-multi-select-skeleton` | FluidMultiSelect |
| `FluidMultiSelect.vue` | Web Component 래퍼 | `cds-fluid-multi-select` | FluidMultiSelect |
| `FluidNumberInputSkeleton.vue` | Web Component 래퍼 | `cds-fluid-number-input-skeleton` | FluidNumberInput |
| `FluidNumberInput.vue` | Web Component 래퍼 | `cds-fluid-number-input` | FluidNumberInput |
| `FluidSearchSkeleton.vue` | Web Component 래퍼 | `cds-fluid-search-skeleton` | FluidSearch |
| `FluidSearch.vue` | Web Component 래퍼 | `cds-fluid-search` | FluidSearch |
| `FluidSelectSkeleton.vue` | Web Component 래퍼 | `cds-fluid-select-skeleton` | FluidSelect |
| `FluidSelect.vue` | Web Component 래퍼 | `cds-fluid-select` | FluidSelect |
| `FluidTextareaSkeleton.vue` | Web Component 래퍼 | `cds-fluid-textarea-skeleton` | FluidTextArea |
| `FluidTextarea.vue` | Web Component 래퍼 | `cds-fluid-textarea` | FluidTextArea |
| `FluidTextInputSkeleton.vue` | Web Component 래퍼 | `cds-fluid-text-input-skeleton` | FluidTextInput |
| `FluidTextInput.vue` | Web Component 래퍼 | `cds-fluid-text-input` | FluidTextInput |
| `FluidTimePickerSelect.vue` | Web Component 래퍼 | `cds-fluid-time-picker-select` | FluidTimePicker |
| `FluidTimePickerSkeleton.vue` | Web Component 래퍼 | `cds-fluid-time-picker-skeleton` | FluidTimePicker |
| `FluidTimePicker.vue` | Web Component 래퍼 | `cds-fluid-time-picker` | FluidTimePicker |
| `FluidTimePickerSelect.vue` | Web Component 래퍼 | `cds-fluid-time-picker-select` | FluidTimePickerSelect |
| `FluidTimePickerSkeleton.vue` | Web Component 래퍼 | `cds-fluid-time-picker-skeleton` | FluidTimePickerSelect |
| `FluidTimePicker.vue` | Web Component 래퍼 | `cds-fluid-time-picker` | FluidTimePickerSelect |
| `Form.vue` | @carbon/vue (실제) | `CvForm` | Form |
| `FormGroup.vue` | @carbon/vue (실제) | `CvFormGroup` | FormGroup |
| `FormItem.vue` | @carbon/vue (실제) | `CvFormItem` | FormItem |
| `FormItem.vue` | Web Component 래퍼 | `cds-form-item` | FormLabel |
| `Form.vue` | Web Component 래퍼 | `cds-form` | FormLabel |
| `Column.vue` | @carbon/vue (실제) | `CvColumn` | Grid |
| `Grid.vue` | @carbon/vue (실제) | `CvGrid` | Grid |
| `Row.vue` | @carbon/vue (실제) | `CvRow` | Grid |
| `Heading.vue` | Web Component 래퍼 | `cds-heading` | Heading |
| `Icon.vue` | Web Component 래퍼 | `cds-icon` | Icon |
| `IconButton.vue` | @carbon/vue (실제) | `CvIconButton` | IconButton |
| `IconIndicator.vue` | Web Component 래퍼 | `cds-icon-indicator` | IconIndicator |
| `CheckboxGroup.vue` | Web Component 래퍼 | `cds-checkbox-group` | InlineCheckbox |
| `Checkbox.vue` | Web Component 래퍼 | `cds-checkbox` | InlineCheckbox |
| `InlineLoading.vue` | @carbon/vue (실제) | `CvInlineLoading` | InlineLoading |
| `Layer.vue` | Web Component 래퍼 | `cds-layer` | Layer |
| `LayoutConstraint.vue` | Web Component 래퍼 | `cds-layout-constraint` | Layout |
| `Layout.vue` | Web Component 래퍼 | `cds-layout` | Layout |
| `Link.vue` | @carbon/vue (실제) | `CvLink` | Link |
| `ListItem.vue` | @carbon/vue (실제) | `CvListItem` | ListItem |
| `Loading.vue` | @carbon/vue (실제) | `CvLoading` | Loading |
| `MenuItemDivider.vue` | Web Component 래퍼 | `cds-menu-item-divider` | Menu |
| `MenuItemGroup.vue` | Web Component 래퍼 | `cds-menu-item-group` | Menu |
| `MenuItemRadioGroup.vue` | Web Component 래퍼 | `cds-menu-item-radio-group` | Menu |
| `MenuItemSelectable.vue` | Web Component 래퍼 | `cds-menu-item-selectable` | Menu |
| `MenuItem.vue` | Web Component 래퍼 | `cds-menu-item` | Menu |
| `MenuButton.vue` | Web Component 래퍼 | `cds-menu-button` | MenuButton |
| `Modal.vue` | @carbon/vue (실제) | `CvModal` | Modal |
| `ModalBodyContent.vue` | Web Component 래퍼 | `cds-modal-body-content` | ModalWrapper |
| `ModalBody.vue` | Web Component 래퍼 | `cds-modal-body` | ModalWrapper |
| `ModalCloseButton.vue` | Web Component 래퍼 | `cds-modal-close-button` | ModalWrapper |
| `ModalFooterButton.vue` | Web Component 래퍼 | `cds-modal-footer-button` | ModalWrapper |
| `ModalFooter.vue` | Web Component 래퍼 | `cds-modal-footer` | ModalWrapper |
| `ModalHeader.vue` | Web Component 래퍼 | `cds-modal-header` | ModalWrapper |
| `ModalHeading.vue` | Web Component 래퍼 | `cds-modal-heading` | ModalWrapper |
| `ModalLabel.vue` | Web Component 래퍼 | `cds-modal-label` | ModalWrapper |
| `Modal.vue` | Web Component 래퍼 | `cds-modal` | ModalWrapper |
| `MultiSelect.vue` | @carbon/vue (실제) | `CvMultiSelect` | MultiSelect |
| `InlineNotification.vue` | @carbon/vue (실제) | `CvInlineNotification` | Notification |
| `ToastNotification.vue` | @carbon/vue (실제) | `CvToastNotification` | Notification |
| `NumberInput.vue` | @carbon/vue (실제) | `CvNumberInput` | NumberInput |
| `NumberInputSkeleton.vue` | @carbon/vue (실제) | `CvNumberInputSkeleton` | NumberInput |
| `List.vue` | @carbon/vue (실제) | `CvList` | OrderedList |
| `OverflowMenu.vue` | @carbon/vue (실제) | `CvOverflowMenu` | OverflowMenu |
| `OverflowMenuItem.vue` | @carbon/vue (실제) | `CvOverflowMenuItem` | OverflowMenuItem |
| `PageHeaderBreadcrumb.vue` | Web Component 래퍼 | `cds-page-header-breadcrumb` | PageHeader |
| `PageHeaderContentText.vue` | Web Component 래퍼 | `cds-page-header-content-text` | PageHeader |
| `PageHeaderContent.vue` | Web Component 래퍼 | `cds-page-header-content` | PageHeader |
| `PageHeaderHeroImage.vue` | Web Component 래퍼 | `cds-page-header-hero-image` | PageHeader |
| `PageHeaderTabs.vue` | Web Component 래퍼 | `cds-page-header-tabs` | PageHeader |
| `PageHeader.vue` | Web Component 래퍼 | `cds-page-header` | PageHeader |
| `Pagination.vue` | @carbon/vue (실제) | `CvPagination` | Pagination |
| `PaginationNav.vue` | Web Component 래퍼 | `cds-pagination-nav` | PaginationNav |
| `PopoverContent.vue` | Web Component 래퍼 | `cds-popover-content` | Popover |
| `Popover.vue` | Web Component 래퍼 | `cds-popover` | Popover |
| `ButtonSetBase.vue` | Web Component 래퍼 | `cds-button-set-base` | PrimaryButton |
| `ButtonSet.vue` | Web Component 래퍼 | `cds-button-set` | PrimaryButton |
| `Button.vue` | Web Component 래퍼 | `cds-button` | PrimaryButton |
| `ProgressBar.vue` | Web Component 래퍼 | `cds-progress-bar` | ProgressBar |
| `Progress.vue` | @carbon/vue (실제) | `CvProgress` | ProgressIndicator |
| `ProgressSkeleton.vue` | @carbon/vue (실제) | `CvProgressSkeleton` | ProgressIndicator |
| `ProgressStep.vue` | @carbon/vue (실제) | `CvProgressStep` | ProgressIndicator |
| `RadioButton.vue` | @carbon/vue (실제) | `CvRadioButton` | RadioButton |
| `RadioGroup.vue` | @carbon/vue (실제) | `CvRadioGroup` | RadioButtonGroup |
| `ClickableTile.vue` | Web Component 래퍼 | `cds-clickable-tile` | RadioTile |
| `ExpandableTile.vue` | Web Component 래퍼 | `cds-expandable-tile` | RadioTile |
| `RadioTile.vue` | Web Component 래퍼 | `cds-radio-tile` | RadioTile |
| `SelectableTile.vue` | Web Component 래퍼 | `cds-selectable-tile` | RadioTile |
| `TileGroup.vue` | Web Component 래퍼 | `cds-tile-group` | RadioTile |
| `Tile.vue` | Web Component 래퍼 | `cds-tile` | RadioTile |
| `Search.vue` | @carbon/vue (실제) | `CvSearch` | Search |
| `ButtonSetBase.vue` | Web Component 래퍼 | `cds-button-set-base` | SecondaryButton |
| `ButtonSet.vue` | Web Component 래퍼 | `cds-button-set` | SecondaryButton |
| `Button.vue` | Web Component 래퍼 | `cds-button` | SecondaryButton |
| `Select.vue` | @carbon/vue (실제) | `CvSelect` | Select |
| `SelectOption.vue` | @carbon/vue (실제) | `CvSelectOption` | SelectItem |
| `SelectOptgroup.vue` | @carbon/vue (실제) | `CvSelectOptgroup` | SelectItemGroup |
| `ShapeIndicator.vue` | Web Component 래퍼 | `cds-shape-indicator` | ShapeIndicator |
| `SidePanel.vue` | Web Component 래퍼 | `cds-side-panel` | SidePanel |
| `SkeletonIcon.vue` | Web Component 래퍼 | `cds-skeleton-icon` | SkeletonIcon |
| `SkeletonPlaceholder.vue` | Web Component 래퍼 | `cds-skeleton-placeholder` | SkeletonPlaceholder |
| `SkeletonText.vue` | @carbon/vue (실제) | `CvSkeletonText` | SkeletonText |
| `SkipToContent.vue` | @carbon/vue (실제) | `CvSkipToContent` | SkipToContent |
| `Slider.vue` | @carbon/vue (실제) | `CvSlider` | Slider |
| `SliderSkeleton.vue` | @carbon/vue (실제) | `CvSliderSkeleton` | Slider |
| `SlugActionButton.vue` | Web Component 래퍼 | `cds-slug-action-button` | Slug |
| `Slug.vue` | Web Component 래퍼 | `cds-slug` | Slug |
| `Stack.vue` | Web Component 래퍼 | `cds-stack` | Stack |
| `StructuredList.vue` | @carbon/vue (실제) | `CvStructuredList` | StructuredList |
| `StructuredListData.vue` | @carbon/vue (실제) | `CvStructuredListData` | StructuredList |
| `StructuredListHeading.vue` | @carbon/vue (실제) | `CvStructuredListHeading` | StructuredList |
| `StructuredListItem.vue` | @carbon/vue (실제) | `CvStructuredListItem` | StructuredList |
| `StructuredListItemSelectable.vue` | @carbon/vue (실제) | `CvStructuredListItemSelectable` | StructuredList |
| `StructuredListItemStandard.vue` | @carbon/vue (실제) | `CvStructuredListItemStandard` | StructuredList |
| `ContentSwitcherItem.vue` | Web Component 래퍼 | `cds-content-switcher-item` | Switch |
| `ContentSwitcher.vue` | Web Component 래퍼 | `cds-content-switcher` | Switch |
| `TabSkeleton.vue` | Web Component 래퍼 | `cds-tab-skeleton` | TabContent |
| `Tab.vue` | Web Component 래퍼 | `cds-tab` | TabContent |
| `TabsSkeleton.vue` | Web Component 래퍼 | `cds-tabs-skeleton` | TabContent |
| `TabsVertical.vue` | Web Component 래퍼 | `cds-tabs-vertical` | TabContent |
| `Tabs.vue` | Web Component 래퍼 | `cds-tabs` | TabContent |
| `Tab.vue` | @carbon/vue (실제) | `CvTab` | Tabs |
| `Tabs.vue` | @carbon/vue (실제) | `CvTabs` | Tabs |
| `TabsSkeleton.vue` | @carbon/vue (실제) | `CvTabsSkeleton` | Tabs |
| `Tag.vue` | @carbon/vue (실제) | `CvTag` | Tag |
| `TagSkeleton.vue` | @carbon/vue (실제) | `CvTagSkeleton` | Tag |
| `Tearsheet.vue` | Web Component 래퍼 | `cds-tearsheet` | Tearsheet |
| `TextArea.vue` | @carbon/vue (실제) | `CvTextArea` | TextArea |
| `TextAreaSkeleton.vue` | @carbon/vue (실제) | `CvTextAreaSkeleton` | TextArea |
| `TextInput.vue` | @carbon/vue (실제) | `CvTextInput` | TextInput |
| `TextInputSkeleton.vue` | @carbon/vue (실제) | `CvTextInputSkeleton` | TextInput |
| `Tile.vue` | @carbon/vue (실제) | `CvTile` | Tile |
| `TileClickable.vue` | @carbon/vue (실제) | `CvTileClickable` | Tile |
| `TileExpandable.vue` | @carbon/vue (실제) | `CvTileExpandable` | Tile |
| `TileSelectable.vue` | @carbon/vue (실제) | `CvTileSelectable` | Tile |
| `TileStandard.vue` | @carbon/vue (실제) | `CvTileStandard` | Tile |
| `ClickableTile.vue` | Web Component 래퍼 | `cds-clickable-tile` | TileGroup |
| `ExpandableTile.vue` | Web Component 래퍼 | `cds-expandable-tile` | TileGroup |
| `RadioTile.vue` | Web Component 래퍼 | `cds-radio-tile` | TileGroup |
| `SelectableTile.vue` | Web Component 래퍼 | `cds-selectable-tile` | TileGroup |
| `TileGroup.vue` | Web Component 래퍼 | `cds-tile-group` | TileGroup |
| `Tile.vue` | Web Component 래퍼 | `cds-tile` | TileGroup |
| `TimePicker.vue` | @carbon/vue (실제) | `CvTimePicker` | TimePicker |
| `TimePickerSelect.vue` | Web Component 래퍼 | `cds-time-picker-select` | TimePickerSelect |
| `TimePicker.vue` | Web Component 래퍼 | `cds-time-picker` | TimePickerSelect |
| `ToggleSkeleton.vue` | @carbon/vue (실제) | `CvToggleSkeleton` | Toggle |
| `Toggle.vue` | @carbon/vue (실제) | `CvToggle` | Toggle |
| `ToggleSkeleton.vue` | Web Component 래퍼 | `cds-toggle-skeleton` | ToggleSmall |
| `Toggle.vue` | Web Component 래퍼 | `cds-toggle` | ToggleSmall |
| `Toggletip.vue` | Web Component 래퍼 | `cds-toggletip` | Toggletip |
| `DefinitionTooltip.vue` | @carbon/vue (실제) | `CvDefinitionTooltip` | Tooltip |
| `InteractiveTooltip.vue` | @carbon/vue (실제) | `CvInteractiveTooltip` | Tooltip |
| `Tooltip.vue` | @carbon/vue (실제) | `CvTooltip` | Tooltip |
| `TreeNode.vue` | Web Component 래퍼 | `cds-tree-node` | TreeView |
| `TreeView.vue` | Web Component 래퍼 | `cds-tree-view` | TreeView |
| `Content.vue` | @carbon/vue (실제) | `CvContent` | UIShell |
| `Header.vue` | @carbon/vue (실제) | `CvHeader` | UIShell |
| `HeaderGlobalAction.vue` | @carbon/vue (실제) | `CvHeaderGlobalAction` | UIShell |
| `HeaderMenu.vue` | @carbon/vue (실제) | `CvHeaderMenu` | UIShell |
| `HeaderMenuButton.vue` | @carbon/vue (실제) | `CvHeaderMenuButton` | UIShell |
| `HeaderMenuItem.vue` | @carbon/vue (실제) | `CvHeaderMenuItem` | UIShell |
| `HeaderName.vue` | @carbon/vue (실제) | `CvHeaderName` | UIShell |
| `HeaderNav.vue` | @carbon/vue (실제) | `CvHeaderNav` | UIShell |
| `HeaderPanel.vue` | @carbon/vue (실제) | `CvHeaderPanel` | UIShell |
| `SideNav.vue` | @carbon/vue (실제) | `CvSideNav` | UIShell |
| `SideNavIcon.vue` | @carbon/vue (실제) | `CvSideNavIcon` | UIShell |
| `SideNavItems.vue` | @carbon/vue (실제) | `CvSideNavItems` | UIShell |
| `SideNavLink.vue` | @carbon/vue (실제) | `CvSideNavLink` | UIShell |
| `SideNavMenu.vue` | @carbon/vue (실제) | `CvSideNavMenu` | UIShell |
| `SideNavMenuDivider.vue` | @carbon/vue (실제) | `CvSideNavMenuDivider` | UIShell |
| `SideNavMenuItem.vue` | @carbon/vue (실제) | `CvSideNavMenuItem` | UIShell |
| `Switcher.vue` | @carbon/vue (실제) | `CvSwitcher` | UIShell |
| `SwitcherItem.vue` | @carbon/vue (실제) | `CvSwitcherItem` | UIShell |
| `SwitcherItemLink.vue` | @carbon/vue (실제) | `CvSwitcherItemLink` | UIShell |
| `ListItem.vue` | Web Component 래퍼 | `cds-list-item` | UnorderedList |
| `OrderedList.vue` | Web Component 래퍼 | `cds-ordered-list` | UnorderedList |
| `UnorderedList.vue` | Web Component 래퍼 | `cds-unordered-list` | UnorderedList |
