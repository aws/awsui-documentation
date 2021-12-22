# Help panel (HelpPanel)

The panel displays help content that relates to a concept, term, setting, option, or task within the main page content.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### loading

> Renders the panel in a loading state. We recommend that you also set a `loadingText`.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### loadingText

> Specifies the text that's displayed when the panel is in a loading state.

Type: String

Required: No





## Slots



### children

> Main content of the help panel.
> Use `p, a, h3, h4, h5, span, div, ul, ol, li, code, pre, dl, dt, dd, hr, br, i, em, b, strong` tags to format the content.
> Use `code` for inline code or `pre` for code blocks.
> 




### footer

> Footer of the help panel.




### header

> Header of the help panel.
> It should contain the only `h2` used in the help panel.
> 









## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
