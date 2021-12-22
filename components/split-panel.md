# Split panel (SplitPanel)

A collapsible panel that provides access to secondary information or controls. It is the primary component to implement split view, a pattern to display resource collection with contextual resource details. 



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### header

> Header of the split panel.

Type: String

Required: Yes


### hidePreferencesButton

> When set to `true`, the preferences button is not displayed.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### i18nStrings

> An object containing all the necessary localized strings required by the component.
> - `closeButtonAriaLabel` - The text of the panel close button aria label.
> - `openButtonAriaLabel` - The text of the panel open button aria label.
> - `preferencesTitle` - The text of the preferences modal header.
> - `preferencesPositionLabel` - The text of the position preference label.
> - `preferencesPositionDescription` - The text of the position preference description.
> - `preferencesPositionSide` - The text of the side position preference label.
> - `preferencesPositionBottom` - The text of the bottom position preference label.
> - `preferencesConfirm` - The text of the preference modal confirm button.
> - `preferencesCancel` - The text of the preference modal cancel button.
> - `resizeHandleAriaLabel` - The label of the resize handle aria label.

Type: 
```
SplitPanelProps.I18nStrings {
  closeButtonAriaLabel: string
  openButtonAriaLabel: string
  preferencesCancel: string
  preferencesConfirm: string
  preferencesPositionBottom: string
  preferencesPositionDescription: string
  preferencesPositionLabel: string
  preferencesPositionSide: string
  preferencesTitle: string
  resizeHandleAriaLabel: string
}
```


Required: Yes


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No





## Slots



### children










## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
