# Grid

The grid component is used to distribute content on a page.  It helps build consistent, balanced, and responsive layouts across an application.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### disableGutters

> Determines whether horizontal and vertical gutters are hidden.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### gridDefinition

> An array of element definitions that specifies how the columns must be
> arranged. Each element definition can have the following properties:
> - `colspan` (number | GridProps.BreakpointMapping) - The number (1-12) of grid elements for this column to span.
> - `offset` (number | GridProps.BreakpointMapping) - The number (0-11) of grid elements by which to offset the column.
> - `pull` (number | GridProps.BreakpointMapping) - The number (0-12) of grid elements by which to pull the column to the left.
> - `push` (number | GridProps.BreakpointMapping) - The number (0-12) of grid elements by which to push the column to the right.
> 
> The value for the each property can be a number (which applies for all
> breakpoints) or an object where the key is one of the supported breakpoints
> (`xxs`, `xs`, `s`, `m`, `l`, `xl`) or `default`. The value of this key is a number of columns,
> applied for that breakpoint and those above it. You must provide a `default` value for `colspan`.
> 
> We recommend that you don't use the `pull` and `push` properties of the element definition
> for accessibility reasons.
> 

Type: ReadonlyArray<GridProps.ElementDefinition>

Default: `[]`

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No





## Slots



### children

> The elements to align in the grid.
> You can provide any elements here. The number of elements
> should match the number of objects defined in the `gridDefinition`
> property.
> 









## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
