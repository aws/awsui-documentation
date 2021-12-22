# Icon

Enables you to display basic icons that match the design system sizes, colors, and typography.



## Properties



### alt

> Specifies alternate text for a custom icon. We recommend that you provide this for accessibility.
> This property is ignored if you use a predefined icon or if you set your custom icon using the `svg` slot.

Type: String

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### name

> Specifies the icon to be displayed.

Type: String

Valid values: `add-plus | angle-left-double | angle-left | angle-right-double | angle-right | angle-up | angle-down | arrow-left | bug | call | calendar | caret-down-filled | caret-down | caret-left-filled | caret-right-filled | caret-up-filled | caret-up | contact | close | copy | download | edit | ellipsis | envelope | expand | external | file-open | file | filter | folder-open | folder | heart | key | lock-private | menu | microphone | notification | refresh | search | settings | share | status-in-progress | status-info | status-negative | status-pending | status-positive | status-stopped | status-warning | treeview-collapse | treeview-expand | undo | unlocked | upload | user-profile | view-full | view-horizontal | view-vertical | zoom-in | zoom-out`

Required: No


### size

> Specifies the size of the icon.
> If you set size to `inherit`, an icon size will be assigned based on the icon's inherited line height.
> For icons used alongside text, ensure the icon is placed inside the acompanying text tag.
> The icon will be vertically centered based on the height.
> 

Type: String

Default: `"normal"`

Valid values: `small | normal | medium | big | large | inherit`

Required: No


### url

> Specifies the URL of a custom icon. Use this property if the icon you want isn't available, and your custom icon cannot be an SVG.
> For SVG icons, use the `svg` slot instead.
> If you set both `url` and `svg`, `svg` will take precedence.
> 

Type: String

Required: No


### variant

> Specifies the color variant of the icon. The `normal` variant picks up the current color of its context.

Type: String

Default: `"normal"`

Valid values: `normal | disabled | error | inverted | link | subtle | success | warning`

Required: No





## Slots



### svg

> Specifies the SVG of a custom icon.
> Use this property if the icon you want isn't available, and you want your custom icon to inherit colors dictated by variant or hover states.
> When this property is set, the component will be decorated with `aria-hidden="true"`. Ensure that the `svg` element:
> - has attribute `focusable="false"`.
> - has `viewBox="0 0 16 16"`.
> 
> If you set the `svg` element as the root node of the slot, the component will automatically
> - set `stroke="currentColor"`, `fill="none"`, and `vertical-align="top"`.
> - set the stroke width based on the size of the icon.
> - set the width and height of the SVG element based on the size of the icon.
> 
> If you don't want these styles to be automatically set, wrap the `svg` element into a `span` and ensure icon `size` is not set to `inherit`.
> You can still set the stroke to `currentColor` to inherit the color of the surrounding elements.
> 
> If you set both `url` and `svg`, `svg` will take precedence.
> 
> *Note:* Remember to remove any additional elements (for example: `defs`) and related CSS classes from SVG files exported from design software.
> In most cases, they aren't needed, as the `svg` element inherits styles from the icon component.
> 









## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
