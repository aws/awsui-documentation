# Property filter (PropertyFilter)

A property filter lets users find specific items in a collection of resources by using properties, property values, typing free text, and combining these with operators.



## Properties



### asyncProperties

> Set `asyncProperties` if you need to load `filteringProperties` asynchronousely. This would cause extra `onLoadMore`
> events to fire calling for more properties.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### countText

> Accepts a human-readable, localized string that indicates the number of results. For example, "1 match" or "165 matches."
> If the total number of results is unknown, also include an indication that there may be more results than
> the number listed. For example, "25+ matches."
> The count text is only displayed when `query.tokens` isn't empty.
> 

Type: String

Required: No


### customGroupsText

> An array of objects that contain localized, human-readable strings for the labels of custom groups within the filtering dropdown. Use group property to associate the strings with your custom group of options. Define the following values for each group:
> * properties [string]: The group label in the filtering dropdown that contains the list of properties from this group. For example: Tags.
> * values [string]: The group label in the filtering dropdown that contains the list of values from this group. For example: Tags values.
> * group [string]: The identifier of a custom group.
> 

Type: Array<PropertyFilterProps.GroupText>

Required: No


### disableFreeTextFiltering

> Set `disableFreeTextFiltering` only if you can’t filter the dataset using a filter that is applied to every column,
> instead of a specific property. This would stop the user from creating such tokens.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### disabled

> If set to `true`, the filtering input will be disabled.
> Use it, for example, if you are fetching new items upon filtering change
> in order to prevent the user from changing the filtering query.

Type: Boolean

Default: `false`

Valid values: `true | false`

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


### filteringErrorText

> Specifies the text to display when a data fetching error occurs. Make sure that you provide `recoveryText`.

Type: String

Required: No


### filteringFinishedText

> Specifies the text to display at the bottom of the dropdown menu after pagination has reached the end.

Type: String

Required: No


### filteringLoadingText

> Specifies the text to display when in the loading state.

Type: String

Required: No


### filteringOptions

> An array of possible values of the individual `filteringProperties`. Each element has the following properties:
> * `propertyKey` [string]: The key of the corresponding filtering property in the `filteringProperties` array.
> * `value` [string]: The value that will be used as a suggestion when creating or modifying a filtering token.
> 

Type: ReadonlyArray<PropertyFilterProps.FilteringOption>

Required: No


### filteringProperties

> An array of properties by which the data set can be filtered. Each element has the following properties:
> * groupValuesLabel [string]: Localized string to display for the 'Values' group label for a specific property.
> * key [string]: The identifier of this property.
> * propertyLabel [string]: A human-readable string for the property.
> * operators [Array]: A list of all operators supported by this property. Equals operator should always be supported, even if you omit it in the list.
> * group [string]: Optional identifier of a custom group that this filtering option is assigned to. Use to create additional groups below the default one. Make sure to also define labels for the group in the customGroupsText property. Notice that only one level of options nesting is supported.
> * defaultOperator [ComparisonOperator]: Optional parameter that changes the default operator used with this filtering property. Use it only if your API does not support "equals" filtering terms with this property.
> 

Type: ReadonlyArray<PropertyFilterProps.FilteringProperty>

Required: Yes


### filteringRecoveryText

> Specifies the text for the recovery button. The text is displayed next to the error text.
> Use the `onLoadItems` event to perform a recovery action (for example, retrying the request).

Type: String

Required: No


### filteringStatusType

> Specifies the current status of loading more options.
> * `pending` - Indicates that no request in progress, but more options may be loaded.
> * `loading` - Indicates that data fetching is in progress.
> * `finished` - Indicates that pagination has finished and no more requests are expected.
> * `error` - Indicates that an error occurred during fetch. You should use `recoveryText` to enable the user to recover.

Type: String

Valid values: `pending | loading | finished | error`

Required: No


### hideOperations

> If hideOperations it set, the indicator of the operation (that is, `and` or `or`) and the selection of operations
> (applied to the property and value token) are hidden from the user. Only use when you have a custom
> filtering logic which combines tokens in different way than the default one. When used, ensure that
> operations are communicated to the user in another way.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### i18nStrings

> An object containing all the necessary localized strings required by the component.

Type: 
```
PropertyFilterProps.I18nStrings {
  allPropertiesLabel: string
  applyActionText: string
  cancelActionText: string
  clearFiltersText: string
  dismissAriaLabel: string
  editTokenHeader: string
  enteredTextLabel: AutosuggestProps.EnteredTextLabel
  filteringAriaLabel: string
  filteringPlaceholder?: string
  groupPropertiesText: string
  groupValuesText: string
  operationAndText: string
  operationOrText: string
  operatorContainsText: string
  operatorDoesNotContainText: string
  operatorDoesNotEqualText: string
  operatorEqualsText: string
  operatorGreaterOrEqualText: string
  operatorGreaterText: string
  operatorLessOrEqualText: string
  operatorLessText: string
  operatorText: string
  operatorsText: string
  propertyText: string
  removeTokenButtonAriaLabel: (
    token: PropertyFilterProps.Token
  ) => string
  tokenLimitShowFewer?: string
  tokenLimitShowMore?: string
  valueText: string
}
```


Required: Yes


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### query

> An object representing the current query displayed in the property filter. Has two properties: `tokens` and `operation`.
> `tokens` is an array of objects that will be displayed to the user beneath the filtering input.
> Each token has the following properties:
> * value [string]: The string value of the token to be used as a filter.
> * propertyKey [string]: The key of the corresponding property in filteringProperties.
> * operator ['<' | '<=' | '>' | '>=' | ':' | '!:' | '=' | '!=']: The operator which indicates how to filter the dataset using this token.
> 
> `operation` has two valid values [and, or] and controls the join operation to be applied between tokens when filtering the items.
> 

Type: 
```
PropertyFilterProps.Query {
  operation: PropertyFilterProps.JoinOperation
  tokens: typeOperator
}
```


Required: Yes


### tokenLimit

> Specifies the maximum number of displayed tokens. If the property isn't set, all of the tokens are displayed.

Type: Number

Required: No


### virtualScroll

> If you have more than 500 `filteringOptions`, enable this flag to apply a performance optimization that makes
> the filtering experience smoother. We don't recommend enabling the feature if you have less than 500 options,
> because the improvements to performance are offset by a visible scrolling lag. When you set this flag to true,
> it removes options that are not currently in view from the DOM.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No





## Slots



### customControl

> A slot located before the filtering input. Use it if for a Select component if your dataset supports property
> filter queries only after an initial filter is applied.




### filteringEmpty

> Displayed when there are no options to display.
> This is only shown when `statusType` is set to `finished` or not set at all.







## Events



### onChange

> Fired when the `query` gets changed. Filter the dataset in response to this event using the values in the `detail` object.

Detail type: 
```
PropertyFilterProps.Query {
  operation: PropertyFilterProps.JoinOperation
  tokens: typeOperator
}
```

Cancelable: No



### onLoadItems

> Use this event to asynchronously load filteringOptions, component currently needs.  The detail object contains following properties:
> * `filteringProperty` - The property for which you need to fetch the options.
> * `filteringOperator` - The operator for which you need to fetch the options.
> * `filteringText` - The value that you need to use to fetch options.
> * `firstPage` - Indicates that you should fetch the first page of options for a `filteringProperty` that match the `filteringText`.
> * `samePage` - Indicates that you should fetch the same page that you have previously fetched (for example, when the user clicks on the recovery button).
> 

Detail type: 
```
PropertyFilterProps.LoadItemsDetail {
  filteringOperator?: PropertyFilterProps.ComparisonOperator
  filteringProperty?: PropertyFilterProps.FilteringProperty
  filteringText: string
  firstPage: boolean
  samePage: boolean
}
```

Cancelable: No






## Ref functions



### focus

> Sets focus on the underlying input control.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
