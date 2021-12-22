# Segmented control (SegmentedControl)

With a segmented control, users can toggle between different ways of formatting a piece of content or data.



## Properties



### ariaLabelledby

> Adds aria-labelledby to the component. Create a visually hidden element with an ID and set this property to that ID. If you don't want the label to be visible in narrow containers, use this property instead of `label`.

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


### label

> Defines the label of the entire segmented control. In the standard view (that is, all individual segments are visible),
> this label is used as `aria-label` on the group of segments. In a narrow container, where this component is displayed as a select component,
> the label is visible and attached to the select component, unless `ariaLabelledBy` is defined. Don't use `label` and `ariaLabelledBy` at the same time.

Type: String

Required: No


### options

> An array of objects representing options. Each segment has the following properties:
> - `id` (string) - The ID of the segment.
> - `disabled` [boolean] - (Optional) Determines whether the segment is disabled, which prevents the user from selecting it.
> - `iconName` (string) - (Optional) Specifies the name of the icon, used with the [icon component](icon.md).
> - `iconAlt` (string) - (Optional) Specifies alternate text for the icon when using `iconUrl`, or `iconName` without `text`.
>            This is required when you use an icon without `text`.
> - `iconUrl` (string) - (Optional) Specifies the URL of a custom icon.
> - `iconSvg` (ReactNode) - (Optional) Custom SVG icon. Equivalent to the `svg` slot of the [icon component](icon.md).
> - `text` (string) - (Optional) Specifies the text of the segment.
> 

Type: ReadonlyArray<SegmentedControlProps.Option>

Required: No


### selectedId

> ID of the selected option. If you want to clear the selection, use `null`.

Type: Null | string

Required: Yes







## Events



### onChange

> Called when the user selects a different segment.

Detail type: 
```
SegmentedControlProps.ChangeDetail {
  selectedId: string
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
