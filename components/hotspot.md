# Hotspot

In hands-on tutorials, hotspots are invisible containers that mark the spots where hotspot icons should be placed. Hotspot icons are rendered by the annotation context and are used to open and close annotation popovers.



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### direction

> The direction that the annotation popover should open in.
> Change this property if in the default direction the annotation popover
> overlaps too much with other content on the page.

Type: String

Default: `"top"`

Valid values: `top | right | bottom | left`

Required: No


### hotspotId

> ID of this hotspot. Use this ID in your tutorial data to refer to this
> hotspot's location in your application. The ID must be unique
> throughout your whole application.

Type: String

Required: Yes


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### side

> On which side of the content the hotspot icon should be displayed.

Type: String

Default: `"right"`

Valid values: `left | right`

Required: No





## Slots



### children

> Content that should be wrapped by the hotspot icon. Optional.
> If you supply this property, the hotspot will wrap it in an element with
> `flex: 1`, in order to give the children the maximum available space. The
> hotspot icon will be placed floating next to the children. Use
> this if you are wrapping e.g. an input field that should use the full
> available width, or a button.
> 
> If you do not supply this property, the hotspot icon will behave as an inline
> element. Use this if you want to place the hotspot icon on a label, e.g. a
> checkbox's label.
> 









## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
