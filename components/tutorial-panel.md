# Tutorial panel (TutorialPanel)

The tutorial panel houses contextual Hands-on tutorials that help users learn how to use a service. 



## Properties



### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### downloadUrl

> The link to a file documenting all tutorials (usually a PDF).

Type: String

Required: Yes


### i18nStrings

> An object containing all the necessary localized strings required by the component.

Type: 
```
TutorialPanelProps.I18nStrings {
  completionScreenTitle: string
  dismissTutorialButtonText: string
  feedbackLinkText: string
  labelExitTutorial: string
  labelLearnMoreExternalIcon: string
  labelTotalSteps: (
    totalStepCount: number
  ) => string
  labelsTaskStatus: unknown
  learnMoreLinkText: string
  loadingText: string
  restartTutorialButtonText: string
  startTutorialButtonText: string
  stepTitle: (
    stepIndex: number,
    stepTitle: string
  ) => string
  taskTitle: (
    taskIndex: number,
    taskTitle: string
  ) => string
  tutorialCompletedText: string
  tutorialListDescription: React.ReactNode
  tutorialListDownloadLinkText: string
  tutorialListTitle: string
}
```


Required: Yes


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### loading

> Whether the content of the panel is currently loading. If this property
> is set to `true`, the panel displays a spinner and the loadingText that is
> specified in the `i18nStrings` property.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### tutorials

> List of all available tutorials. An array of objects with the following properties:
> * `title` (string) - Name of the tutorial
> 
> * `description` (ReactNode) - Short description of the tutorial's content.
> 
> * `tasks` - Array of tasks (in intended order). Each Task has the following properties:
>   * `title` (string) - Name of this task. This is shown in the task list overview of the tutorial's detail view.
>   * `steps` - Array of steps in this task (in intended order). Each step has the following properties:
>     * `title` (string) - Title of this step. This is shown in the step list in the tutorial's detail view.
>     * `content` (ReactNode) - Content to be shown in the popover of this step. Can be JSX or plain text.
>     * `warningAlert` (ReactNode) - (Optional) If this field is present, a warning alert will be displayed
>        inside the step's popover, showing this field's content. Can be JSX or plain text.
>     * `hotspotId` (string) - ID of the hotspot that this tutorial step points to.
> 
>        A hotspot with this ID needs to be added manually to the code of the application and represents a location
>        in the application that a tutorial step can be attached to. It can be re-used by multiple tutorials. Hotspot
>        IDs need to be unique in the scope of the whole application that uses this tutorial.
> 
> * `completedScreenDescription` (ReactNode) - Description to be shown on the last page of the tutorial, when the
>    user has successfully completed the tutorial.
> 
> * `prerequisitesAlert` (ReactNode) - (Optional) If the application determines that the user cannot start the tutorial
>    yet (by specifying the property `prerequisitesNeeded` on the tutorial object), the content of `prerequisitesAlert`
>    will be shown in the tutorial list underneath the tutorial title.
> 
>    Example: `<><Link>Create a bucket first</Link> to complete this tutorial.</>`
> 
> * `prerequisitesNeeded` (boolean) - (Optional) If this property is set to `true`, the tutorial list will disable the
>   `Start tutorial` button for this tutorial, and it will show the contents of the tutorial's `prerequisitesAlert` field
>    in an alert underneath the tutorial title.
> 
> * `learnMoreUrl` (string | null) - (Optional) If present, the tutorial list will show a "Learn More" link pointing to
>    this URL underneath the tutorial's description.
> 
> * `completed` (boolean) - Whether the user has already completed this tutorial.
> 
>   If this property is set to `true`, the tutorial list will show a status indicator underneath the tutorial title with
>   a message that indicates that this tutorial has already been completed by the user (e.g. "Tutorial completed"), and
>   the "Start tutorial" button will be replaced by a "Restart tutorial" button.
> 

Type: ReadonlyArray<TutorialPanelProps.Tutorial>

Required: Yes







## Events



### onFeedbackClick

> Fired when the user clicks on the feedback link at the end of a tutorial.

Detail type: 
```
TutorialPanelProps.TutorialDetail {
  tutorial: TutorialPanelProps.Tutorial
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
