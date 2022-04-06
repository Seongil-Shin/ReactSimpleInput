# React Simple Input

## Overview
Simple textInput element styled like material-ui.

No other dependencies but React.





## Example
```
import ReactSimpleInput from "react-simple-material-input";
...

<ReactSimpleInput
	placeholder="Label"
	error={error}
	errorColor="#e81e25"
>
```

![normal](../assets/img/React Simple Input/162012874-ff77b994-8a8d-48f9-b92b-cdc8ef4380d4.gif)

![error](../assets/img/React Simple Input/162014302-d81ada31-ec93-4425-a654-4d28b172f5d4.gif)



## Props

| Name        | Type   | Description                         | Required | Default   |
| ----------- | ------ | ----------------------------------- | -------- | --------- |
| placeholder | string | Text used for label and placeholder | false    | ""        |
| error       | string | Error Message                       | false    | ""        |
| errorColor  | string | Text color for Error Message        | false    | "#e81e25" |

And take all other attributes in React.InputHtmlAttributes



