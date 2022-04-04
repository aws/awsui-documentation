# Code editor (CodeEditor)

Enables users to write and edit code.



## Properties



### ace

> The ace object.

Type: Any

Required: Yes


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


### i18nStrings

> An object containing all the necessary localized strings required by the component.
> The object should contain, among others:
> * `loadingState` - Specifies the text to display while the component is loading.
> * `errorState` - Specifies the text to display if there is an error loading Ace.
> * `errorStateRecovery`: Specifies the text for the recovery button that's displayed next to the error text.
>    Use the `recoveryClick` event to do a recovery action (for example, retrying the request).
> 

Type: 
```
CodeEditorProps.I18nStrings {
  cursorPosition: (
    row: number,
    column: number
  ) => string
  editorGroupAriaLabel: string
  errorState: string
  errorStateRecovery: string
  errorsTab: string
  loadingState: string
  paneCloseButtonAriaLabel: string
  preferencesButtonAriaLabel: string
  preferencesModalCancel: string
  preferencesModalConfirm: string
  preferencesModalDarkThemes: string
  preferencesModalHeader: string
  preferencesModalLightThemes: string
  preferencesModalTheme: string
  preferencesModalWrapLines: string
  statusBarGroupAriaLabel: string
  warningsTab: string
}
```


Required: Yes


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### language

> Specifies the programming language. You can use any of the programming languages supported by the `ace` object that you provide.

Type: CodeEditorProps.Language

Required: Yes


### loading

> Renders the code editor in a loading state.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### preferences

> Specifies the component preferences.
> If set to `undefined`, the component uses the following default value:
> 
> ```
> {
>   wrapLines: true,
>   theme: 'dawn'
> }
> ```
> 
> You can use any theme provided by Ace.
> 

Type: Partial<CodeEditorProps.Preferences>

Required: No


### value

> Specifies the content that's displayed in the code editor.

Type: String

Required: Yes







## Events



### onChange

> An event handler called when the value changes.
> The event `detail` contains the current value of the code editor content.
> **Deprecated**, replaced by `onDelayedChange`.

Detail type: 
```
CodeEditorProps.ChangeDetail {
  value: string
}
```

Cancelable: No



### onDelayedChange

> An event handler called when the value changes.
> The event `detail` contains the current value of the code editor content.
> A user interaction can cause multiple change events to be emitted by the Ace editor. They are batched together into a single `onDelayedChange` event to avoid bugs when controlling the `value` field.

Detail type: 
```
CodeEditorProps.ChangeDetail {
  value: string
}
```

Cancelable: No



### onPreferencesChange

> Called when any of the preferences change.
> The event `detail` contains the value of all the preferences as submitted by the user.

Detail type: 
```
CodeEditorProps.Preferences {
  theme: CodeEditorProps.Theme
  wrapLines: boolean
}
```

Cancelable: No



### onRecoveryClick

> Called when the user clicks the recovery button in the error state.
> Use this to retry loading the code editor or to provide another option for the user to recover from the error.

Detail type: 
```
Void
```

Cancelable: No



### onValidate

> Annotations returned from Ace syntax checker after code validation.

Detail type: 
```
CodeEditorProps.ValidateDetail {
  annotations: Array<Annotation>
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
