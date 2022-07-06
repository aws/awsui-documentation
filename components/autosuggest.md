# Autosuggest

An input that provides a list of suggestions that the user can choose from.



## Properties



### ariaDescribedby

> Adds `aria-describedby` to the component. If you're using this component within a form field,
> don't set this property because the form field component automatically sets it.
> Use this property if the component isn't surrounded by a form field, or you want to override the value
> automatically set by the form field (for example, if you have two components within a single form field).
> 
> To use it correctly, define an ID for each element that you want to use as a description
> and set the property to a string of each ID separated by spaces (for example, `"id1 id2 id3"`).
> 

Type: String

Required: No


### ariaLabel

> Adds an `aria-label` to the native control.
> Use this if you don't have a visible label for this control.
> 

Type: String

Required: No


### ariaLabelledby

> Adds `aria-labelledby` to the component. If you're using this component within a form field,
> don't set this property because the form field component automatically sets it.
> Use this property if the component isn't surrounded by a form field, or you want to override the value
> automatically set by the form field (for example, if you have two components within a single form field).
> 
> To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
> 

Type: String

Required: No


### ariaRequired

> Specifies whether to add `aria-required` to the native control.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### autoFocus

> Indicates whether the control should be focused as
> soon as the page loads, which enables the user to
> start typing without having to manually focus the control. Don't
> use this option on pages where the control may be
> scrolled out of the viewport.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### controlId

> Specifies the ID of the native form element. You can use it to relate
> a label element's `for` attribute to this control.
> It defaults to an automatically generated ID that
> is provided by its parent form field component.
> 

Type: String

Required: No


### disableBrowserAutocorrect

> Specifies whether to disable browser autocorrect and related features.
> If you set this to `true`, it disables any native browser capabilities
> that automatically correct user input, such as `autocorrect` and
> `autocapitalize`. If you don't set it, the behavior follows the default behavior
> of the user's browser.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### disabled

> Specifies if the control is disabled, which prevents the
> user from modifying the value and prevents the value from
> being included in a form submission. A disabled control can't
> receive focus.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### enteredTextLabel

> Specifies a function that generates the custom value indicator (for example, `\`Use "${value}"\``).

Type:  (value: string) => string

Required: Yes


### errorText

> Specifies the text to display when a data fetching error occurs. Make sure that you provide `recoveryText`.

Type: String

Required: No


### expandToViewport

> Enabling this property will allow the dropdown to extend beyond its parent by using fixed positioning and
> [React Portals](https://reactjs.org/docs/portals.html).
> If you want the dropdown to ignore the `overflow` CSS property of its parents,
> such as in a split view layout, enable this property.
> However, use discretion. If you don't need to, we recommend you don't enable this property because fixed positioning results
> in a slight, visible lag when scrolling complex pages.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### filteringType

> Determines how filtering is applied to the list of `options`:
> * `auto` - The component will automatically filter options based on user input.
> * `manual` - You will set up `onChange` or `onLoadItems` event listeners and filter options on your side or request
> them from server.
> By default the component will filter the provided `options` based on the value of the filtering input field.
> Only options that have a `value` or `label` that contains the input value as a substring
> are displayed in the list of options.
> 
> If you set this property to `manual`, this default filtering mechanism is disabled and all provided `options` are
> displayed in the dropdown list. In that case make sure that you use the `onChange` or `onLoadItems` events in order
> to set the `options` property to the options that are relevant for the user, given the filtering input value.
> 
> Note: Manual filtering doesn't disable match highlighting.
> 

Type: String

Default: `'auto'`

Valid values: `none | auto | manual`

Required: No


### finishedText

> Specifies the text to display at the bottom of the dropdown menu after pagination has reached the end.

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### invalid

> Overrides the invalidation state. Usually the invalid state
> comes from the parent `FormField`component,
> however sometimes you need to override its
> state when you have more than one input within a
> single form field.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### loadingText

> Specifies the text to display when in the loading state.

Type: String

Required: No


### name

> Specifies the name of the control used in HTML forms.

Type: String

Required: No


### options

> Specifies an array of options that are displayed to the user as a dropdown list.
> The options can be grouped using `OptionGroup` objects.
> #### Option
> - `value` (string) - The returned value of the option when selected.
> - `label` (string) - (Optional) Option text displayed to the user.
> - `description` (string) - (Optional) Further information about the option that appears below the label.
> - `disabled` (boolean) - (Optional) Determines whether the option is disabled.
> - `labelTag` (string) - (Optional) A label tag that provides additional guidance, shown next to the label.
> - `tags` [string[]] - (Optional) A list of tags giving further guidance about the option.
> - `filteringTags` [string[]] - (Optional) A list of additional tags used for automatic filtering.
> - `iconName` (string) - (Optional) Specifies the name of an [icon](icon.md) to display in the option.
> - `iconAlt` (string) - (Optional) Specifies alternate text for a custom icon, for use with `iconUrl`.
> - `iconUrl` (string) - (Optional) URL of a custom icon.
> - `iconSvg` (ReactNode) - (Optional) Custom SVG icon. Equivalent to the `svg` slot of the [icon component](icon.md).
> 
> #### OptionGroup
> - `label` (string) - Option group text displayed to the user.
> - `disabled` (boolean) - (Optional) Determines whether the option group is disabled.
> - `options` (Option[]) - (Optional) The options under this group.
> 
> Note: Only one level of option nesting is supported.
> 
> If you want to use the built-in filtering capabilities of this component, provide
> a list of all valid options here and they will be automatically filtered based on the user's filtering input.
> 
> Alternatively, you can listen to the `onChange` or `onLoadItems` event and set new options
> on your own.
> 

Type: AutosuggestProps.Options

Required: No


### placeholder

> Specifies the placeholder text rendered when the value is an empty string.

Type: String

Required: No


### readOnly

> Specifies if the control is read only, which prevents the
> user from modifying the value but includes it in a form
> submission. A read-only control can receive focus.
> Don't use read-only inputs outside a form.
> 

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### recoveryText

> Specifies the text for the recovery button. The text is displayed next to the error text.
> Use the `onLoadItems` event to perform a recovery action (for example, retrying the request).

Type: String

Required: No


### renderHighlightedAriaLive

> Overrides the element that is announced to screen readers
> when the highlighted option changes. By default, this announces
> the option's name and properties, and its selected state if
> the `selectedLabel` property is defined.
> The highlighted option is provided, and its group (if groups
> are used and it differs from the group of the previously highlighted option).
> For more information, see the
> [accessibility guidelines](autosuggest.md?tabId=usage#accessibility-guidelines).
> 

Type: 
```
 (
  option: AutosuggestProps.Option,
  group: AutosuggestProps.OptionGroup
) => string
```


Required: No


### selectedAriaLabel

> Specifies the localized string that describes an option as being selected.
> This is required to provide a good screen reader experience. For more information, see the
> [accessibility guidelines](autosuggest.md?tabId=usage#accessibility-guidelines).

Type: String

Required: No


### statusType

> Specifies the current status of loading more options.
> * `pending` - Indicates that no request in progress, but more options may be loaded.
> * `loading` - Indicates that data fetching is in progress.
> * `finished` - Indicates that pagination has finished and no more requests are expected.
> * `error` - Indicates that an error occurred during fetch. You should use `recoveryText` to enable the user to recover.

Type: String

Default: `'finished'`

Valid values: `pending | loading | finished | error`

Required: No


### value

> Specifies the text entered into the form element.

Type: String

Required: Yes


### virtualScroll

> If you have more than 500 options, enable this flag to apply a performance optimization
> that makes the filtering experience smoother. We don't recommend enabling the feature if you
> have less than 500 options, because the improvements to performance are offset by a
> visible scrolling lag.
> When you set this flag to `true`, it removes options that are not currently in view from the DOM.
> If your test accesses such options, you need to first scroll the options container
> to the correct offset, before performing any operations on them. Use the element returned
> by the `findOptionsContainer` test utility for this.
> 

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No





## Slots



### empty

> Specifies the text that's displayed when there aren't any suggestions to display.
> This is displayed when `statusType` is set to `finished` or it's not set at all.







## Events



### onBlur

> Called when input focus is removed from the UI control.

Detail type: 
```
Null
```

Cancelable: No



### onChange

> Called whenever a user changes the input value (by typing or pasting).
> The event `detail` contains the current value of the field.

Detail type: 
```
InputProps.ChangeDetail {
  value: string
}
```

Cancelable: No



### onFocus

> Called when input focus is moved to the UI control.

Detail type: 
```
Null
```

Cancelable: No



### onKeyDown

> Called when the underlying native textarea emits a `keydown` event.
> The event `detail` contains the `keyCode` and information
> about modifiers (that is, CTRL, ALT, SHIFT, META, etc.).

Detail type: 
```
InputProps.KeyDetail {
  altKey: boolean
  ctrlKey: boolean
  key: string
  keyCode: number
  metaKey: boolean
  shiftKey: boolean
}
```

Cancelable: Yes



### onKeyUp

> Called when the underlying native textarea emits a `keyup` event.
> The event `detail` contains the `keyCode` and information
> about modifiers (that is, CTRL, ALT, SHIFT, META, etc.).

Detail type: 
```
InputProps.KeyDetail {
  altKey: boolean
  ctrlKey: boolean
  key: string
  keyCode: number
  metaKey: boolean
  shiftKey: boolean
}
```

Cancelable: Yes



### onLoadItems

> Use this event to implement the asynchronous behavior for the component.
> The event is called in the following situations:
> * The user scrolls to the end of the list of options, if `statusType` is set to `pending`.
> * The user clicks on the recovery button in the error state.
> * The user types inside the input field.
> * The user focuses the input field.
> 
> The detail object contains the following properties:
> * `filteringText` - The value that you need to use to fetch options.
> * `firstPage` - Indicates that you should fetch the first page of options that match the `filteringText`.
> * `samePage` - Indicates that you should fetch the same page that you have previously fetched (for example, when the user clicks on the recovery button).
> 

Detail type: 
```
OptionsLoadItemsDetail {
  filteringText: string
  firstPage: boolean
  samePage: boolean
}
```

Cancelable: No



### onSelect

> Called whenever a user selects an option in the dropdown. Don't use this event as the only way to handle user input.
> Instead, use `onSelect` in combination with the `onChange` handler only as an optional convenience for the user.

Detail type: 
```
AutosuggestProps.SelectDetail {
  value: string
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
