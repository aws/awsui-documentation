# Button

Allows users to initiate actions in the user interface.



## Properties



### ariaLabel

> Adds `aria-label` to the button element. It should be used in buttons that don't have text in order to make
> them accessible.

Type: String

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### disabled

> Renders the button as disabled and prevents clicks.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### download

> Specifies whether the linked URL, when selected, will prompt the user to download instead of navigate.
> You can specify a string value that will be suggested as the name of the downloaded file.
> This property only applies when an `href` is provided.

Type: Boolean | string

Required: No


### formAction

> The form action that is performed by a button click.

Type: String

Default: `'submit'`

Valid values: `submit | none`

Required: No


### href

> Applies button styling to a link. Use this property if you need a link styled as a button (`variant=link`).
> For example, if you have a 'help' button that links to a documentation page.

Type: String

Required: No


### iconAlign

> Specifies the alignment of the icon.

Type: String

Default: `'left'`

Valid values: `left | right`

Required: No


### iconAlt

> Specifies alternate text for a custom icon. We recommend that you provide this for accessibility.
> This property is ignored if you use a predefined icon or if you set your custom icon using the `iconSvg` slot.

Type: String

Required: No


### iconName

> Displays an icon next to the text. You can use the `iconAlign` property to position the icon.

Type: String

Valid values: `add-plus | angle-left-double | angle-left | angle-right-double | angle-right | angle-up | angle-down | arrow-left | bug | call | calendar | caret-down-filled | caret-down | caret-left-filled | caret-right-filled | caret-up-filled | caret-up | contact | close | copy | download | edit | ellipsis | envelope | expand | external | file-open | file | filter | folder-open | folder | heart | key | lock-private | menu | microphone | notification | refresh | search | settings | share | status-in-progress | status-info | status-negative | status-pending | status-positive | status-stopped | status-warning | treeview-collapse | treeview-expand | undo | unlocked | upload | user-profile | view-full | view-horizontal | view-vertical | zoom-in | zoom-out`

Required: No


### iconUrl

> Specifies the URL of a custom icon. Use this property if the icon you want isn't available.
> If you set both `iconUrl` and `iconSvg`, `iconSvg` will take precedence.
> 

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### loading

> Renders the button as being in a loading state. It takes precedence over the `disabled` if both are set to `true`.
> It prevents users from clicking the button.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### target

> Specifies where to open the linked URL (for example, to open in a new browser window or tab use `_blank`).
> This property only applies when an `href` is provided.

Type: String

Required: No


### variant

> Determines the general styling of the button as follows:
> * `primary` for primary buttons.
> * `normal` for secondary buttons.
> * `link` for tertiary buttons.
> * `icon` to display an icon only (no text).
> * `inline-icon` to display an icon-only (no text) button within a text context.

Type: String

Default: `'normal'`

Valid values: `normal | primary | link | icon | inline-icon`

Required: No


### wrapText

> Specifies if the `text` content wraps. If you set it to `false`, it prevents the text from wrapping.

Type: Boolean

Default: `true`

Valid values: `true | false`

Required: No





## Slots



### children (text)

> Text displayed in the button element.




### iconSvg

> Specifies the SVG of a custom icon.
> Use this property if you want your custom icon to inherit colors dictated by variant or hover states.
> When this property is set, the component will be decorated with `aria-hidden="true"`. Ensure that the `svg` element:
> - has attribute `focusable="false"`.
> - has `viewBox="0 0 16 16"`.
> 
> If you set the `svg` element as the root node of the slot, the component will automatically
> - set `stroke="currentColor"`, `fill="none"`, and `vertical-align="top"`.
> - set the stroke width based on the size of the icon.
> - set the width and height of the SVG element based on the size of the icon.
> 
> If you don't want these styles to be automatically set, wrap the `svg` element into a `span`.
> You can still set the stroke to `currentColor` to inherit the color of the surrounding elements.
> 
> If you set both `iconUrl` and `iconSvg`, `iconSvg` will take precedence.
> 
> *Note:* Remember to remove any additional elements (for example: `defs`) and related CSS classes from SVG files exported from design software.
> In most cases, they aren't needed, as the `svg` element inherits styles from the icon component.
> 







## Events



### onClick

> Called when the user clicks on the button and the button is not disabled or in loading state.

Detail type: 
```
ClickDetail {
  altKey: boolean
  button: number
  ctrlKey: boolean
  metaKey: boolean
  shiftKey: boolean
}
```

Cancelable: Yes



### onFollow

> Called when the user clicks on the button with the left mouse button without pressing
> modifier keys (that is, CTRL, ALT, SHIFT, META), and the button has an `href` set.

Detail type: 
```
Null
```

Cancelable: Yes






## Ref functions



### focus

> Focuses the underlying native button.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
