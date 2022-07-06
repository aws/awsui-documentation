# Mixed line and bar chart (MixedLineBarChart)

Visualizes different, but related, series of data on a single chart.



## Properties



### ariaDescription

> A description of the chart that assistive technologies can use (through `aria-describedby`).
> Provide a concise summary of the data visualized in the chart.

Type: String

Required: No


### ariaLabel

> ARIA label that is assigned to the chart itself. It should match the visible label on the page, e.g. in the container header.
> Do not use `ariaLabel` and `ariaLabelledby` at the same time.

Type: String

Required: No


### ariaLabelledby

> Sets `aria-labelledby` on the chart itself.
> If there is a visible label for the chart on the page, e.g. in the container header, set this property to the ID of that header element.
> Do not use `ariaLabel` and `ariaLabelledby` at the same time.

Type: String

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### detailPopoverSize

> Determines the maximum width the detail popover will be limited to.

Type: String

Default: `"medium"`

Valid values: `small | medium | large`

Required: No


### emphasizeBaselineAxis

> When set to `true`, adds a visual emphasis on the zero baseline axis.
> See the usage guidelines for more details.

Type: Boolean

Default: `true`

Valid values: `true | false`

Required: No


### errorText

> Text that is displayed when the chart is in error state, i.e. when `statusType` is set to `"error"`.

Type: String

Required: No


### height

> An optional pixel value number that fixes the height of the chart area.
> If not set explicitly, the component will use a default height that is defined internally.

Type: Number

Default: `500`

Required: No


### hideFilter

> When set to `true`, the default filtering dropdown is not displayed.
> It is still possible to render additional filters with the `additionalFilters` slot.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### hideLegend

> When set to `true`, the legend beneath the chart is not displayed.
> It is highly recommended to keep this set to `false`.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### highlightedSeries

> The currently highlighted data series, usually through hovering over a series or the legend.
> A value of `null` means no series is highlighted.
> - If you do not set this property, series are highlighted automatically when hovering over one of the triggers (uncontrolled behavior).
> - If you explicitly set this property, you must set an `onHighlightChange` listener to update this property when a series should be highlighted (controlled behavior).
> 

Type: MixedLineBarChartProps.ChartSeries<T> | null

Required: No


### horizontalBars

> When set to `true`, the x and y axes are flipped, which causes any bars to be rendered horizontally instead of vertically.
> This can only be used when the chart consists exclusively of bar series.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### i18nStrings

> An object containing all the necessary localized strings required by the component.

Type: 
```
CartesianChartProps.I18nStrings {
  chartAriaRoleDescription?: string
  detailPopoverDismissAriaLabel?: string
  filterLabel?: string
  filterPlaceholder?: string
  filterSelectedAriaLabel?: string
  legendAriaLabel?: string
  xAxisAriaRoleDescription?: string
  xTickFormatter?: CartesianChartProps.TickFormatter<T>
  yAxisAriaRoleDescription?: string
  yTickFormatter?: CartesianChartProps.TickFormatter<number>
}
```


Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### legendTitle

> Optional title for the legend.

Type: String

Required: No


### loadingText

> Text that is displayed when the chart is loading, i.e. when `statusType` is set to `"loading"`.

Type: String

Required: No


### recoveryText

> Text for the recovery button that is displayed next to the error text.

Type: String

Required: No


### series

> Array that represents the source of data for the displayed chart.
> Each element can represent a line series, bar series, or a threshold, and can have the following properties:
> * `title` (string): A human-readable title for this series
> * `type` (string): Series type (`"line"`, `"bar"`, or `"threshold"`)
> * `data` (Array): An array of data points, represented as objects with `x` and `y` properties
> * `color` (string): (Optional) A color hex value for this series. When assigned, it takes priority over the automatically assigned color
> * `valueFormatter` (Function): (Optional) A function that formats data values before rendering in the UI, For example, in the details popover.
> 

Type: ReadonlyArray<MixedLineBarChartProps.ChartSeries<T>>

Default: `[]`

Required: Yes


### stackedBars

> When set to `true`, bars in the same data point are stacked instead of grouped next to each other.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### statusType

> Specifies the current status of loading data.
> * `loading`: data fetching is in progress.
> * `finished`: data has loaded successfully.
> * `error`: an error occurred during fetch. You should provide user an option to recover.

Type: String

Default: `"finished"`

Valid values: `loading | finished | error`

Required: No


### visibleSeries

> An array of series objects that determines which of the data series are currently displayed, i.e. not filtered out.
> - If you do not set this property, series are shown and hidden automatically when using the default filter component (uncontrolled behavior).
> - If you explicitly set this property, you must set an `onFilterChange` listener to update this property when the visible series should change, or when one of your custom filters changes the number of visible series (controlled behavior).

Type: ReadonlyArray<MixedLineBarChartProps.ChartSeries<T>>

Required: No


### xDomain

> Determines the domain of the x axis, i.e. the range of values that will be visible in the chart.
> For numerical and time-based data this is represented as an array with two values: `[minimumValue, maximumValue]`.
> For categorical data this is represented as an array of strings that determine the categories to display.
> It is recommended to set this explicitly. If not, the component will determine a domain that fits all data points.
> When controlling this directly, make sure to update the value based on filtering changes.
> 

Type: Conditional

Required: No


### xScaleType

> Determines the type of scale for values on the x axis.

Type: String

Default: `"linear"`

Valid values: `linear | log | time | categorical`

Required: No


### xTitle

> The title of the x axis.

Type: String

Required: No


### yDomain

> Determines the domain of the y axis, i.e. the range of values that will be visible in the chart.
> The domain is defined by a tuple: `[minimumValue, maximumValue]`.
> It is recommended to set this explicitly. If not, the component will determine a domain that fits all data points.
> When controlling this directly, make sure to update the value based on filtering changes.
> 

Type: ReadonlyArray<number>

Required: No


### yScaleType

> Determines the type of scale for values on the y axis.

Type: String

Default: `"linear"`

Valid values: `linear | log`

Required: No


### yTitle

> The title of the y axis.

Type: String

Required: No





## Slots



### additionalFilters

> Additional filters that are added above the chart component.
> Make sure to update the `data` property when any of your custom filters change the data to be displayed.




### empty

> Content that is displayed when the data passed to the component is empty.




### noMatch

> Content that is displayed when there is no data to display due to the built-in filtering.







## Events



### onFilterChange

> Called when the values of the internal filter component changed.
> This will **not** be called for any custom filter components you have defined in `additionalFilters`.

Detail type: 
```
CartesianChartProps.FilterChangeDetail {
  visibleSeries: ReadonlyArray<Series>
}
```

Cancelable: No



### onHighlightChange

> Called when the highlighted series has changed because of user interaction.

Detail type: 
```
CartesianChartProps.HighlightChangeDetail {
  highlightedSeries: Series | null
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
