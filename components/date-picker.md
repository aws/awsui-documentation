# Date picker (DatePicker)

Enables users to enter or choose a date value.



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


### ariaLabel

> Adds an `aria-label` to the native control.
> Use this if you don't have a visible label for this control.
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


### ariaRequired

> Specifies whether to add `aria-required` to the native control.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### autoFocus

> Indicates whether the control should be focused as
> soon as the page loads, which enables the user to
> start typing without having to manually focus the control. Don't
> use this option on pages where the control may be
> scrolled out of the viewport.

Type: Boolean

Default: `false`

Valid values: `true | false`

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


### disabled

> Specifies if the control is disabled, which prevents the
> user from modifying the value and prevents the value from
> being included in a form submission. A disabled control can't
> receive focus.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


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

> Defines whether a particular date is enabled in the calendar or not.
> If you disable a date in the calendar, users can still enter this date using a keyboard.
> We recommend that you also validate these constraints on the client-side and server-side
> as you would for other form elements.

Type:  (date: Date) => boolean

Required: No


### locale

> Specifies the locale to use to render month names and determine the starting day of the week.
> If you don't provide this, the locale is determined by the page and browser locales.
> Supported values and formats are listed in the
> [JavaScript Intl API specification](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).

Type: String

Default: `''`

Required: No


### name

> Specifies the name of the control used in HTML forms.

Type: String

Required: No


### nextMonthAriaLabel

> Specifies an `aria-label` for the 'next month' button.

Type: String

Required: Yes


### openCalendarAriaLabel

> Specifies a function that generates the `aria-label` for the 'open calendar' button. The `selectedDate` parameter is
> a human-readable localised string representing the current value of the input.
> (for example, ``selectedDate => 'Choose Date' + (selectedDate ? `, selected date is ${selectedDate}` : '')``)

Type:  (selectedDate: null | string) => string

Required: No


### placeholder

> Specifies the placeholder text rendered when the value is an empty string.

Type: String

Default: `''`

Required: No


### previousMonthAriaLabel

> Specifies an `aria-label` for the 'previous month' button.

Type: String

Required: Yes


### readOnly

> Specifies if the control is read only, which prevents the
> user from modifying the value but includes it in a form
> submission. A read-only control can receive focus.
> Do not use read-only inputs outside of a form.
> 

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### startOfWeek

> Determines the starting day of the week. The values 0-6 map to Sunday-Saturday.
> By default the starting day of the week is defined by the locale, but you can use this property to override it.

Type: Number

Required: No


### todayAriaLabel

> Used as part of the `aria-label` for today's date in the calendar.

Type: String

Required: Yes


### value

> The current input value, in YYYY-MM-DD format.

Type: String

Default: `''`

Required: Yes







## Events



### onBlur

> Called when input focus is removed from the UI control.

Detail type: 
```
Null
```

Cancelable: No



### onChange

> Called whenever a user changes the input value (by typing, pasting, or selecting a value).
> The event `detail` contains the current value of the field.

Detail type: 
```
DatePickerProps.ChangeDetail {
  value: string
}
```

Cancelable: No



### onFocus

> Called when input focus is moved to the UI control.

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
