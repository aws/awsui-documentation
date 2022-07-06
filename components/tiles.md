# Tiles

A form element that's an extension of a radio group with additional metadata to facilitate comparisons or progressive disclosure. As with a radio group, tiles allow the user to choose one of a predefined set of options.



## Properties



### ariaDescribedby

> Adds `aria-describedby` to the component. If you're using this component within a form field,
> don't set this property because the form field component automatically sets it.
> Use this property if the component isn't surrounded by a form field, or you want to override the value
> automatically set by the form field (for example, if you have two components within a single form field).
> 
> To use it correctly, define an ID for each element that you want to use as a description
> and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
> 

Type: String

Required: No


### ariaLabel

> Adds `aria-label` on the group. Don't set this property if you are using this form element within a form field
> because the form field component automatically sets the correct labels to make the component accessible.

Type: String

Required: No


### ariaLabelledby

> Adds `aria-labelledby` to the component. If you're using this component within a form field,
> don't set this property because the form field component automatically sets it.
> Use this property if the component isn't surrounded by a form field, or you want to override the value
> automatically set by the form field (for example, if you have two components within a single form field).
> 
> To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
> 

Type: String

Required: No


### ariaRequired

> Adds `aria-required` on the group.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### columns

> The number of columns for the tiles to be displayed in. Valid values are integers between 1 and 4.
> If no value is specified, the number of columns is determined based on the number of items, with a maximum of 3.
> It is set to 2 if 4 or 8 items are supplied in order to optimize the layout.

Type: Number

Required: No


### controlId

> Specifies the ID of the native form element. You can use it to relate
> a label element's `for` attribute to this control.
> It defaults to an automatically generated ID that
> is provided by its parent form field component.
> 

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### items

> List of tile definitions. Each tile has the following properties:
> - `value` [string] - The value that will be associated with the tile. This is the value the tiles will get when the radio button is selected.
> - `label` [ReactNode] - A short description for the option the tile represents.
> - `description` [ReactNode] - (Optional) Further explanatory guidance on the tile option, shown below the `label`.
> - `image` [ReactNode] - (Optional) Visually distinctive image for the tile option, shown below the `description`.
> - `disabled` [boolean] - (Optional) Specifies whether the tile is disabled. Users can't select disabled tiles.
> - `controlId` [string] - (Optional) The ID of the internal input. You can use this to relate a label element's `for` attribute to this control.
>            We recommend that you don't set this property because it's automatically set by the tiles component.
> 

Type: ReadonlyArray<TilesProps.TilesDefinition>

Required: No


### value

> Specifies the value of the selected tile.
> If you want to clear the selection, use `null`.

Type: Null | string

Required: Yes







## Events



### onChange

> Called when the user selects a different tile.

Detail type: 
```
TilesProps.ChangeDetail {
  value: string
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
