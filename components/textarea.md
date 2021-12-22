# Textarea

A form element that provides a multiline, plain-text input control.



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


### autoComplete

> Specifies whether to enable a browser's autocomplete functionality for this input.
> In some cases it might be appropriate to disable autocomplete (for
> example, for security-sensitive fields). To use it correctly, set the `name` property.

Type: Boolean

Default: `true`

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


### disableBrowserAutocorrect

> Specifies whether to disable browser autocorrect and related features.
> If you set this to `true`, it disables any native browser capabilities
> that automatically correct user input, such as `autocorrect` and
> `autocapitalize`. If you don't set it, the behavior follows the default behavior
> of the user's browser.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### disableBrowserSpellcheck

> Specifies whether to disable browser spellcheck feature.
> If you set this to `true`, it disables native browser capability
> that checks for spelling/grammar errors.
> If you don't set it, the behavior follows the default behavior
> of the user's browser.

Type: Boolean

Default: `false`

Valid values: `true | false`

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


### name

> Specifies the name of the control used in HTML forms.

Type: String

Required: No


### placeholder

> Specifies the placeholder text rendered when the value is an empty string.

Type: String

Required: No


### readOnly

> Specifies if the control is read only, which prevents the
> user from modifying the value but includes it in a form
> submission. A read-only control can receive focus.
> Don't use read-only inputs outside a form.
> 

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### rows

> Specifies the number of lines of text to set the height to.

Type: Number

Required: No


### value

> Specifies the text entered into the form element.

Type: String

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

> Called whenever a user changes the input value (by typing or pasting).
> The event `detail` contains the current value of the field.

Detail type: 
```
InputProps.ChangeDetail {
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



### onKeyDown

> Called when the underlying native textarea emits a `keydown` event.
> The event `detail` contains the `keyCode` and information
> about modifiers (that is, CTRL, ALT, SHIFT, META, etc.).

Detail type: 
```
InputProps.KeyDetail {
  altKey: boolean
  ctrlKey: boolean
  key: string
  keyCode: number
  metaKey: boolean
  shiftKey: boolean
}
```

Cancelable: Yes



### onKeyUp

> Called when the underlying native textarea emits a `keyup` event.
> The event `detail` contains the `keyCode` and information
> about modifiers (that is, CTRL, ALT, SHIFT, META, etc.).

Detail type: 
```
InputProps.KeyDetail {
  altKey: boolean
  ctrlKey: boolean
  key: string
  keyCode: number
  metaKey: boolean
  shiftKey: boolean
}
```

Cancelable: Yes






## Ref functions



### focus

> Sets input focus on the textarea control.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
