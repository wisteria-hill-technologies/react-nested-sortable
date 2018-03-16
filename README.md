# React-Sortablejs: Experiment for Nested Sortables

### Notes to remember:
- Make sure to set data-id
Otherwise, it will not work.

## Issue:
When sortable is nested, it works but throws the below error in the browser:
```
Sortable.js:1323 Uncaught TypeError: Cannot read property 'dispatchEvent' of null
    at _dispatchEvent (Sortable.js:1323)
    at Sortable._onDrop (Sortable.js:986)
    at Sortable.handleEvent (Sortable.js:1044)
_dispatchEvent @ Sortable.js:1323
_onDrop @ Sortable.js:986
handleEvent @ Sortable.js:1044
```