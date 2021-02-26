# Tabs

Enables users to switch between diﬀerent categories of information in the same view.



## Properties



### activeTabId

> The `id` of the currently active tab.
> * If you don't set this property, the component activates the first tab and switches tabs automatically when a tab header is clicked (that is, uncontrolled behavior).
> * If you explicitly set this property, you must set define an `onChange` handler to update the property when a tab header is clicked (that is, controlled behavior).

Type: String

Required: No


### ariaLabel

> Provides an `aria-label` to the tab container.
> Don't use `ariaLabel` and `ariaLabelledby` at the same time.

Type: String

Required: No


### ariaLabelledby

> Sets the `aria-labelledby` property on the tab container.
> If there's a visible label element that you can reference, use this instead of `ariaLabel`.
> Don't use `ariaLabel` and `ariaLabelledby` at the same time.

Type: String

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### tabs

> Specifies the tabs to display. Each tab object has the following properties:
> - `id` (string) - The tab identifier. This value needs to be passed to the Tabs component as `activeTabId` to select this tab.
> - `label` (ReactNode) - Tab label shown in the UI.
> - `content` (ReactNode) - (Optional) Tab content to render in the container.
> - `disabled` (boolean) - (Optional) Specifies if this tab is disabled.
> - `href` (string) - (Optional) You can use this parameter to change the default `href` of the internal tab anchor. The
>    `click` event default behavior is prevented, unless the user clicks the tab with a key modifier (that is, CTRL,
>    ALT, SHIFT, META). This enables the user to open new browser tabs with an initially selected component tab,
>    if your application routing can handle such deep links. You can manually update routing on the current page
>    using the `activeTabHref` property of the `change` event's detail.
> 

Type: ReadonlyArray<TabsProps.Tab>

Required: Yes


### variant

> The possible visual variants of tabs are the following:
> * `default` - Use in any context.
> * `container` - A variant with borders, for use alongside other containers.

Type: String

Default: `"default"`

Valid values: `default | container`

Required: No







## Events



### onChange

> Called whenever the user selects a different tab.
> The event's `detail` contains the new `activeTabId`.

Detail type: 
```
TabsProps.ChangeDetail {
  activeTabHref?: string
  activeTabId: string
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
