# Timetheft.js :alarm_clock:

> Timetheft - **simple and opinionated** library to handle countdown in Javascript, this library would run in opinionated way and steal your defined date with just a String! Or you can call it countdown normally :smile:

**Simple and opinionated** library to handle countdown in Javascript, supports both ESM and CJS.

## Installation

Nodejs: Install it using [npm](npmjs.com)

```sh
npm install timetheft
```

then, just import it

```js
// CJS
const theft = require("timetheft");

// or ESM
import theft from "timetheft";
```

Browser: install it using [jsdelivr](https://cdn.jsdelivr.net) or similar platforms that handles online import for published npm library.

```html
<!-- unminified version -->
<script src="https://cdn.jsdelivr.net/npm/timetheft/index.js"></script>
<!-- TODO: minified version -->
```

## Usage

**Simple** and **opinionated** (s, m, h, d, w, M, y: **wont** dizzy your head with uppercase and smallcase format of Javascript date suffix), so, you wont confuse between hundreds date workarounds for countdown!

```js
// Second :
// Execute countdown 60 seconds from now
theft("60s", ({ years, months, weeks, days, hours, minutes, seconds }) => {
  // do whatever with years, months, weeks, days, hours, minutes, seconds
  // e.g just console.log it :smile:
  console.log(
    `Elapsed years: ${years}, months: ${months}, weeks: ${weeks}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
  );
});

// Minute :
// Execute countdown 1 minute from now
theft("1m", ({ years, months, weeks, days, hours, minutes, seconds }) => {
  // do whatever with years, months, weeks, days, hours, minutes, seconds
  // e.g just console.log it :smile:
  console.log(
    `Elapsed years: ${years}, months: ${months}, weeks: ${weeks}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
  );
});

// Hour :
// Execute countdown 1 hour from now
theft("1h", ({ years, months, weeks, days, hours, minutes, seconds }) => {
  // do whatever with years, months, weeks, days, hours, minutes, seconds
  // e.g just console.log it :smile:
  console.log(
    `Elapsed years: ${years}, months: ${months}, weeks: ${weeks}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
  );
});

// Day :
// Execute countdown 1 day from now
theft("1d", ({ years, months, weeks, days, hours, minutes, seconds }) => {
  // do whatever with years, months, weeks, days, hours, minutes, seconds
  // e.g just console.log it :smile:
  console.log(
    `Elapsed years: ${years}, months: ${months}, weeks: ${weeks}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
  );
});

// Week :
// Execute countdown 1 week from now
theft("1w", ({ years, months, weeks, days, hours, minutes, seconds }) => {
  // do whatever with years, months, weeks, days, hours, minutes, seconds
  // e.g just console.log it :smile:
  console.log(
    `Elapsed years: ${years}, months: ${months}, weeks: ${weeks}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
  );
});

// Month :
// Execute countdown 1 month from now
theft("1M", ({ years, months, weeks, days, hours, minutes, seconds }) => {
  // do whatever with years, months, weeks, days, hours, minutes, seconds
  // e.g just console.log it :smile:
  console.log(
    `Elapsed years: ${years}, months: ${months}, weeks: ${weeks}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
  );
});

// Year :
// Execute countdown 1 year from now
theft("1y", ({ years, months, weeks, days, hours, minutes, seconds }) => {
  // do whatever with years, months, weeks, days, hours, minutes, seconds
  // e.g just console.log it :smile:
  console.log(
    `Elapsed years: ${years}, months: ${months}, weeks: ${weeks}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
  );
});
```

## License

**Timetheft.js** is using [MIT License](./LICENSE.md)
