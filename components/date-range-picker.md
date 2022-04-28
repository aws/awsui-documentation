# Date range picker (DateRangePicker)

 Enables users to specify a date and time range. 



## Properties



### ariaDescribedby

> Adds `aria-describedby` to the component. If you're using this component within a form field,
> don't set this property because the form field component automatically sets it.
> Use this property if the component isn't surrounded by a form field, or you want to override the value
> automatically set by the form field (for example, if you have two components within a single form field).
> 
> To use it correctly, define an ID for each element that you want to use as a description
> and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
> 

Type: String

Required: No


### ariaLabelledby

> Adds `aria-labelledby` to the component. If you're using this component within a form field,
> don't set this property because the form field component automatically sets it.
> Use this property if the component isn't surrounded by a form field, or you want to override the value
> automatically set by the form field (for example, if you have two components within a single form field).
> 
> To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
> 

Type: String

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### controlId

> Specifies the ID of the native form element. You can use it to relate
> a label element's `for` attribute to this control.
> It defaults to an automatically generated ID that
> is provided by its parent form field component.
> 

Type: String

Required: No


### dateOnly

> Hides time inputs and changes the input format to date-only, e.g. 2021-04-06.
> Do not use `dateOnly` flag conditionally. The component does not trigger the value update
> when the flag changes which means the value format can become inconsistent.
> 
> Default: `false`.
> 

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### disabled

> Specifies that the component is disabled, preventing the user from
> modifying the value. A disabled component cannot receive focus.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### expandToViewport

> Enabling this property will allow the dropdown to extend beyond its parent by using fixed positioning and
> [React Portals](https://reactjs.org/docs/portals.html).
> If you want the dropdown to ignore the `overflow` CSS property of its parents,
> such as in a split view layout, enable this property.
> However, use discretion. If you don't need to, we recommend you don't enable this property because fixed positioning results
> in a slight, visible lag when scrolling complex pages.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### i18nStrings

> An object containing all the necessary localized strings required by the component.

Type: 
```
DateRangePickerProps.I18nStrings {
  absoluteModeTitle: string
  applyButtonLabel: string
  ariaDescribedby?: string
  ariaLabel?: string
  ariaLabelledby?: string
  cancelButtonLabel: string
  clearButtonLabel: string
  customRelativeRangeDurationLabel: string
  customRelativeRangeDurationPlaceholder: string
  customRelativeRangeOptionDescription: string
  customRelativeRangeOptionLabel: string
  customRelativeRangeUnitLabel: string
  dateTimeConstraintText?: string
  endDateLabel: string
  endTimeLabel: string
  formatRelativeRange: (
    value: DateRangePickerProps.RelativeValue
  ) => string
  formatUnit: (
    unit: DateRangePickerProps.TimeUnit,
    value: number
  ) => string
  nextMonthAriaLabel: string
  previousMonthAriaLabel: string
  relativeModeTitle: string
  relativeRangeSelectionHeading: string
  startDateLabel: string
  startTimeLabel: string
  todayAriaLabel: string
}
```


Required: Yes


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### invalid

> Overrides the invalidation state. Usually the invalid state
> comes from the parent `FormField` / `awsui-form-field`
> component, however sometimes you need to override its
> state when you have more than one input within a
> single form field.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### isDateEnabled

> A function that defines whether a particular date should be enabled
> in the calendar or not. Note that disabling a date in the calendar
> still allows users to enter this date via keyboard. We therefore
> recommend that you also validate these constraints client- and
> server-side, in the same way as for other form elements.

Type:  (date: Date) => boolean

Default: `() => true`

Required: No


### isValidRange

> A function that defines whether a particular range is valid or not.
> Ensure that your function checks for missing fields in the value.
> 

Type: 
```
 (
  value: DateRangePickerProps.Value | null
) => DateRangePickerProps.ValidationResult
```


Default: `() => ({ valid: true })`

Required: Yes


### locale

> The locale to be used for rendering month names and defining the
> starting date of the week. If not provided, it will be determined
> from the page and browser locales. Supported values and formats
> are as-per the [JavaScript Intl API specification](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).

Type: String

Default: `''`

Required: No


### placeholder

> Specifies the placeholder text that is rendered when the value is empty.

Type: String

Required: No


### rangeSelectorMode

> Determines the range selector mode as follows:
> * `default` for combined absolute/relative range selector.
> * `absolute-only` for absolute-only range selector.
> * `relative-only` for relative-only range selector.
> By default, the range selector mode is `default`.
> 

Type: String

Default: `'default'`

Valid values: `default | absolute-only | relative-only`

Required: No


### readOnly

> Specifies that the component is read-only, preventing the user from
> modifying the value. A read-only component can receive focus.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### relativeOptions

> A list of relative time ranges that are shown as suggestions.

Type: ReadonlyArray<DateRangePickerProps.RelativeOption>

Default: `[]`

Required: Yes


### showClearButton

> Specifies whether the component should show a button that
> allows the user to clear the selected value.

Type: Boolean

Default: `true`

Valid values: `true | false`

Required: No


### startOfWeek

> Starting day of the week. [0-6] maps to [Sunday-Saturday].
> By default the starting day of the week is defined by the locale,
> but you can override it using this property.

Type: Number

Required: No


### timeInputFormat

> Specifies the format of the time input for absolute ranges.
> Use to restrict the granularity of time that the user can enter.
> 
> Has no effect when `dateOnly` is true.
> 

Type: String

Default: `'hh:mm:ss'`

Valid values: `hh | hh:mm | hh:mm:ss`

Required: No


### timeOffset

> The time offset from UTC in minutes that should be used to
> display and produce values.
> Has no effect when `dateOnly` is true.
> 
> Default: the user's current time offset as provided by the browser.
> 

Type: Number

Default: `getBrowserTimezoneOffset()`

Required: No


### value

> The current date range value. Can be either an absolute time range
> or a relative time range.

Type: DateRangePickerProps.Value | null

Required: Yes







## Events



### onBlur

> Fired when keyboard focus is removed from the UI control.

Detail type: 
```
Null
```

Cancelable: No



### onChange

> Fired whenever a user changes the component's value.
> The event `detail` contains the current value of the field.

Detail type: 
```
DateRangePickerProps.ChangeDetail {
  value: DateRangePickerProps.Value | null
}
```

Cancelable: No



### onFocus

> Fired when keyboard focus is set onto the UI control.

Detail type: 
```
Null
```

Cancelable: No






## Ref functions



### focus

> Sets the browser focus on the UI control




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
