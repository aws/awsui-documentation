# Top navigation (TopNavigation)

A global navigation element for services that is consistent and persisted across all service pages.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### i18nStrings

> An object containing all the localized strings required by the component.

Type: 
```
TopNavigationProps.I18nStrings {
  overflowMenuBackIconAriaLabel?: string
  overflowMenuDismissIconAriaLabel?: string
  overflowMenuTitleText: string
  overflowMenuTriggerText: string
  searchDismissIconAriaLabel?: string
  searchIconAriaLabel?: string
}
```


Required: Yes


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### identity

> Properties describing the product identity. They are as follows:
> * `title` (string) - Specifies the title text.
> * `logo` ({ src: string, alt: string }) - Specifies the logo for the product.
> * `href` (string) - Specifies the `href` that the header links to.
> * `onFollow` (() => void) - Specifies the event handler called when the identity is clicked without any modifier keys.
> 

Type: 
```
TopNavigationProps.Identity {
  href: string
  logo?: TopNavigationProps.Logo
  onFollow?: CancelableEventHandler
  title?: string
}
```


Required: Yes


### utilities

> A list of utility navigation elements.
> The supported utility types are: `button` and `menu-dropdown`.
> The following properties are supported across all utility types:
> 
> * `type` (string) - The type of the utility. Can be `button` or `menu-dropdown`.
> * `text` (string) - Specifies the text shown in the top navigation or the title inside the dropdown if no explicit `title` property is set.
> * `title` (string) - The title displayed inside the dropdown.
> * `iconName` (string) - The name of an existing icon to display next to the utility.
> * `iconUrl` (string) - Specifies the URL of a custom icon. Use this property if the icon you want isn't available.
> * `iconAlt` (string) - Specifies alternate text for a custom icon provided using `iconUrl`. We recommend that you provide this for accessibility.
> * `iconSvg` (string) - Specifies the SVG of a custom icon.
> * `ariaLabel` (string) - Adds `aria-label` to the button or dropdown trigger. This is recommended for accessibility if a text is not provided.
> * `badge` (boolean) - Adds a badge to the corner of the icon to indicate a state change. For example: Unread notifications.
> * `disableTextCollapse` (boolean) - Prevents the utility text from being hidden on smaller screens.
> * `disableUtilityCollapse` (boolean) - Prevents the utility from being moved to an overflow menu on smaller screens.
> 
> ### button
> 
> * `variant` ('primary-button' | 'link') - The visual appearance of the button. The default value is 'link'.
> * `href` (string) - Specifies the `href` for a link styled as a button.
> * `external` (boolean) - Marks the link as external by adding an icon after the text. When clicked, the link opens in a new tab.
> * `externalIconAriaLabel` (string) - Adds an `aria-label` for the external icon.
> * `onClick` (() => void) - Specifies the event handler called when the utility is clicked.
> 
> ### menu-dropdown
> 
> * `description` (string) - The description displayed inside the dropdown.
> * `items` (ButtonDropdownProps.Items) - An array of dropdown items. This follows the same structure as the `items` property of the [button dropdown component](button-dropdown.md).
> * `onItemClick` (NonCancelableEventHandler<ButtonDropdownProps.ItemClickDetails>) - Specifies the event handler called when a dropdown item is selected.
> 

Type: ReadonlyArray<TopNavigationProps.Utility>

Default: `[]`

Required: No





## Slots



### search

> Use with an input or autosuggest control for a global search query.









## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
