# Expandable section (ExpandableSection)

With expandable selection, users can expand or collapse a section. Use expandable 
sections when you have multiple sections on a page, and you want to allow users to see one or more sections at a time. Expandable sections are collapsed by default. 



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### defaultExpanded

> Determines whether the component initially displays in expanded state (that is, with content visible). The component operates in an uncontrolled
> manner even if you provide a value for this property.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### disableContentPaddings

> Determines whether the content section's default padding is removed. This default padding is only present for the `container` variant.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### expanded

> Determines whether the component is in the expanded state (that is, with content visible). The component operates in a controlled
> manner if you provide a value for this property.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### variant

> The possible variants of an expandable section are as follows:
>  * `default` - Use this variant in any context.
>  * `footer` - Use this variant in container footers.
>  * `container` - Use this variant in a detail page alongside other containers.
>  * `navigation` - Use this variant in the navigation panel with anchors and custom styled content.
>    It doesn't have any default styles.

Type: String

Default: `"default"`

Valid values: `default | footer | container | navigation`

Required: No





## Slots



### children

> Primary content displayed in the expandable section element.




### header

> Heading displayed above the content text.
> When using the container variant, use the Header component. Otherwise, use plain text.
> 







## Events



### onChange

> Called when the state changes (that is, when the user expands or collapses the component).
> The event `detail` contains the current value of the `expanded` property.

Detail type: 
```
ExpandableSectionProps.ChangeDetail {
  expanded: boolean
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
