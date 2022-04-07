# React Simple Input

## Overview

Simple textInput element styled like material-ui.

No other dependencies but React.

![normal](https://user-images.githubusercontent.com/31322144/162106606-05b23857-a0a0-4e1c-bb7a-5356133c9c5a.gif)

![error](https://user-images.githubusercontent.com/31322144/162106621-81e0d892-4221-4a5a-81fd-7189f906e71a.gif)

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

## Props

| Name        | Type   | Description                         | Required | Default   |
| ----------- | ------ | ----------------------------------- | -------- | --------- |
| placeholder | string | Text used for label and placeholder | false    | ""        |
| error       | string | Error Message                       | false    | ""        |
| errorColor  | string | Text color for Error Message        | false    | "#e81e25" |

And take all other attributes in React.InputHtmlAttributes
