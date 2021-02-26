# Attribute editor (AttributeEditor)

Enables the user to create, edit, and delete resource attributes.



## Properties



### addButtonText

> Specifies the text that's displayed in the add button.

Type: String

Required: Yes


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### definition

> Defines the editor configuration. Each object in the array represents one form field in the row.
> * `label` (ReactNode) - Text label for the form field.
> * `info` (ReactNode) - Info link for the form field.
> * `errorText` ((item, itemIndex) => ReactNode) - Error message text to display as a control validation message.
>    It renders the form field as invalid if the returned value is not `null` or `undefined`.
> * `constraintText` ((item, itemIndex) => ReactNode) - Text to display as a constraint message below the field.
> * `control` ((item, itemIndex) => ReactNode) - A control to use as the input for the field.
> A maximum of four fields are supported.
> 

Type: ReadonlyArray<AttributeEditorProps.FieldDefinition<T>>

Required: Yes


### disableAddButton

> Determines whether the add button is disabled.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### isItemRemovable

> Function that determines whether an item is removable. When this function returns `false`, the remove
> button is not rendered and the user can't remove the item.
> By default, all items are removable.

Type: (item: T) => boolean

Default: `() => true`

Required: No


### items

> Sepcifies the items that serve as the data source for all rows.
> The display of a row is handled by the `definition` property.

Type: ReadonlyArray<T>

Default: `[]`

Required: No


### removeButtonText

> Specifies the text that's displayed in the remove button.

Type: String

Required: Yes





## Slots



### additionalInfo

> Displayed below the add button. Use it for additional information related to the attribute editor.




### empty

> Displayed when there are no items to display.







## Events



### onAddButtonClick

> Called when add button is clicked.

Cancelable: No



### onRemoveButtonClick

> Called when remove button is clicked.
> The event `detail` contains the index of the corresponding item.

Detail type: 
```
AttributeEditorProps.RemoveButtonClickDetail {
  itemIndex: number
}
```

Cancelable: No






## Ref functions



### focusRemoveButton





## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
