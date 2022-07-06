# Breadcrumb group (BreadcrumbGroup)

Displays a series of navigational links in a hierarchical list.



## Properties



### ariaLabel

> Provides an `aria-label` to the breadcrumb group that screen readers can read (for accessibility).

Type: String

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### expandAriaLabel

> Provides an `aria-label` to the ellipsis button that screen readers can read (for accessibility).

Type: String

Default: `"Show path"`

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### items

> An array of breadcrumb items that describes the link hierarchy for this navigation.
> Each option has the following properties:
> * `text` (string) - Specifies the title text of the breadcrumb item.
> * `href` (string) - Specifies the URL for the link in the breadcrumb item.
> You should specify the link even if you have a click handler for a breadcrumb item
> to ensure that valid markup is generated.
> 
> Note: The last breadcrumb item is automatically considered the current item, and it's
> attributed with the proper `aria-current` value and rendered as inactive.
> 

Type: ReadonlyArray<T>

Default: `[]`

Required: Yes







## Events



### onClick

> Called when the user clicks on a breadcrumb item.

Detail type: 
```
BreadcrumbGroupProps.ClickDetail {
  external?: false | true
  href: string
  item: T
  target?: string
  text: string
}
```

Cancelable: Yes



### onFollow

> Called when the user clicks on a breadcrumb item with the left mouse button
> without pressing modifier keys (that is, CTRL, ALT, SHIFT, META).

Detail type: 
```
BreadcrumbGroupProps.ClickDetail {
  external?: false | true
  href: string
  item: T
  target?: string
  text: string
}
```

Cancelable: Yes






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
