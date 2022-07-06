# Header

Summarizes the content that's displayed under it and provides a space for optional action buttons. 



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### counter

> Specifies secondary text that's displayed to the right of the heading title. This is commonly used
> to display resource counters in table and cards components.

Type: String

Required: No


### headingTagOverride

> Overrides the default [HTML heading tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
> provided by the variant.

Type: String

Valid values: `h1 | h2 | h3 | h4 | h5`

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### variant

> Specifies the variant of the header:
> * `h1` - Use this for page level headers.
> * `h2` - Use this for container level headers.
> * `h3` - Use this for section level headers.
> * `awsui-h1-sticky` - Use this for sticky headers in cards and tables.

Type: String

Default: `"h2"`

Valid values: `h1 | h2 | h3 | awsui-h1-sticky`

Required: No





## Slots



### actions

> Actions for the container.




### children (title)

> The heading text. Plain text is recommended. The component renders the
> HTML heading tag based on the specified `variant` or `headingTagOverride`.




### description

> Supplementary text below the heading.




### info

> Area next to the heading to display an Info link.









## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
