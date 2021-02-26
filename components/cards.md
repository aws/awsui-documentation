# Cards

Represents a collection of resources.



## Properties



### ariaLabels

> Adds labels to the selection components (checkboxes and radio buttons) as follows:
> * `itemSelectionLabel` ((SelectionState, Item) => string) - Determines the label for an item.
> * `selectionGroupLabel` (string) - Specifies the label for the group selection control.
> You can use the first arguments of type `SelectionState` to access the current selection
> state of the component (for example, the `selectedItems` list). The label function for individual
> items also receives the corresponding  `Item` object. You can use the group label to
> add a meaningful description to the whole selection.
> 

Type: 
```
CardsProps.AriaLabels {
  itemSelectionLabel: (
    data: CardsProps.SelectionState<T>,
    row: T
  ) => string
  selectionGroupLabel: string
}
```


Required: No


### cardDefinition

>  Defines what to display in each card. It has the following properties:
>  * `header` ((item) => ReactNode) - Responsible for displaying the card header. You receive the current item as an argument.
>      Use `fontSize="heading-m"` on [link](link.md) components inside card header.
>  * `sections` (array) - Responsible for displaying the card content. Cards can have many sections in their
>    body. Each entry in the array is responsible for displaying a section. An entry has the following properties:
>    * `id`: (string) - A unique identifier for the section. The property is used as a [keys](https://reactjs.org/docs/lists-and-keys.html#keys)
>   source for React rendering, and to match entries in the `visibleSections` property (if it's defined).
>    * `header`: (ReactNode) - Responsible for displaying the section header.
>    * `content`: ((item) => ReactNode) - Responsible for displaying the section content. You receive the current item as an argument.
>    * `width`: (number) - Specifies the width of the card section in percent. Use this to display multiple sections in
>    the same row. The default value is 100%.
>  All of the above properties are optional.
> 

Type: 
```
CardsProps.CardDefinition {
  sections?: ReadonlyArray<
    CardsProps.SectionDefinition<T>
  >
  header?: (item: T) => React.ReactNode
}
```


Required: Yes


### cardsPerRow

> Determines the number of cards per row for any interval of container width.
> It's an array whose entries are objects containing the following:
> - `cards` (number) - Specifies the number of cards per row.
> - `minWidth` (number) - Specifies the minimum container width (in pixels) for which this configuration object should apply.
> For example, with this configuration:
> ```
> [{
>   cards: 1
> }, {
>   minWidth: 500,
>   cards: 2
> }, {
>   minWidth: 800,
>   cards: 3
> }]
> ```
> 
> the cards component displays:
> * 1 card per row when the container width is below 500px.
> * 2 cards per row when the container width is between 500px and 799px.
> * 3 cards per row when the container width is 800px or wider.
> 
> The number of cards per row can't be greater than 20.
> 
> Default value:
> ```
> [{
>   cards: 1
> }, {
>   minWidth: 768,
>   cards: 2
> }, {
>   minWidth: 992,
>   cards: 3
> }, {
>   minWidth: 1200,
>   cards: 4
> }, {
>   minWidth: 1400,
>   cards: 5
> }, {
>   minWidth: 1920,
>   cards: 6
> }]
> ```
> 

Type: ReadonlyArray<CardsProps.CardsLayout>

Default: `[]`

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### isItemDisabled

> Determines which items are disabled. If an item is disabled, users can't select it.

Type:  (item: T) => boolean

Required: No


### items

> Specifies the items that serve as data source for a card.
> The `cardDefinition` property handles the display of this data.
> 

Type: ReadonlyArray<T>

Default: `[]`

Required: Yes


### loading

> Renders the cards in a loading state. We recommend that you also set a `loadingText`.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### loadingText

> Specifies the text to display when in loading state.

Type: String

Required: No


### selectedItems

> Specifies the list of selected items.

Type: ReadonlyArray<T>

Required: No


### selectionType

> Specifies the selection mode. It can be either `single` or `multi`.

Type: String

Valid values: `single | multi`

Required: No


### stickyHeader

> If set to true, the cards header remains visible when the user scrolls down.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### stickyHeaderVerticalOffset

> Optionally provide a vertical offset (in pixels) for the sticky header, for example if you
> need to position the sticky header below other fixed position elements on the page.

Type: Number

Required: No


### trackBy

> Specifies the property inside items that uniquely identifies them.
> When it's set, it's used to provide [keys for React](https://reactjs.org/docs/lists-and-keys.html#keys)
> for performance optimizations.
> It's also used for connecting `items` and `selectedItems` values when they don't reference the same object.
> 

Type: CardsProps.TrackBy<T>

Valid values: `string | (item: T) => string`

Required: No


### visibleSections

> Specifies an array containing the `id` of each visible section. If not set, all sections are displayed.
> Use it in conjunction with the visible content preference of the [collection preferences](collection-preferences.md) component.
> 
> The order of `id`s doesn't influence the order of display of sections, which is controlled by the `cardDefinition` property.
> 

Type: ReadonlyArray<string>

Required: No





## Slots



### empty

> Displayed only when the list of items is empty.




### filter

> Use this slot to add filtering controls to the component.




### header

> Heading element of the table container. Use the [header component](header.md).




### pagination

> Use this slot to add the [pagination component](pagination.md) to the component.




### preferences

> Use this slot to add [collection preferences](collection-preferences.md) to the component.







## Events



### onSelectionChange

> Called when a user interaction causes a change in the list of selected items.
> The event `detail` contains the current list of `selectedItems`.

Detail type: 
```
CardsProps.SelectionChangeDetail {
  selectedItems: Array<T>
}
```

Cancelable: No






## Ref functions



### scrollToTop

> When the sticky header is enabled, calling this function scrolls cards's
> scroll parent up to reveal the first card or row of cards.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
