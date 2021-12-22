# Table

Presents data in a two-dimensional table format, arranged in columns and rows in a rectangular form.



## Properties



### ariaLabels

> Specifies label text for the selection components (checkboxes and radio buttons) as follows:
> * Individual items: `itemSelectionLabel` [`(SelectionState, Item) => string`]
> * Column header: `allItemsSelectionLabel` [`(SelectionState) => string`]
> * Group label: `selectionGroupLabel` [`string`]
> You can use the first argument of type `SelectionState` to access the current selection
> state of the component (for example, the `selectedItems` list). The label function for individual
> items also receives the corresponding  `Item` object. You can use the group label to
> add a meaningful description to the whole selection.
> 
> Example:
> ```
> {
>   selectionGroupLabel: 'Items selection',
>   allItemsSelectionLabel: ({ selectedItems }) =>
>     `${selectedItems.length} ${selectedItems.length === 1 ? 'item' : 'items'} selected`,
>   itemSelectionLabel: ({ selectedItems }, item) => {
>     isItemSelected = selectedItems.filter(i => i.id === item.id).length;
>     return `${item.name} is ${isItemSelected ? '' : 'not'} selected`
>  }
> }
> ```
> 

Type: 
```
TableProps.AriaLabels {
  allItemsSelectionLabel?: (
    data: TableProps.SelectionState<T>
  ) => string
  itemSelectionLabel: (
    data: TableProps.SelectionState<T>,
    row: T
  ) => string
  selectionGroupLabel: string
}
```


Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### columnDefinitions

> The columns configuration object
> * `id` (string) - Specifies a unique column identifier. The property is used 1) as a [keys](https://reactjs.org/docs/lists-and-keys.html#keys) source for React rendering,
>   and 2) to match entries in the `visibleColumns` property, if defined.
> * `header` (ReactNode) - Determines the display of the column header.
> * `cell` ((item) => ReactNode) - Determines the display of a cell's content. You receive the current table row
>   item as an argument.
> * `width` (string | number) - Specifies the column width. Corresponds to the `width` css-property. If the width is not set,
>   the browser automatically adjusts the column width based on the content. When `resizableColumns` property is
>   set to `true`, additional constraints apply: 1) string values are not allowed, and 2) the last visible column always
>   fills the remaining space of the table so the specified width is ignored.
> * `minWidth` (string | number) - Specifies the minimum column width. Corresponds to the `min-width` css-property. When
>   `resizableColumns` property is set to `true`, additional constraints apply: 1) string values are not allowed,
>   and 2) the column can't resize below than the specified width (defaults to "120px").
> * `maxWidth` (string | number) - Specifies the maximum column width. Corresponds to the `max-width` css-property.
>   Note that when the `resizableColumns` property is set to `true` this property is ignored.
> * `ariaLabel` (LabelData => string) - An optional function that's called to provide an `aria-label` for the cell header.
>   It receives the current sorting state of this column, the direction it's sorted in, and an indication of
>   whether the sorting is disabled, as three Boolean values: `sorted`, `descending` and `disabled`.
>   We recommend that you use this for sortable columns to provide more meaningful labels based on the
>   current sorting direction.
> * `sortingField` (string) - Enables default column sorting. The value is used in [collection hooks](https://www.npmjs.com/package/@awsui/collection-hooks)
>   to reorder the items. Provide the name of the property within each item that should be used for sorting by this column.
>   For more complex sorting use `sortingComparator` instead.
> * `sortingComparator` ((T, T) => number) - Enables custom column sorting. The value is used in [collection hooks](https://www.npmjs.com/package/@awsui/collection-hooks)
>   to reorder the items. This property accepts a custom comparator that is used to compare two items.
>   The comparator must implement ascending ordering, and the output is inverted automatically in case of descending order.
>   If present, the `sortingField` property is ignored.

Type: ReadonlyArray<TableProps.ColumnDefinition<T>>

Required: Yes


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### isItemDisabled

> Determines whether a given item is disabled. If an item is disabled, the user can't select it.

Type:  (item: T) => boolean

Required: No


### items

> Specifies the data that's displayed in the table rows. Each item contains the data for one row. The display of a row is handled
> by the `cell` property of each column definition in the `columnDefinitions` property.

Type: ReadonlyArray<T>

Default: `[]`

Required: Yes


### loading

> Renders the table in a loading state. We recommend that you also set a `loadingText`.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### loadingText

> Specifies the text that's displayed when the table is in a loading state.

Type: String

Required: No


### resizableColumns

> Specifies if columns can be resized. If set to `true`, users can resize the columns in the table.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### selectedItems

> List of selected items.

Type: ReadonlyArray<T>

Default: `[]`

Required: No


### selectionType

> Specifies the selection type (`'single' | 'multi'`).

Type: String

Valid values: `single | multi`

Required: No


### sortingColumn

> Specifies the definition object of the currently sorted column. Make sure you pass an object that's
> present in the `columnDefinitions` array.

Type: 
```
TableProps.SortingColumn {
  sortingComparator?: (a: T, b: T) => number
  sortingField?: string
}
```


Required: No


### sortingDescending

> Specifies whether to use a descending sort order.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### sortingDisabled

> Specifies if sorting buttons are disabled. For example, use this property
> to prevent the user from sorting before items are fully loaded.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### stickyHeader

> If set to `true`, the table header remains visible when the user scrolls down.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### stickyHeaderVerticalOffset

> Specifies a vertical offset (in pixels) for the sticky header. For example, use this if you
> need to position the sticky header below other fixed position elements on the page.

Type: Number

Required: No


### trackBy

> Specifies a property that uniquely identifies an individual item.
> When it's set, it's used to provide [keys for React](https://reactjs.org/docs/lists-and-keys.html#keys)
> for performance optimizations.
> It's also used to connect `items` and `selectedItems` values when they reference different objects.
> 

Type: TableProps.TrackBy<T>

Valid values: `string | (item: T) => string`

Required: No


### variant

> Specify a table variant with one of the following:
> * `container` - Use this variant to have the table displayed within a container.
> * `embedded` - Use this variant within a parent container (such as a modal, expandable
>                section, container or split panel).
> * `stacked` - Use this variant adjacent to other stacked containers (such as a container,
>               table).
> * `full-page` – Use this variant when table is the primary element on the page.

Type: String

Valid values: `container | embedded | stacked | full-page`

Required: No


### visibleColumns

> Specifies an array containing the `id`s of visible columns. If not set, all columns are displayed.
> Use it in conjunction with the visible content preference of the [collection preferences](collection-preferences.md) component.
> 
> The order of ids doesn't influence the order in which columns are displayed - this is dictated by the `columnDefinitions` property
> 

Type: ReadonlyArray<string>

Required: No


### wrapLines

> Specifies if text wraps within table cells. If set to `true`, long text within cells may wrap onto
> multiple lines instead of being truncated with an ellipsis.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No





## Slots



### empty

> Displayed when the `items` property is an empty array. Use it to render an empty or no-match state.




### filter

> Use this slot to add filtering controls to the table.




### footer

> Footer of the table container.




### header

> Heading element of the table container. Use the [header component](header.md).




### pagination

> Use this slot to add the [pagination component](pagination.md) to the table.




### preferences

> Use this slot to add [collection preferences](collection-preferences.md) to the table.







## Events



### onColumnWidthsChange

> Fired when the user resizes a table column. The event detail contains an array of column widths in pixels,
> including the hidden via preferences columns. Use this event to persist the column widths.

Detail type: 
```
TableProps.ColumnWidthsChangeDetail {
  widths: ReadonlyArray<number>
}
```

Cancelable: No



### onRowClick

> Note: This feature is provided for backwards compatibility. Its use is not recommended,
> and it may be deprecated in the future.
> Called when the user clicked at a table row. The event detail contains the index of the
> clicked row and the row object itself. Use this event to define a row click behavior.
> 

Detail type: 
```
TableProps.OnRowClickDetail {
  item: T
  rowIndex: number
}
```

Cancelable: No



### onRowContextMenu

> Note: This feature is provided for backwards compatibility. Its use is not recommended,
> and it may be deprecated in the future.
> Called when the user clicked at a table row with the right mouse click. The event detail
> contains the index of the clicked row and the row object itself. Use this event to override
> the default browser context menu behavior.
> 

Detail type: 
```
TableProps.OnRowContextMenuDetail {
  clientX: number
  clientY: number
  item: T
  rowIndex: number
}
```

Cancelable: Yes



### onSelectionChange

> Fired when a user interaction triggers a change in the list of selected items.
> The event `detail` contains the current list of `selectedItems`.

Detail type: 
```
TableProps.SelectionChangeDetail {
  selectedItems: Array<T>
}
```

Cancelable: No



### onSortingChange

> Called when either the column to sort by or the direction of sorting changes upon user interaction.
> The event detail contains the current sortingColumn and isDescending.

Detail type: 
```
TableProps.SortingState {
  isDescending?: false | true
  sortingColumn: TableProps.SortingColumn<T>
}
```

Cancelable: No






## Ref functions



### scrollToTop

> When the sticky header is enabled and you call this function, the table
> scroll parent scrolls to reveal the first row of the table.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
