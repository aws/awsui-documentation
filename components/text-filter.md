# Text filter (TextFilter)

With a text filter, users can enter text that’s used to match specific items in a collection.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### countText

> Accepts a human-readable, localized string that indicates the number of results. For example, "1 match" or "165 matches."
> If the total number of results is unknown, also include an indication that there may be more results than
> the number listed. For example, "25+ matches."
> The count text is only displayed when `filteringText` isn't empty.
> 

Type: String

Required: No


### disabled

> Specifies if the filtering input is disabled.
> For example, you can use it if you are fetching new items upon filtering change
> in order to prevent the user from changing the filtering text.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### filteringAriaLabel

> Adds an `aria-label` on the filtering input.

Type: String

Required: No


### filteringPlaceholder

> Placeholder for the filtering input.

Type: String

Required: No


### filteringText

> The current value of the filtering input.

Type: String

Required: Yes


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No







## Events



### onChange

> Called when a change in filtering is caused by a user interaction. The event `detail` contains the current `filteringText`.

Detail type: 
```
TextFilterProps.ChangeDetail {
  filteringText: string
}
```

Cancelable: No



### onDelayedChange

> Called after the user changes the value of the filtering input field and stops typing for a certain
> period of time. If you want a delayed handler to invoke a filtering API call, you can use this event in addition to `onChange`.

Detail type: 
```
TextFilterProps.ChangeDetail {
  filteringText: string
}
```

Cancelable: No






## Ref functions



### focus

> Sets focus on the underlying input control.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
