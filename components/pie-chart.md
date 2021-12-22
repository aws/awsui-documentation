# Pie and donut charts (PieChart)

Visualize the relationship or correlation between data metrics in a dataset.



## Properties



### ariaDescription

> A description of the chart that assistive technologies can use (through `aria-describedby` and `<title>`).
> Provide a concise summary of the data visualized in the chart.

Type: String

Required: No


### ariaLabel

> ARIA label that's assigned to the chart. It should match the visible label on the page
> (for example, in the container header). Use either `ariaLabel` or `ariaLabelledby` (you can't use both).

Type: String

Required: No


### ariaLabelledby

> Sets `aria-labelledby` on the chart. If there is a visible label for the chart on the page
> (for example, in the container header), set this property to the ID of that header element.
> Use either `ariaLabel` or `ariaLabelledby` (you can't use both).

Type: String

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### data

> An array that represents the source of data for the displayed segments.
> Each element can have the following properties:
> * `title` (string) - A human-readable title for this data point.
> * `value` (number) - Numeric value that determines the segment size.
>                        A segment with a value of zero (0) or lower (negative number) won't have a segment.
> * `color`: (string) - (Optional) Color value for this segment that takes priority over the automatically assigned color.
>                        Can be any valid CSS color identifier.
> 
> As long as your data object implements the properties above, you can also define additional properties
> that are relevant to your data visualization.
> The full data object will be passed down to events and properties like `detailPopoverContent`.
> 

Type: ReadonlyArray<T>

Required: Yes


### detailPopoverContent

> A function that determines the details that are displayed in the popover when hovering over a segment.
> The function is called with the data of the target segment and is expected to return an array of detail pairs.
> By default, each segment displays two detail pairs: count and percentage.
> Each pair has the following properties:
> * `key` (string) - Name of the detail or metric.
> * `value` (string | number) - The value of this detail for the target segment.
> 

Type: 
```
 (
  segment: T,
  visibleDataSum: number
) => ReadonlyArray<ChartDetailPair>
```


Required: No


### detailPopoverSize

> Determines the maximum width of the popover.

Type: String

Default: `"medium"`

Valid values: `small | medium | large`

Required: No


### errorText

> Text that's displayed when the chart is in error state (that is, when `statusType` is set to `error`).

Type: String

Required: No


### hideDescriptions

> Hides the label descriptions next to the chart segments when set to `true`.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### hideFilter

> Hides the default filtering dropdown when set to `true`.
> You can still display additional filters with the `additionalFilters` slot.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### hideLegend

> Hides legend beneath the chart when set to `true`.
> We highly recommend that you leave this unspecified or set to `false`.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### hideTitles

> Hides label titles next to the chart segments when set to `true`.
> We highly recommend that you leave this unspecified or set to `false`.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### highlightedSegment

> Specifies the currently highlighted data segment. Highlighting is typically the result of
> a user hovering over or selecting a segment in the chart or the legend.
> A value of `null` means no segment is being highlighted.
> - If you don't set this property, segments are highlighted automatically when a user hovers over or selects one of the triggers (that is, uncontrolled behavior).
> - If you explicitly set this property, you must set an `onHighlightChange` listener to update this property when a segment should be highlighted (that is, controlled behavior).
> 

Type: T | null

Required: No


### i18nStrings

> An object that contains all of the localized strings required by the component.

Type: 
```
PieChartProps.I18nStrings {
  chartAriaRoleDescription?: string
  detailPopoverDismissAriaLabel?: string
  detailsPercentage?: string
  detailsValue?: string
  filterLabel?: string
  filterPlaceholder?: string
  filterSelectedAriaLabel?: string
  legendAriaLabel?: string
  segmentAriaRoleDescription?: string
}
```


Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### innerMetricDescription

> Additional description that's displayed in the center of the chart below `innerMetricValue` if `variant` is set to `donut`.
> This is usually the unit of the `innerMetricValue`.

Type: String

Required: No


### innerMetricValue

> Additional metric number that's displayed in the center of the chart if `variant` is set to `donut`.

Type: String

Required: No


### legendTitle

> Title for the legend.

Type: String

Required: No


### loadingText

> Text that's displayed when the chart is loading (that is, when `statusType` is set to `loading`).

Type: String

Required: No


### recoveryText

> Text for the recovery button that's displayed next to the error text.

Type: String

Required: No


### segmentDescription

> A function that determines the description of a segment that is displayed on the chart, unless `hideDescriptions` is set to `true`.
> This is an optional description that explains the segment and is displayed underneath the label.
> The function is called with the data object of each segment and is expected to return the description as a string.

Type: 
```
 (
  segment: T,
  visibleDataSum: number
) => string
```


Required: No


### size

> Specifies the size of the pie or donut chart.

Type: String

Default: `"medium"`

Valid values: `small | medium | large`

Required: No


### statusType

> Specifies the current status of loading data.
> * `loading` - Indicates that data fetching is in progress.
> * `finished` - Indicates that data has loaded successfully.
> * `error` - Indicates that an error occurred during fetch. You should provide an option to enable the user to recover.

Type: String

Default: `"finished"`

Valid values: `loading | finished | error`

Required: No


### variant

> Visual variant of the pie chart. Currently supports the default `pie` variant and the `donut` variant.
> The donut variant provides a slot in the center of the chart that can contain additional information.
> For more information, see `innerContent`.

Type: String

Default: `"pie"`

Valid values: `pie | donut`

Required: No


### visibleSegments

> An array of data segment objects that determines which data segments are currently visible (that is, not filtered out).
> - If you don't set this property, segments are filtered automatically when using the default filtering of the component (that is, uncontrolled behavior).
> - If you explicitly set this property, you must set an `onFilterChange` listener to update this property when the list of filtered segments changes (that is, controlled behavior).
> 

Type: ReadonlyArray<T>

Required: No





## Slots



### additionalFilters

> Additional filters that you can add above the chart component.
> Make sure you update the `data` property when any of your custom filters change the data that's displayed.




### empty

> Content that's displayed when the data passed to the component is empty.




### noMatch

> Content that's displayed when there is no data to display because it doesn't match the specified filter.







## Events



### onFilterChange

> Called when the values of the internal filter component changes.
> This isn't called for any custom filter components you've defined in `additionalFilters`.

Detail type: 
```
PieChartProps.FilterChangeDetail {
  visibleSegments: ReadonlyArray<T>
}
```

Cancelable: No



### onHighlightChange

> Called when the highlighted segmented changes because of a user interaction.

Detail type: 
```
PieChartProps.HighlightChangeDetail {
  highlightedSegment: T | null
}
```

Cancelable: No



### onRecoveryClick

> Called when the user clicks the recovery button that appears when there is an error state.
> Use this to enable the user to retry a failed request or provide another option for the user
> to recover from the error.

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
