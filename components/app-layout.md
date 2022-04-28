# App layout (AppLayout)

Provides the basic layout for all types of pages, including collapsible side navigation, tools panel and split panel.



## Properties



### ariaLabels

> Aria labels for the drawer operating buttons. Use this property to ensure accessibility.
> * `navigation` (string) - Label for the landmark that wraps the navigation drawer.
> * `navigationClose` (string) - Label for the button that closes the navigation drawer.
> * `navigationToggle` (string) - Label for the button that opens the navigation drawer.
> * `notification` (string) - Label for the region that contains notification messages.
> * `tools` (string) - Label for the landmark that wraps the tools drawer.
> * `toolsClose` (string) - Label for the button that closes the tools drawer.
> * `toolsToggle` (string) - Label for the button that opens the tools drawer.
> 
> Example:
> ```
> {
>   navigation: "Navigation drawer",
>   navigationClose: "Close navigation drawer",
>   navigationToggle: "Open navigation drawer",
>   notifications: "Notifications",
>   tools: "Help panel",
>   toolsClose: "Close help panel",
>   toolsToggle: "Open help panel"
> }
> ```
> 

Type: 
```
AppLayoutProps.Labels {
  navigation?: string
  navigationClose?: string
  navigationToggle?: string
  notifications?: string
  tools?: string
  toolsClose?: string
  toolsToggle?: string
}
```


Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### contentType

> Determines the default behavior of the component. Based on the content type,
> the width of the content slot and the initial state of the navigation panel (that is, open or closed) have different values.
> | `contentType` | Navigation | Max content width |
> |---|---|---|
> | `default` | Open | - |
> | `cards` | Open | - |
> | `table` | Open | - |
> | `form` | Closed | 800px |
> | `wizard` | Closed | 1080px |
> 
> If you have a property `navigationOpen` or `maxContentWidth` explicitly set, it will take precedence
> over the default coming from the content type.
> 

Type: String

Default: `'default'`

Valid values: `default | form | table | cards | wizard`

Required: No


### disableBodyScroll

> Activates a backwards-compatibility mode for applications with non-fixed headers and footers.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### disableContentHeaderOverlap

> Disables overlap between `contentHeader` and `content` slots.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### disableContentPaddings

> If `true`, disables outer paddings for the content slot.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### footerSelector

> CSS selector for the application footer.

Type: String

Default: `'#b #f'`

Required: No


### headerSelector

> CSS selector for the application header.

Type: String

Default: `'#b #h'`

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### maxContentWidth

> Maximum main content panel width in pixels.

Type: Number

Required: No


### minContentWidth

> Minimum main content panel width in pixels.

Type: Number

Required: No


### navigationHide

> If `true`, the navigation drawer is not displayed at all.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### navigationOpen

> State of the navigation drawer.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### navigationWidth

> Navigation drawer width in pixels.

Type: Number

Required: No


### splitPanelOpen

> State of the split panel.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### splitPanelPreferences

> Controls the split panel preferences.
> By default, the preference is `{ position: 'bottom' }`
> 

Type: 
```
AppLayoutProps.SplitPanelPreferences {
  position: "bottom" | "side"
}
```


Required: No


### splitPanelSize

> The size of the split panel in pixels.

Type: Number

Required: No


### stickyNotifications

> If true, the notification slot is rendered above the scrollable
> content area so it is always visible.
> Note that sticky notifications are not supported in Internet Explorer.
> 

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### toolsHide

> If `true`, the tools drawer is not displayed at all.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### toolsOpen

> State of the tools drawer.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### toolsWidth

> Tools drawer width in pixels.

Type: Number

Required: No





## Slots



### breadcrumbs

> Use this slot to add the [breadcrumb group component](breadcrumb-group.md) to the app layout.




### content

> Main content.




### contentHeader

> Top area of the page content.




### navigation

> Navigation drawer.




### notifications

> Displayed on top of the main content in the scrollable area,
> it occupies the full width and is not affected by the padding that is added to the content slot.
> Conceived to contain notifications (flash messages).




### splitPanel

> Use this slot to add the [split panel component](split-panel.md) to the app layout.




### tools

> Tools drawer.







## Events



### onNavigationChange

> Fired when the navigation drawer is toggled.

Detail type: 
```
AppLayoutProps.ChangeDetail {
  open: boolean
}
```

Cancelable: No



### onSplitPanelPreferencesChange

> Fired when the split panel preferences change.

Detail type: 
```
AppLayoutProps.SplitPanelPreferences {
  position: "bottom" | "side"
}
```

Cancelable: No



### onSplitPanelResize

> Fired when the split panel is resized.

Detail type: 
```
AppLayoutProps.SplitPanelResizeDetail {
  size: number
}
```

Cancelable: No



### onSplitPanelToggle

> Fired when the split panel is toggled.

Detail type: 
```
AppLayoutProps.ChangeDetail {
  open: boolean
}
```

Cancelable: No



### onToolsChange

> Fired when the tools drawer is toggled.

Detail type: 
```
AppLayoutProps.ChangeDetail {
  open: boolean
}
```

Cancelable: No






## Ref functions



### closeNavigationIfNecessary

> Manually closes the navigation drawer if it is necessary for the current
> viewport size.



### openTools

> Opens the tools panel if it is not already open. Note that it is preferable
> to control the state by listening to `toolsChange` and providing `toolsOpen`.




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
