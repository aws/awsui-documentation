# Tag editor (TagEditor)

An extension of the attribute editor built with integrated logic. It enables users to create, edit, or delete resource tags.



## Properties



### allowedCharacterPattern

> Specifies a regular expression string that overrides the default acceptable
> character validation. You should use this property only when absolutely necessary.

Type: String

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### i18nStrings

> An object containing all the necessary localized strings required by the component.

Type: 
```
TagEditorProps.I18nStrings {
  addButton: string
  awsPrefixError: string
  duplicateKeyError: string
  emptyKeyError: string
  emptyTags: string
  enteredKeyLabel: (enteredText: string) => string
  enteredValueLabel: (
    enteredText: string
  ) => string
  invalidKeyError: string
  invalidValueError: string
  keyHeader: string
  keyPlaceholder: string
  keySuggestion: string
  keysSuggestionError: string
  keysSuggestionLoading: string
  loading: string
  maxKeyCharLengthError: string
  maxValueCharLengthError: string
  optional: string
  removeButton: string
  tagLimit: (availableTags: number) => string
  tagLimitExceeded: (tagLimit: number) => string
  tagLimitReached: (tagLimit: number) => string
  tooManyKeysSuggestion: string
  tooManyValuesSuggestion: string
  undoButton: string
  undoPrompt: string
  valueHeader: string
  valuePlaceholder: string
  valueSuggestion: string
  valuesSuggestionError: string
  valuesSuggestionLoading: string
}
```


Required: Yes


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### keysRequest

> Specifies a function that returns all the keys for a resource.
> The expected return type of the function should be a promise that
> resolves to a list of strings of all the keys (for example, `['key1', 'key2']`).

Type: (key: string) => Promise<ReadonlyArray<string>>

Required: No


### loading

> Renders the component in a loading state.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### tagLimit

> Specifies the maximum number of tags that a customer can add.

Type: Number

Required: No


### tags

> Specifies an array of tags that are displayed to the user. Each tag item has the following properties:
> - `key` (string) - The key of the tag that's displayed in the corresponding key field.
> - `value` (string) - The value of the tag that's displayed in the corresponding value field.
> - `existing` (boolean) - Specifies if this is an existing tag for the resource.
>      When set to `true`, if the tag is deleted its `markedForRemoval` property is to `true`.
>      When set to `false`, deletion of the tag removes the tag from the `tags` list.
> - `markedForRemoval` (boolean) - Specifies if this tag has been marked for removal.
>      This property is set to `true` by the component when a user removes an existing tag.
>      The item will remain in the `tags` list. When set to `true`, the user is presented with the option to undo the removal operation.
> - `valueSuggestionOptions` (Array<AutosuggestProps.Option>) - An array of autosuggest suggestion options associated with the specified tag key.

Type: ReadonlyArray<TagEditorProps.Tag>

Required: No


### valuesRequest

> Specifies a function that returns all the values for a specified key
> of a resource. The expected return type of the function should be a promise
> that resolves to a list of strings of all the values (for example, `['value1', 'value2']`).
> You should return a rejected promise when the `key` parameter is an empty string.
> 

Type: (key: string, value: string) => Promise<ReadonlyArray<string>>

Required: No







## Events



### onChange

> Called when any tag operation occurs.
> The event `detail` object contains the full updated state of `tags`,
> and whether the component is in a `valid` state.

Detail type: 
```
TagEditorProps.ChangeDetail {
  tags: ReadonlyArray<TagEditorProps.Tag>
  valid: boolean
}
```

Cancelable: No






## Ref functions



### focus

> Focuses the first error within the component.
> If no error is present, no element is focused.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
