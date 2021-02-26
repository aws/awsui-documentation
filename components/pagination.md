# Pagination

Provides horizontal navigation between pages of a collection.



## Properties



### ariaLabels

> Adds aria-labels to the pagination buttons:
> * `previousPageLabel` (string) - Previous page button.
> * `pageLabel` (number => string) - Individual page button, this function is called for every page number that's rendered.
> * `nextPageLabel` (string) - Next page button
> Example:
> ```
> {
>   nextPageLabel: 'Next page',
>   previousPageLabel: 'Previous page',
>   pageLabel: pageNumber => `Page ${pageNumber}`
> }
> ```
> 

Type: 
```
PaginationProps.Labels {
  nextPageLabel?: string
  pageLabel?: (pageNumber: number) => string
  previousPageLabel?: string
}
```


Required: No


### currentPageIndex

> Index of the current page. The first page has an index of 1.

Type: Number

Required: Yes


### disabled

> If set to `true`, the pagination links will be disabled. Use it, for example, if you want to prevent the user
> from changing page before items are loaded.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### openEnd

> Sets the pagination variant. It can be either default (when setting it to `false`) or open ended (when setting it
> to `true`). Default pagination navigates you through the items list. The open-end variant enables you
> to lazy-load your items because it always displays three dots before the next page icon. The next page button is
> never disabled. When the user clicks on it but there are no more items to show, the
> `onNextPageClick` handler is called with `requestedPageAvailable: false` in the event detail.

Type: Boolean

Default: `false`

Valid values: `true | false`

Required: No


### pagesCount

> Sets the total number of pages. Only positive integers are allowed.

Type: Number

Required: Yes







## Events



### onChange

> Called when a user interaction causes a pagination change. The event `detail` contains the new `currentPageIndex`.

Detail type: 
```
PaginationProps.ChangeDetail {
  currentPageIndex: number
}
```

Cancelable: No



### onNextPageClick

> Called when the next page arrow is clicked. The event `detail` contains the following:
> * `requestedPageAvailable` (boolean) - Indicates whether the requested page is available for display.
>   The value can be `false` when the `openEnd` property is set to `true`.
> * `requestedPageIndex` (integer) - The index of the requested page.

Detail type: 
```
PaginationProps.PageClickDetail {
  requestedPageAvailable: boolean
  requestedPageIndex: number
}
```

Cancelable: No



### onPreviousPageClick

> Called when the previous page arrow is clicked. The event `detail` contains the following:
> * `requestedPageAvailable` (boolean) - Always set to `true`.
> * `requestedPageIndex` (integer) - The index of the requested page.

Detail type: 
```
PaginationProps.PageClickDetail {
  requestedPageAvailable: boolean
  requestedPageIndex: number
}
```

Cancelable: No






## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.
