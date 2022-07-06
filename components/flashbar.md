# Flashbar

Displays one or more page-level flash notifications to communicate the status of a user’s action, such as success, failed, and so on.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### items

> Specifies flash messages that appear in the same order that they are listed.
> The value is an array of flash message definition objects.
> A flash message object contains the following properties:
> * `header` (ReactNode) - Specifies the heading text.
> * `content` (ReactNode) - Specifies the primary text displayed in the flash element.
> * `type` (string) - Indicates the type of the message to be displayed. Allowed values are as follows: `success, error, warning, info`. The default is `info`.
> * `loading` (boolean) - Replaces the status icon with a spinner and forces the type to `info`.
> * `dismissible` (boolean) - Determines whether the component includes a close button icon. By default, the close button is not included.
> When a user clicks on this button the `onDismiss` handler is called.
> * `dismissLabel` (string) - Specifies an `aria-label` for to the dismiss icon button for improved accessibility.
> * `action` (ReactNode) - Specifies an action for the flash message. Although it is technically possible to insert any content,
> our UX guidelines only allow you to add a button.
> * `buttonText` (string) - Specifies that an action button should be displayed, with the specified text.
> When a user clicks on this button the `onButtonClick` handler is called. If the `action` property is set, this property is ignored.
> **Deprecated**, replaced by `action`.
> *`id` (string) - Specifies a unique flash message identifier. This property  is used in two ways:
> 1. As a [keys](https://reactjs.org/docs/lists-and-keys.html#keys) source for React rendering.
> 2. To identify which flash message will be removed from the DOM when it is dismissed, to animate it out.

Type: ReadonlyArray<FlashbarProps.MessageDefinition>

Required: Yes









## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
