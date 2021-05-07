# Modal

A UI element subordinate to an application's main window. It prevents interaction with the main page content, but keeps it visible with the modal as a child window in front of it.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### closeAriaLabel

> Adds an `aria-label` to the close button, for accessibility.

Type: String

Default: `""`

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### modalRoot

> Specifies the HTML element where the modal is rendered.
> If a modal root isn't provided, the modal will render to an element under `document.body`.

Type: HTMLElement

Required: No


### size

> Sets the width of the modal. `max` uses variable width up to the
> largest size allowed by the design guidelines. Other sizes
> (`small`/`medium`/`large`) have fixed widths.

Type: String

Default: `"medium"`

Valid values: `small | medium | large | max`

Required: No


### visible

> Determines whether the modal is displayed on the screen. Modals are hidden by default.
> Set this property to `true` to show them.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: Yes





## Slots



### children

> Body of the modal.




### footer

> Specifies a footer for the modal. If empty, the footer isn't displayed.




### header

> Specifies a title for the modal. Although this can be empty, we suggest that you always provide a title.







## Events



### onDismiss

> Called when a user closes the modal by using the close icon button,
> clicking outside of the modal, or pressing ESC.
> The event detail contains the `reason`, which can be any of the following:
> `['closeButton', 'overlay', 'keyboard']`.

Detail type: 
```
ModalProps.DismissDetail {
  reason: string
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
