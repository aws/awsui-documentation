# Button dropdown (ButtonDropdown)

Enables you to group a set of actions under one button.



## Properties



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
> Enabling this property will allow the dropdown to extend beyond its parent, using fixed postioning and
> [React Portals](https://reactjs.org/docs/portals.html). Enable this setting if you need the dropdown
> to ignore overflow: hidden or scroll parents, such as in a split view layout.
> We do not recommend enabling this property if you don't have this requirement. There is a known issue with
> the '[aria-owns](https://a11ysupport.io/tech/aria/aria-owns_attribute)' attribute in Safari with VoiceOver that
> prevents VO specific controls (CTRL+OPT+Left/Right) from entering a dropdown on Safari due to its position in the DOM.
> Fixed positioning also results in slight visible lag when scrolling complex pages. Use with discretion.

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
> * `id` [string]: allows to identify the item that the user clicked on. Mandatory for individual items, optional for categories.
> 
> * `text` [string]: description shown in the menu for this item. Mandatory for individual items, optional for categories.
> 
> * `disabled` [boolean]: whether the item is disabled. Disabled items are not clickable.
> 
> * `items` [ReadonlyArray<Item>]: an array of item objects. Items will be rendered as nested menu items but only for the first nesting level, multi-nesting is not supported.
> An item which belongs to nested group has the following properties: `id`, `text`, `disabled` and `description`.
> 
> * `description` [string]: additional data that will be passed to a `data-description` attribute.
> 

Type: ReadonlyArray<InternalButtonDropdownProps.Item | InternalButtonDropdownProps.ItemGroup>

Required: Yes


### loading

> Renders the button as being in a loading state. It takes precedence over the `disabled` if both are set to `true`.
> It prevents clicks.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### variant

> Determines the general styling of the button dropdown. Use
> * `primary` for primary buttons,
> * `normal` for secondary buttons

Type: String

Default: `'normal'`

Valid values: `normal | primary`

Required: No





## Slots



### children (text)

> Text displayed in the button dropdown trigger.







## Events



### onItemClick

> Called when the user clicks on an item, and the item is not disabled.  The event detail object contains the id of the clicked item.

Detail type: 
```
InternalButtonDropdownProps.ItemClickDetails {
  id: string
}
```

Cancelable: No






## Ref functions



### focus

> Focuses the underlying native button.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
