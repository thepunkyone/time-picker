# React Time Picker Component

This Time Picker component uses a split hour (24 hour) / minute (5 minute increments) menu to select the required time of the day.

It takes two required props: a `dateTime` prop of date in `ISO8601` string format and an `onChange` prop which is called with the updated time in `ISO8601` string format whenever hours or minutes are updated. It also takes an optional `className` prop.

If not interacted with, the picker component displays a placeholder label `HH:MM`, once interacted with it displays a label with the selected hours and minutes, for example `23:05`.

In order to prevent invalid date-time being created, selecting an hour for the first time will set minutes to `"00"` and selecting minutes for the first time will set the hour to `"00"`.

TimePicker props:
```
{
  className?: string
  dateTime: string, date in ISO8601 format (i.e. '2023-05-09T00:00:00+01:00')
  onChange: (date: date in ISO8601 format) => void
}
```

TimePicker implementation:
```jsx
// ...
import dayjs from "dayjs";

import TimePicker from "@/components/TimePicker";

const MyComponent = () => {
  const [dateTime, setDateTime] = useState(() => dayjs().format());

  const handleTimeChange = (updatedDateTime) => {
    setDateTime(updatedDateTime);
  };
  
  return (
    <TimePicker
      dateTime={dateTime}
      onChange={handleTimeChange}
    />
  )
}
// ...
```


