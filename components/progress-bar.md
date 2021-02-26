# Progress bar (ProgressBar)

Informs the user about the progress of an operation with a known duration.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### resultButtonText

> Specifies the text for the button that's displayed when the `status` is set to `error` or `success`.
> If `resultButtonText` is empty, the result button isn't displayed.
> Note: If you use the `flash` variant, the result button isn't displayed.
> Add a button using the `action` property of the flashbar item instead.
> 

Type: String

Required: No


### status

> Specifies the status of the progress bar. You can set it to one of the following:
> - `"in-progress"` - Displays a progress bar.
> - `"success"` or `"error"` - Displays a result state and replaces the progress element with a status indicator,
> `resultText`, and a result button.
> 

Type: String

Default: `"in-progress"`

Valid values: `in-progress | success | error`

Required: No


### value

> Indicates the current progress as a percentage. The value must be between 0 and 100. Decimals are rounded.

Type: Number

Default: `0`

Required: No


### variant

> Enables the correct styling of the progress bar in different contexts. You can set it to one of the following:
> - `"flash"` - Use this variatn when using the progress bar within a flash component.
>              Note that the result button isn't displayed when using this variant.
>              Use the `buttonText` property and the `onButtonClick` event listener of the flashbar item instead of the result button provided by the progress bar.
> - `"key-value"` - Use this variant when using the progress bar within the key-value pairs pattern.
> - `"standalone"` Use in all other cases. This is the default value.
> 

Type: String

Default: `"standalone"`

Valid values: `standalone | flash | key-value`

Required: No





## Slots



### additionalInfo

> Information that's displayed below the progress bar or status text.




### description

> More detailed information about the operation that appears below the label.




### label

> Short description of the operation that appears at the top of the component.
> Make sure that you always provide a label for accessibility.
> 




### resultText

> Content that's displayed when `status` is set to `error` or `success`.







## Events



### onResultButtonClick

> Called when the user clicks the result state button.
> Note: If you are using the `flash` variant, the result button isn't displayed.
> Use the `buttonText` property and the `onButtonClick` event listener of the flashbar item instead.
> 

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
