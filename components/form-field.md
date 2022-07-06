# Form field (FormField)

With the form field, users can create properly-styled controls in a form.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### controlId

> The ID of the primary form control. You can use this to set the
> `for` attribute of a label for accessibility.
> If you don't set this property, the control group automatically sets
> the label to the ID of an inner form control (for example, an [input](input.md) component).
> This only works well if you're using a single control in the form field.
> 

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### stretch

> Determines whether the primary control should expand to 12 columns.
> By default (or when this property is set to `false`), the primary control
> occupies 9 columns. The secondary control uses the remaining 3 columns.
> On smaller viewports, both components occupy 12 columns and stack on top of each other.
> 
> If this property is set to `true`, the primary control uses the full
> 12 columns. The secondary control (if present) also uses 12 columns, and the two
> controls stack on top of each other.
> 

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No





## Slots



### children (control)

> The primary form control (for example, input, textarea, etc.).




### constraintText

> Constraint text that's displayed below the control. Use this to provide
> additional information about valid formats, etc.




### description

> Detailed information about the form field that's displayed below the label.




### errorText

> Text that displays as a validation message. If this is set to a
> non-empty string, it will render the form field as invalid.




### info

> Use to display an 'Info' link next to the label.




### label

> The main label for the form field.




### secondaryControl

> A secondary control. You can use this for custom actions and content.









## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
