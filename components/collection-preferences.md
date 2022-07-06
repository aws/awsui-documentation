# Collection preferences (CollectionPreferences)

With collection preferences, users can manage their display preferences within a collection.



## Properties



### cancelLabel

> Label of the cancel button in the modal footer.

Type: String

Required: Yes


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### confirmLabel

> Label of the confirm button in the modal footer.

Type: String

Required: Yes


### customPreference

> Configures custom preferences. The function receives two parameters:
> - `customValue` (CustomPreferenceType) - Current value for your custom preference. It is initialized using the value you provide in `preferences.custom`.
> - `setCustomValue` - A function that is called to notify a state update.
> 
> It should return the content of your custom preference, for example:
> ```
> (customValue, setCustomValue) => (
>   <Checkbox checked={customValue} onChange={({ detail }) => setCustomValue(detail.checked)} />
> )
> ```
> 
> When the user confirms the changes, the new value is passed in the `detail.custom` property of the `onConfirm` listener.
> When the user cancels the changes, the `customValue` is reset to the one present in `preferences.custom` property.
> 
> **Display**
> - If any of the built-in preferences (`pageSizePreference`, `wrapLinesPreference`, or `visibleContentPreference`) are displayed,
> the custom content is displayed at the bottom of the left column within the modal.
> - If no built-in preference is displayed, the custom content occupies the whole modal.
> 

Type: (customValue: CustomPreferenceType, setCustomValue: React.Dispatch<CustomPreferenceType>) => React.ReactNode

Required: No


### disabled

> Determines whether the preferences trigger button is disabled.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### pageSizePreference

> Configures the built-in "page size selection" preference.
> If you set it, the component displays this preference in the modal.
> 
> It contains the following:
> - `title` (string) - Specifies the text displayed at the top of the preference.
> - `options` - Specifies an array of options for page size selection. Each entry contains:
>   - `value` (number) - The value for the radio button (that is, the number of items per page).
>   - `label` (string) - A label for the radio button (for example, "10 resources").
> 
> You must set the current value in the `preferences.pageSize` property.
> 

Type: 
```
CollectionPreferencesProps.PageSizePreference {
  options: ReadonlyArray<CollectionPreferencesProps.PageSizeOption>
  title: string
}
```


Required: No


### preferences

> Specifies the current preference values. This includes both built-in and custom preferences.
> It contains the following:
> - `pageSize` (number) - (Optional)
> - `wrapLines` (boolean) - (Optional)
> - `visibleContent` (ReadonlyArray<string>) - Specifies the list of visible content `id`s. The order of the `id`s does not influence the display.
> - `custom` (CustomPreferenceType) - Specifies the value for your custom preference.
> 

Type: 
```
CollectionPreferencesProps.Preferences {
  custom?: CollectionPreferencesProps.Preferences.CustomPreferenceType
  pageSize?: number
  visibleContent?: ReadonlyArray<string>
  wrapLines?: false | true
}
```


Required: No


### title

> Specifies the title of the preferences modal dialog. It is also used as an `aria-label` for the trigger button.

Type: String

Required: Yes


### visibleContentPreference

> Configures the built-in "visible content selection" preference (for example, visible columns in a table).
> If you set it, the component displays this preference in the modal.
> 
> It contains the following:
> - `title` (string) - Specifies the text displayed at the top of the preference.
> - `options` - Specifies an array of groups of options for visible content selection.
> 
> Each group of options contains the following:
> - `label` (string) - The text to display as a title for the options group.
> - `options` - Specifies an aray of options in the group. Each option contains the following:
>   - `id` (string) - Corresponds to a column `id` for tables or to a section `id` for cards.
>   - `label` (string) - Specifies a short description of the content.
>   - `editable` (boolean) - (Optional) Determines whether the user is able to toggle its visibility. This is `true` by default.
> 
> You must set the current list of visible content `id`s in the `preferences.visibleContent` property.
> 

Type: 
```
CollectionPreferencesProps.VisibleContentPreference {
  options: ReadonlyArray<CollectionPreferencesProps.VisibleContentOptionsGroup>
  title: string
}
```


Required: No


### wrapLinesPreference

> Configures the built-in "wrap lines" preference.
> If you set it, the component displays this preference in the modal.
> 
> It contains the following:
> - `label` (string) - Specifies the label for the option checkbox.
> - `description` (string) - Specifies the text displayed below the checkbox label.
> 
> You must set the current value in the `preferences.wrapLines` property.
> 

Type: 
```
CollectionPreferencesProps.WrapLinesPreference {
  description: string
  label: string
}
```


Required: No







## Events



### onCancel

> Called when the user cancels a preference change using the cancel button in the modal footer or by dismissing the modal.

Cancelable: No



### onConfirm

> Called when the user confirms a preference change using the confirm button in the modal footer.
> The event `detail` contains the following:
> - `pageSize` (number) - (Optional) The selected page size value. Available only if you specify the `pageSizePreference` property.
> - `wrapLines` (boolean) - (Optional) The current line wrapping preference value. Available only if you specify the `wrapLinesPreference` property.
> - `visibleContent` (ReadonlyArray<string>) - (Optional) The list of selected content `id`s. Available only if you specify the `visibleContentPreference` property.
> - `custom` (CustomPreferenceType) - (Optional) The selected value for your custom preference.
> 
> The values for all configured preferences are present even if the user didn't change their values.
> 

Detail type: 
```
CollectionPreferencesProps.Preferences {
  custom?: CollectionPreferencesProps.Preferences.CustomPreferenceType
  pageSize?: number
  visibleContent?: ReadonlyArray<string>
  wrapLines?: false | true
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
