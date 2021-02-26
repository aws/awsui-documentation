# Code editor (CodeEditor)

Enables users to write and edit code.



## Properties



### ace

> The ace object.

Type: Any

Required: Yes


### className

> Adds the specified classes to the root element of the component.

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
> }```
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

> Called when the value changes.
> The event `detail` contains the current value of the code editor content.

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
