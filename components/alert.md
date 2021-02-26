# Alert

A brief message that provides information or instructs users to take a specific action.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### dismissAriaLabel

> Adds an aria-label to the dismiss button.

Type: String

Required: No


### dismissible

> Adds a close button to the alert when set to `true`.
> An `onDismiss` event is fired when a user clicks the button.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### type

> Specifies the type of message you want to display.

Type: String

Default: `"info"`

Valid values: `success | error | warning | info`

Required: No


### visible

> Determines whether the alert is displayed.

Type: Boolean

Default: `true`

Valid values: `true | false`

Required: No





## Slots



### buttonText

> Displays an action button next to the message area when set.
> An `onButtonClick` event is fired when the user clicks it.




### children

> Primary text displayed in the element.




### header

> Heading text.







## Events



### onButtonClick

> Fired when the user clicks the action button.

Cancelable: No



### onDismiss

> Fired when the user clicks the close icon that is displayed
> when the `dismissible` property is set to `true`.

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
