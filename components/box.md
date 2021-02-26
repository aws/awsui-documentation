# Box

Enables you to display and style basic elements and containers in compliance with the design system's typography and spacing strategy.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### color

> Overrides the text color. You can set it to the following values:
> - `inherit` - Inherits the color from the parent element. For example, use this to style content
>      in Flashbars and to style the `empty` and `noMatch` slots of the Table and Cards components.
> - `text-label` - Specifies the text color for non-form labels. For example, use it for the key in key/value pairs.
> - `text-body-secondary` - Specifies the color for secondary text.
> - `text-status-error` - Specifies the color for error text and icons.
> - `text-status-success` - Specifies the color for success text and icons.
> - `text-status-info` - Specifies the color for info text and icon.
> - `text-status-inactive` - Specifies the color for inactive and loading text and icons.
> 
> Note: If you don't set it, the text color depends on the variant.
> 

Type: String

Valid values: `inherit | text-label | text-body-secondary | text-status-error | text-status-success | text-status-info | text-status-inactive`

Required: No


### display

> Overrides the display of the element. You can set it to the following values:
> - `block` - Specifies block display.
> - `inline` - Specifies inline display.
> - `inline-block` - Specifies inline-block display.
> - `none` - Hides the box.
> 
> Note: If you don't set it, the display depends on the variant.
> 

Type: String

Valid values: `block | inline | inline-block | none`

Required: No


### float

> Defines the floating behavior. You can set it to `left` or `right`.

Type: String

Valid values: `left | right`

Required: No


### fontSize

> Overrides the font size and line height. If not set, the font size and line height depend on the variant.

Type: String

Valid values: `body-s | body-m | heading-xs | heading-s | heading-m | heading-l | heading-xl | display-l`

Required: No


### fontWeight

> Overrides the font weight. If not set, the value depends on the variant.

Type: String

Valid values: `light | normal | bold`

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### margin

> Adds margins to the element. It can be the following:
> - A single string with a size. This applies the same margin to all sides (that is, top, right, bottom, left).
> - An object specifying the size of the margin per side. The object has the following format:
> ```
> {
>   top: "size of top margin",
>   right: "size of right margin",
>   bottom: "size of bottom margin",
>   left: "size of left margin",
>   horizontal: "size of left and right margin",
>   vertical: "size of top and bottom margin",
> }
> ```
> 
> The size can be `n`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, where `n` stands for none.
> 
>  For example, `margin="s"` adds a small margin to all sides.
> `margin={{ right: "l", bottom: "s" }}` adds a small margin to the bottom and a large margin to the right.
> 

Type: BoxProps.Spacing | BoxProps.SpacingSize

Required: No


### padding

> Adds padding to the element. It can be the following:
> - A single string with a size. This applies the same padding to all sides (that is, top, right, bottom, left).
> - An object specifying the size of padding per side. The object has the following format:
> ```
> {
>   top: "size of top padding",
>   right: "size of right padding",
>   bottom: "size of bottom padding",
>   left: "size of left padding",
>   horizontal: "size of left and right padding",
>   vertical: "size of top and bottom padding",
> }
> ```
> 
> The size can be `n`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, where `n` stands for none.
> 
>  For example, `padding="s"` adds small padding to all sides.
> `padding={{ right: "l", bottom: "s" }}` adds small padding to the bottom and large padding to the right.
> 

Type: BoxProps.Spacing | BoxProps.SpacingSize

Required: No


### textAlign

> Defines the text alignment within the element. You can set it to `left`, `center`, or `right`.

Type: String

Valid values: `left | center | right`

Required: No


### variant

> Defines the style and HTML tag name of element to display.

Type: String

Default: `"div"`

Valid values: `div | span | h1 | h2 | h3 | h4 | h5 | p | strong | small | code | pre | samp`

Required: No





## Slots



### children (content)

> Content of the box.









## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
