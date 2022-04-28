# Link

An anchor tag that defines a hyperlink, which a user can interact with to find out more information about a concept, task, or field.



## Properties



### ariaLabel

> Adds an aria-label to the HTML element.

Type: String

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### color

> Determines the text color of the link and its icon.
> - `normal`: Use in most cases where a link is required.
> - `inverted`: Use to style links inside Flashbars.
> This property is overridden if the variant is `info`.
> 

Type: String

Default: `'normal'`

Valid values: `normal | inverted`

Required: No


### external

> Marks the link as external by adding an icon after the text. If `href`
> is provided, opens the link in a new tab when clicked.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### externalIconAriaLabel

> Adds an aria-label to the external icon.

Type: String

Required: No


### fontSize

> Determines the font size and line height.
> This property is overridden if the variant is `info`.

Type: String

Default: `'body-m'`

Valid values: `body-s | body-m | heading-xs | heading-s | heading-m | heading-l | heading-xl | display-l`

Required: No


### href

> The URL that the link points to.
> If an `href` is not provided, the component will render using a
> "button" role and `target` will not be used.

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### rel

> Adds a `rel` attribute to the link. If the `rel` property is provided, it overrides the default behaviour.
> By default, the component sets the `rel` attribute to "noopener noreferrer" when `external` is `true` or `target` is `"_blank"`.

Type: String

Required: No


### target

> Specifies where to open the linked URL. Set this to `_blank` to open the URL
> in a new tab. If you set this property to `_blank`, the component
> automatically adds `rel="noopener noreferrer"` to avoid performance
> and security issues.
> For other options see the documentation for <a> tag's
> [target attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).
> 

Type: String

Required: No


### variant

> Determines the visual style of the link as follows:
> - `primary` - Displays the link text with bold styling for sufficient contrast with surrounding text.
>     Use this for links where the context doesn't imply interactivity such as
>     "Learn more" links and links within paragraphs.
> - `secondary` - Does not provide any additional indicators for interactivity (except for an underline when the user hovers over or focuses the link).
>     This can be used in cases where the interactivity is strongly implied by its context,
>     such as in a table or a list of external links.
> - `info` - Use for "info" links that link to content in a help panel.

Type: String

Default: `'secondary'`

Valid values: `primary | secondary | info | awsui-value-large`

Required: No





## Slots



### children

> The text to render inside the link.







## Events



### onFollow

> Called when a link is clicked without any modifier keys.
> Use this event if you want to prevent default browser navigation
> (by calling `preventDefault`) and implement client-side routing yourself.

Detail type: 
```
LinkProps.FollowDetail {
  external?: false | true
  href?: string
  target?: string
}
```

Cancelable: Yes






## Ref functions



### focus

> Sets the browser focus on the anchor element.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
