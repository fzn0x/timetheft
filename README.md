# Timetheft.js :alarm_clock:

> Timetheft - **simple and opinionated** library to handle countdown in Javascript, this library would run in opinionated way and steal your defined date with just a String! Or you can call it countdown normally :smile:

Supports both ESM and CJS in Node.js, also support for Browser (starts from timetheft 0.0.3).

## Installation

**Nodejs**: Install it using [npm](npmjs.com)

```sh
npm install timetheft
```

then, import it

#### CJS

```js
const theft = require("timetheft");
```

#### ESM

```js
import theft from "timetheft";
```

**Browser**: install it using [jsdelivr](https://cdn.jsdelivr.net) or similar platforms that handles online import for published npm library.

```html
<!-- unminified version -->
<script src="https://cdn.jsdelivr.net/npm/timetheft/lib/timetheft.js"></script>
<!-- minified version -->
<script src="https://cdn.jsdelivr.net/npm/timetheft/lib/timetheft.min.js"></script>
```

## Usage

**Simple** and **opinionated**, you wont confuse between hundreds date workarounds for countdown!

```js
// Execute countdown 60 seconds from now
theft(
  "60s",
  ({ years, months, weeks, days, hours, minutes, seconds, isFinish }) => {
    console.log(
      `Elapsed years: ${years}, months: ${months}, weeks: ${weeks}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
    );

    if (isFinish) {
      console.log("Done!");
    }
  }
);
```

## API

**theft()**

Parameters:

- **timeoutPattern**: string
  Pattern used for timeout.
  **Keys**:
  - s (second)
  - m (minute)
  - h (hour)
  - d (day)
  - w (week)
  - M (month)
  - y (year)\
    **Examples**: `60s` for 60 seconds.
- **callback**: function
  - **data**: {\
    **years**: number,\
    **months**: number,\
    **weeks**: number,\
    **days**: number,\
    **hours**: number,\
    **minutes**: number,\
    **seconds**: number,\
    **isFinish**: boolean\
    }

## License

**Timetheft.js** is using [MIT License](./LICENSE.md)
