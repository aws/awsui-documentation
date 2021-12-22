# Annotation context (AnnotationContext)

The annotation context is an invisible layer on top of the interface. It tracks the progress of a launched tutorial and feeds dynamic content to the Tutorial panel in Hands-on tutorials. It also renders annotation popovers and hotspot icons.  



## Properties



### currentTutorial

> The currently launched tutorial. This should be the object received
> in the `detail` property of the `onStartTutorial` event.

Type: AnnotationContextProps.Tutorial | null

Required: Yes


### i18nStrings

> An object containing all the necessary localized strings required by
> the component.

Type: 
```
AnnotationContextProps.I18nStrings {
  finishButtonText: string
  labelDismissAnnotation: string
  labelHotspot: (openState: boolean) => string
  nextButtonText: string
  previousButtonText: string
  stepCounterText: (
    stepIndex: number,
    totalStepCount: number
  ) => string
  taskTitle: (
    taskIndex: number,
    taskTitle: string
  ) => string
}
```


Required: Yes





## Slots



### children

> Put all page content inside this component's children. This component
> will provide a context which is used by the Hotspot elements throughout
> the page.







## Events



### onExitTutorial

> Fired when the user exits the current tutorial.

Detail type: 
```
TutorialPanelProps.TutorialDetail {
  tutorial: TutorialPanelProps.Tutorial
}
```

Cancelable: No



### onFinish

> Fired when the user clicks the "Finish" button on the last step of
> the tutorial.

Detail type: 
```
Void
```

Cancelable: No



### onStartTutorial

> Fired when the user selects a tutorial from the list.

Detail type: 
```
TutorialPanelProps.TutorialDetail {
  tutorial: TutorialPanelProps.Tutorial
}
```

Cancelable: No



### onStepChange

> This event is fired when a user clicks the "Next" or "Previous"
> button on a popover, when the user clicks on a closed hotspot icon,
> or when the AnnotationOverlay determines that the current hotspot
> has disappeared from the page and a different one should be
> selected (e.g. when navigating between pages).
> Use the `reason` property of the event detail to determine why
> this event was fired.
> 

Detail type: 
```
AnnotationContextProps.StepChangeDetail {
  reason:
    | "auto-fallback"
    | "next"
    | "open"
    | "previous"
  step: number
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
