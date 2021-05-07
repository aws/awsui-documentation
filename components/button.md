# Button

Enables users to trigger actions in the user interface.



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

> Specifies alternate text for the custom icon, for accessibility compliance. This property has an effect
> only when the `iconUrl` property is set. Default icons already have predefined names.

Type: String

Required: No


### iconName

> Displays an icon next to the text. You can use the `iconAlign` property to position the icon.

Type: String

Valid values: `add-plus | angle-left-double | angle-left | angle-right-double | angle-right | angle-up | angle-down | arrow-left | bug | call | calendar | caret-down-filled | caret-down | caret-left-filled | caret-right-filled | caret-up-filled | caret-up | contact | close | copy | download | edit | envelope | expand | external | file-open | file | filter | folder-open | folder | heart | key | lock-private | menu | microphone | notification | refresh | search | settings | share | status-in-progress | status-info | status-negative | status-pending | status-positive | status-stopped | status-warning | treeview-collapse | treeview-expand | undo | unlocked | upload | view-full | view-horizontal | view-vertical | zoom-in | zoom-out`

Required: No


### iconUrl

> Specifies the URL for a custom icon image. You should use this instead of the `icon` property if the desired icon isn't available.

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






## Ref functions



### focus

> Focuses the underlying native button.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
