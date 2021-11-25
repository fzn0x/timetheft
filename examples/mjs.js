import theft from "../timetheft.mjs";

theft("60s", ({ years, months, weeks, days, hours, minutes, seconds }) => {
  // do whatever with years, months, weeks, days, hours, minutes, seconds
  // e.g just console.log it :smile:
  console.log(
    `Elapsed years: ${years}, months: ${months}, weeks: ${weeks}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
  );
});
