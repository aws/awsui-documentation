# Container

Enables you to present a group of pieces of content, indicating that the items are related. For example, a table is a type of container.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### disableContentPaddings

> Determines whether the container content has padding. If `true`, removes the default padding from the content area.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### disableHeaderPaddings

> Determines whether the container header has padding. If `true`, removes the default padding from the header.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### variant

> Specify a container variant with one of the following:
> * `default` - Use this variant in standalone context.
> * `stacked` - Use this variant adjacent to other stacked containers (such as a container,
>               table).

Type: String

Valid values: `default | stacked`

Required: No





## Slots



### children

> Main content of the container.




### footer

> Footer of the container.




### header

> Heading element of the container. Use the [header component](header.md).









## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
