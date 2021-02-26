# Popover

Provides on-demand contextual information about elements or events.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### dismissAriaLabel

> Adds an `aria-label` to the dismiss button for accessibility.

Type: String

Required: No


### dismissButton

> Determines whether the dismiss button is shown in the popover body.

Type: Boolean

Default: `true`

Valid values: `true | false`

Required: No


### fixedWidth

> Expands the popover body to its maximum width regardless of content.
> For example, use it when you need to place a column layout in the popover content.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### header

> Specifies optional header text for the popover.

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### position

> Determines where the popover is displayed when opened, relative to the trigger.
> If the popover doesn't have enough space to open in this direction, it
> automatically chooses a better direction based on available space.

Type: String

Default: `"right"`

Valid values: `top | right | bottom | left`

Required: No


### size

> Determines the maximum width for the popover.

Type: String

Default: `"medium"`

Valid values: `small | medium | large`

Required: No


### triggerType

> Specifies the type of content inside the trigger region. The following types are available:
> - `text` - Use for inline text triggers.
> - `custom` - Use for the [button](button.md) component.

Type: String

Default: `"text"`

Valid values: `text | custom`

Required: No





## Slots



### children (trigger)

> Element that triggers the popover when selected by the user.




### content

> Content of the popover.









## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
