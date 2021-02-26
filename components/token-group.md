# Token group (TokenGroup)

A set of compact representations of an individual item selected from a list.



## Properties



### alignment

> Specifies the direction in which tokens are aligned (`horizontal | vertical`).

Type: String

Default: `"horizontal"`

Valid values: `horizontal | vertical`

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### items

> An array of objects representing token items. Each token has the following properties:
> - `label` (string) - Title text of the token.
> - `description` (string) - (Optional) Further information about the token that appears below the label.
> - `disabled` [boolean] - (Optional) Determines whether the token is disabled.
> - `labelTag` (string) - (Optional) A label tag that provides additional guidance, shown next to the label.
> - `tags` [string[]] - (Optional) A list of tags giving further guidance about the token.
> - `dismissLabel` (string) - (Optional) Adds an `aria-label` to the dismiss button.
> - `iconName` (string) - (Optional) Specifies the name of an [icon](icon.md) to display in the token.
> - `iconAlt` (string) - (Optional) Specifies alternate text for a custom icon, for use with `iconUrl`.
> - `iconUrl` (string) - (Optional) URL of a custom icon.
> 

Type: ReadonlyArray<TokenGroupProps.Item>

Required: No







## Events



### onDismiss

>  Called when the user clicks on the dismiss button. The token won't be automatically removed.
>  Make sure that you add a listener to this event to update your application state.

Detail type: 
```
TokenGroupProps.DismissDetail {
  itemIndex: number
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
