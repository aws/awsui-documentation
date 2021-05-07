# S3 resource selector (S3ResourceSelector)

S3 resource selector is a component that provides the ability to read objects from an S3 bucket, or write objects to an S3 bucket with a prefix.



## Properties



### bucketsIsItemDisabled

> Optionally overrides whether a bucket should be disabled for selection in the Buckets view or not.
> It has higher priority than `selectableItemsTypes`. Example: if `selectableItemsTypes` has `['buckets']` value and
> `bucketsIsItemDisabled` returns false for a bucket, then the bucket is disabled for selection.

Type: (item: S3ResourceSelectorProps.Bucket) => boolean

Required: No


### bucketsVisibleColumns

> Optionally overrides the set of visible columns in the Buckets view. Available columns: 'Name', 'CreationDate',
> and 'Region'.

Type: ReadonlyArray<string>

Default: `['Name', 'CreationDate']`

Required: No


### className

> Adds the specified classes to the root element of the component.

Type: String

Required: No


### fetchBuckets

> Specifies a function that returns all available buckets. The return type of the function should be a promise
> that resolves to a list of objects with the following properties:
> - `Name` (string) - Name of the bucket.
> - `CreationDate` (string) - (Optional) Creation date of the bucket.
> - `Region` (string) - (Optional) Region of the bucket.

Type: () => Promise<ReadonlyArray<S3ResourceSelectorProps.Bucket>>

Required: Yes


### fetchObjects

> Specifies a function that returns available objects and object prefixes for the given `bucketName` and `pathPrefix`.
> The return type of the function should be a promise that resolves to a list of objects with the following properties:
> - `Key` (string) - Name of the object or object prefix.
> - `LastModified` (string) - (Optional) Date when this object was last modified.
> - `Size` (number) - (Optional) Size of the object.
> - `IsFolder` (boolean) - (Optional)  Determines whether the entry is an object prefix (folder).

Type: (bucketName: string, pathPrefix: string) => Promise<ReadonlyArray<S3ResourceSelectorProps.Object>>

Required: Yes


### fetchVersions

> Specifies a function that returns available versions for the given `bucketName` and `pathPrefix`.
> The return type of the function should be a promise that resolves to a list of versions with the following properties:
> - `VersionId` (string) - Version ID of an object.
> - `LastModified` (string) - (Optional) Date when this object was last modified.
> - `Size` (number) - (Optional) Size of the object version.

Type: (bucketName: string, pathPrefix: string) => Promise<ReadonlyArray<S3ResourceSelectorProps.Version>>

Required: Yes


### i18nStrings

> An object containing all the necessary localized strings required by the component.

Type: 
```
S3ResourceSelectorProps.I18nStrings {
  clearFilterButtonText: string
  columnBucketCreationDate?: string
  columnBucketName: string
  columnBucketRegion?: string
  columnObjectKey: string
  columnObjectLastModified?: string
  columnObjectSize?: string
  columnVersionID: string
  columnVersionLastModified: string
  columnVersionSize?: string
  filteringCantFindMatch: string
  filteringCounterText: (count: number) => string
  filteringNoMatches: string
  inContextBrowseButton: string
  inContextInputPlaceholder: string
  inContextLoadingText: string
  inContextSelectPlaceholder: string
  inContextUriLabel: string
  inContextVersionSelectLabel: string
  inContextViewButton: string
  labelBreadcrumbs: string
  labelFiltering: (itemsType: string) => string
  labelModalDismiss: string
  labelNotSorted: SortingColumnContainingString
  labelRefresh: string
  labelSortedAscending: SortingColumnContainingString
  labelSortedDescending: SortingColumnContainingString
  labelsBucketsSelection: SelectionLabels<S3ResourceSelectorProps.Bucket>
  labelsObjectsSelection: SelectionLabels<S3ResourceSelectorProps.Object>
  labelsPagination: PaginationProps.Labels
  labelsVersionsSelection: SelectionLabels<S3ResourceSelectorProps.Version>
  modalBreadcrumbRootItem: string
  modalCancelButton: string
  modalSubmitButton: string
  modalTitle: string
  selectionBuckets: string
  selectionBucketsLoading: string
  selectionBucketsNoItems: string
  selectionBucketsSearchPlaceholder: string
  selectionObjects: string
  selectionObjectsLoading: string
  selectionObjectsNoItems: string
  selectionObjectsSearchPlaceholder: string
  selectionVersions: string
  selectionVersionsLoading: string
  selectionVersionsNoItems: string
  selectionVersionsSearchPlaceholder: string
  validationBucketLength: string
  validationBucketLowerCase: string
  validationBucketMustComplyDns: string
  validationBucketMustNotContain: string
  validationPathMustBegin: string
}
```


Required: No


### id

> Adds the specified ID to the root element of the component.

Type: String

Required: No


### inputAriaDescribedby

> Adds `aria-labelledby` to the S3 URI input. If you're using this component within a form field,
> you do not need to set this property, as the form field component will set it automatically.
> Use this property if the component isn't surrounded by a form field, or you want to override the value
> automatically set by the form field (for example, if you have two components within a single form field).
> 
> To use it correctly, define an ID for the element you want to use as label and set the property to that ID.
> 

Type: String

Required: No


### invalid

> Whether the S3 URI input field is in invalid state.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### objectsIsItemDisabled

> Optionally overrides whether an object should be disabled for selection in the Objects view or not. Similar to
> `bucketsIsItemDisabled` this property takes precedence over the `selectableItemsTypes` property.

Type: (item: S3ResourceSelectorProps.Object) => boolean

Required: No


### objectsVisibleColumns

> Optionally overrides the set of visible columns in the Objects view. Available columns: 'Key', 'LastModified',
> and 'Size'.

Type: ReadonlyArray<string>

Default: `['Key', 'LastModified', 'Size']`

Required: No


### resource

> The current selected resource. Resource has the following properties:
> - `uri` (string) - URI of the resource.
> - `versionId` (string) - (Optional) Version ID of the selected resource.

Type: 
```
S3ResourceSelectorProps.Resource {
  uri: string
  versionId?: string
}
```


Required: Yes


### selectableItemsTypes

> An array of the item types that are selectable in the table view. The array may contain the following items:
> 'buckets', 'objects', or 'versions'. Example: ['buckets', 'objects']. By default, no items are selectable.
> This property determines whether the component operates in Read mode or Write mode:
> * Read mode - When 'objects' and 'versions' values are provided (folder selection should be disabled by
> customizing `objectsIsItemDisabled` function).
> * Write mode - When 'buckets' and 'objects' values are provided (file selection should be disabled by
> customizing `objectsIsItemDisabled` function).

Type: ReadonlyArray<S3ResourceSelectorProps.SelectableItems>

Default: `[]`

Required: No


### versionsIsItemDisabled

> Optionally overrides whether a version should be disabled for selection in the Versions view or not. Similar to
> `bucketsIsItemDisabled` this property takes precedence over the `selectableItemsTypes` property.

Type: (item: S3ResourceSelectorProps.Version) => boolean

Required: No


### versionsVisibleColumns

> Optionally overrides the set of visible columns in the Versions view. Available columns: 'ID', 'CreationDate',
> and 'Size'.

Type: ReadonlyArray<string>

Default: `['ID', 'LastModified', 'Size']`

Required: No


### viewHref

> Href of the selected object that is applied to the View button.

Type: String

Required: No





## Slots



### alert

> Specifies additional information about component status.







## Events



### onChange

> Fired when the resource selection is changed. The event detail object contains resource that represents the full
> path of the selected resource and `errorText` that may contain a validation error.

Detail type: 
```
S3ResourceSelectorProps.ChangeDetail {
  errorText?: string
  resource: S3ResourceSelectorProps.Resource
}
```

Cancelable: No






## Ref functions



### focus

> Focuses the S3 URI input field




## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
