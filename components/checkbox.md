# Checkbox

A form element where users can make a binary choice.



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


### checked

> Specifies if the component is selected.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: Yes


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


### indeterminate

> Specifies that the component is in an indeterminate state. The behavior of this property replicates
> the behavior of [the respective property](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes)
> in the native control.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### name

> Specifies the name of the control used in HTML forms.

Type: String

Required: No





## Slots



### children (label)

> The control's label that's displayed next to the checkbox. A state change occurs when a user clicks on it.




### description

> Description that appears below the label.







## Events



### onBlur

> Called when input focus is removed from the UI control.

Cancelable: No



### onChange

> Called when the user changes the component state. The event `detail` contains the current value for the `checked` property.

Detail type: 
```
CheckboxProps.ChangeDetail {
  checked: boolean
  indeterminate: false
}
```

Cancelable: No



### onFocus

> Called when input focus is moved to the UI control.

Cancelable: No






## Ref functions



### focus

> Sets input focus onto the UI control.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
