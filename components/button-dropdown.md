# Button dropdown (ButtonDropdown)

Enables you to group a set of actions under one button.



## Properties



### ariaLabel

> Adds `aria-label` to the button dropdown trigger.
> It should be used in buttons that don't have text in order to make them accessible.

Type: String

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### disabled

> Determines whether the button dropdown is disabled. Users cannot interact with the control if it's disabled.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### expandToViewport

> By default, the dropdown height is constrained to fit inside the height of its parent element.
> Enabling this property will allow the dropdown to extend beyond its parent by using fixed positioning and
> [React Portals](https://reactjs.org/docs/portals.html).
> If you want the dropdown to ignore the `overflow` CSS property of its parents,
> such as in a split view layout, enable this property.
> However, use discretion.
> If you don't need to, we recommend you don't enable this property because there is a known issue with
> the '[aria-owns](https://a11ysupport.io/tech/aria/aria-owns_attribute)' attribute in Safari with VoiceOver that
> prevents VO specific controls (CTRL+OPT+Left/Right) from entering a dropdown on Safari due to its position in the DOM.
> If you don't need to, we also recommend you don't enable this property because fixed positioning results
> in a slight, visible lag when scrolling complex pages.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### expandableGroups

> Controls expandability of the item groups.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### items

> Array of objects, each having the following properties:
> - `id` (string) - allows to identify the item that the user clicked on. Mandatory for individual items, optional for categories.
> 
> - `text` (string) - description shown in the menu for this item. Mandatory for individual items, optional for categories.
> 
> - `disabled` (boolean) - whether the item is disabled. Disabled items are not clickable, but they can be highlighted with the keyboard to make them accessible.
> 
> - `disabledReason` (string) - (Optional) Displays text near the `text` property when item is disabled. Use to provide additional context.
> 
> - `items` (ReadonlyArray<Item>): an array of item objects. Items will be rendered as nested menu items but only for the first nesting level, multi-nesting is not supported.
> An item which belongs to nested group has the following properties: `id`, `text`, `disabled` and `description`.
> 
> - `description` (string) - additional data that will be passed to a `data-description` attribute.
> 
> - `href` (string) - (Optional) Defines the target URL of the menu item, turning it into a link.
> 
> - `external` (boolean) - Marks a menu item as external by adding an icon after the menu item text. The link will open in a new tab when clicked. Note that this only works when `href` is also provided.
> 
> - `externalIconAriaLabel` (string) - Adds an `aria-label` to the external icon.
> 
> - `iconName` (string) - (Optional) Specifies the name of the icon, used with the [icon component](icon.md).
> 
> - `iconAlt` (string) - (Optional) Specifies alternate text for the icon when using `iconUrl`.
> 
> - `iconUrl` (string) - (Optional) Specifies the URL of a custom icon.
> 
> - `iconSvg` (ReactNode) - (Optional) Custom SVG icon. Equivalent to the `svg` slot of the [icon component](icon.md).
> 
> 

Type: ReadonlyArray<ButtonDropdownProps.ItemOrGroup>

Required: Yes


### loading

> Renders the button as being in a loading state. It takes precedence over the `disabled` if both are set to `true`.
> It prevents clicks.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### variant

> Determines the general styling of the button dropdown.
> * `primary` for primary buttons
> * `normal` for secondary buttons
> * `icon` for icon buttons

Type: String

Default: `'normal'`

Valid values: `normal | primary | icon`

Required: No





## Slots



### children (text)

> Text displayed in the button dropdown trigger.







## Events



### onItemClick

> Called when the user clicks on an item, and the item is not disabled.  The event detail object contains the id of the clicked item.

Detail type: 
```
ButtonDropdownProps.ItemClickDetails {
  external?: false | true
  href?: string
  id: string
  target?: string
}
```

Cancelable: Yes



### onItemFollow

> Called when the user clicks on an item with the left mouse button without pressing
> modifier keys (that is, CTRL, ALT, SHIFT, META), and the item has an `href` set.

Detail type: 
```
ButtonDropdownProps.ItemClickDetails {
  external?: false | true
  href?: string
  id: string
  target?: string
}
```

Cancelable: Yes






## Ref functions



### focus

> Focuses the underlying native button.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
