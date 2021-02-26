# Radio group (RadioGroup)

A form element that enables the user to choose one of a predefined set of options.



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

> Adds `aria-label` to the group. If you are using this form element within a form field,
> don't set this property because the form field component automatically sets the correct labels to make the component accessible.

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

> Adds `aria-required` to the group.

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


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### items

> Specifies an array of radio buttons to display. Each of these objects have the following properties:
> - `value` (string) - Sets the value of the radio button. Assigned to the radio group when a user selects the radio button.
> - `label` (ReactNode) - Specifies a label for the radio button.
> - `description` (ReactNode) - (Optional) Specifies descriptive text that appears below the label.
> - `disabled` (boolean) - (Optional) Determines whether the radio button is disabled, which prevents the user from selecting it.
> - `controlId` (string) - (Optional) Sets the ID of the internal input. You can use it to relate a label element's `for` attribute to this control.
>        In general it's not recommended to set this because the ID is automatically set by the radio group component.
> 

Type: ReadonlyArray<RadioGroupProps.RadioButtonDefinition>

Required: No


### name

> Specify a custom name for the radio buttons. If not provided, the radio group generates a random name.

Type: String

Required: No


### value

> Sets the value of the selected radio button.
> If you want to clear the selection, use `null`.

Type: Null | string

Required: Yes







## Events



### onChange

> Called when the user selects a different radio button. The event `detail` contains the current `value`.

Detail type: 
```
RadioGroupProps.ChangeDetail {
  value: string
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
