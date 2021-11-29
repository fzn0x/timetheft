const theft = require("../index.js");

theft(
  "60s",
  ({ years, months, weeks, days, hours, minutes, seconds, isFinish }) => {
    // do whatever with years, months, weeks, days, hours, minutes, seconds
    // e.g just console.log it :smile:
    console.log(
      `Elapsed years: ${years}, months: ${months}, weeks: ${weeks}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
    );

    if (isFinish) {
      console.log("Done!");
    }
  }
);
