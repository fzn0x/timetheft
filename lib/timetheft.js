function timetheft(timeoutPattern, callback) {
  // 'label': 'in milliseconds'
  const convertToZeros = {
    s: "1000",
    m: "60000",
    h: "3600000",
    d: "86400000",
    w: "604800000",
    M: "2629800000",
    y: "31556952000",
  };

  const label = timeoutPattern.match(/[smhdwMy]/);
  const time = timeoutPattern.split(/[smhdwMy]/);
  const timeout = time[0] * convertToZeros[label] + 1000 * 2;

  const currentDate = new Date();

  let years = 0;
  let months = 0;
  let weeks = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  const x = setInterval(() => {
    const targetDate = new Date(currentDate.getTime() + Number(timeout));
    const now = new Date().getTime();
    const timeleft = targetDate - now;

    days = Math.floor(timeleft / (1000 * 24 * 60 * 60));

    weeks = Math.floor(days / 7);
    months = Math.floor(days / 30);
    years = Math.floor(days / 365);

    hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    if (
      !years &&
      !months &&
      !weeks &&
      !days &&
      !hours &&
      !minutes &&
      !seconds
    ) {
      clearInterval(x);
      callback({
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds,
        isFinish: true,
      });
    } else {
      callback({
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds,
        isFinish: false,
      });
    }
  }, 1000);
}

exports.timetheft = timetheft;
