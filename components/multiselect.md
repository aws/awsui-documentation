# Multiselect

A form element that enables a user to choose multiple items from a list of options.



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

> Adds `aria-label` to the select element.

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

> Adds `aria-required` to the native input element.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### controlId

> Specifies the ID for the trigger component. It uses an automatically generated ID by default.

Type: String

Required: No


### deselectAriaLabel

> Specifies an `aria-label` for the token deselection button.

Type: 
```
 (
  option: MultiselectProps.Option
) => string
```


Required: No


### disabled

> Determines whether the whole select component is disabled.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


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


### filteringAriaLabel

> Adds an `aria-label` on the built-in filtering input if filtering is enabled.

Type: String

Required: No


### filteringPlaceholder

> Specifies the placeholder to display in the filtering input if filtering is enabled.

Type: String

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

Valid values: `none | auto | manual`

Required: No


### finishedText

> Specifies the text to display at the bottom of the dropdown menu after pagination has reached the end.

Type: String

Required: No


### hideTokens

> Hides the tokens displayed underneath the component.
> Only use this if the selected options are displayed elsewhere on the page.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### i18nStrings

> An object containing all the localized strings required by the component.
> Note that the string for `tokenLimitShowMore` should not contain the number of hidden tokens
> because it will be added by the component automatically.

Type: 
```
MultiselectProps.I18nStrings {
  tokenLimitShowFewer?: string
  tokenLimitShowMore?: string
}
```


Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### invalid

> Overrides the invalidation state. Usually the invalid state
> comes from the parent `FormField` / `awsui-form-field`
> component, however sometimes you need to override its
> state when you have more than one input within a
> single form field.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### keepOpen

> Determines whether the dropdown list stays open after the user selects an item.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### loadingText

> Specifies the text to display when in the loading state.

Type: String

Required: No


### name

> Deprecated, has no effect.

Type: String

Required: No


### options

> Specifies an array of options that are displayed to the user as a dropdown list.
> The options can be grouped using `OptionGroup` objects.
> Note: Only one level of option nesting is supported.
> 
> If you want to use the built-in filtering capabilities of this component, provide
> a list of all valid options here and they will be automatically filtered based on the user's filtering input.
> 
> Alternatively, you can listen to the `onChange` or `onLoadItems` event and set new options
> on your own.
> 

Type: SelectProps.Options

Required: No


### placeholder

> Specifies the hint text that's displayed in the field when no option has been selected.

Type: String

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
> the selectedLabel property is defined.
> The highlighted option is provided, and its group (if groups
> are used and it differs from the group of the previously highlighted option).
> For more information, see the
> [accessibility guidelines](select.md?tabId=usage#accessibility-guidelines).
> 

Type: 
```
 (
  option: SelectProps.Option,
  group: SelectProps.OptionGroup
) => string
```


Required: No


### selectedAriaLabel

> Specifies the localized string that describes an option as being selected.
> This is required to provide a good screen reader experience. For more information, see the
> [accessibility guidelines](select.md?tabId=usage#accessibility-guidelines).

Type: String

Required: No


### selectedOptions

> Specifies the currently selected options.
> Provide an empty array to clear the selection.

Type: ReadonlyArray<MultiselectProps.Option>

Required: Yes


### statusType

> Specifies the current status of loading more options.
> * `pending` - Indicates that no request in progress, but more options may be loaded.
> * `loading` - Indicates that data fetching is in progress.
> * `finished` - Indicates that pagination has finished and no more requests are expected.
> * `error` - Indicates that an error occurred during fetch. You should use `recoveryText` to enable the user to recover.

Type: String

Valid values: `pending | loading | finished | error`

Required: No


### tokenLimit

> Specifies the maximum number of displayed tokens. If the property isn't set, all of the tokens are displayed.

Type: Number

Required: No


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

> Displayed when there are no options to display.
> This is only shown when `statusType` is set to `finished` or not set at all.




### noMatch

> Displayed for `filteringType="auto"` when there are no matches for the filtering.







## Events



### onBlur

> Called when input focus is removed from the UI control.

Cancelable: No



### onChange

> Called when the user selects or deselects an option.
> The event `detail` contains the current `selectedOptions`.

Detail type: 
```
MultiselectProps.MultiselectChangeDetail {
  selectedOptions: ReadonlyArray<MultiselectProps.Option>
}
```

Cancelable: No



### onFocus

> Called when input focus is set onto the UI control.

Cancelable: No



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






## Ref functions



### focus

> Sets focus on the element without opening the dropdown or showing a visual focus indicator.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
