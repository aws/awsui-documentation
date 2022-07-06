# Status indicator (StatusIndicator)

Communicates the state of a resource—either in its entirety or a particular facet of a resource—in a compact form that is easily embedded in a card, table, list, or header view.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### colorOverride

> Specifies an override for the status indicator color.

Type: String

Valid values: `blue | grey | green | red`

Required: No


### iconAriaLabel

> Specifies an `aria-label` for the icon. If the status text alone does not fully describe the status,
> use this to communicate additional context.

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### type

> Specifies the status type.

Type: String

Default: `"success"`

Valid values: `error | warning | success | info | stopped | pending | in-progress | loading`

Required: No


### wrapText

> Specifies if the text content should wrap. If you set it to false, it prevents the text from wrapping
> and truncates it with an ellipsis.

Type: Boolean

Default: `true`

Valid values: `true | false`

Required: No





## Slots



### children

> A text fragment that communicates the status.









## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
