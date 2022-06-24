export const secondsToTime = (timeInSecs: number = 0) => {
  // let h = Math.floor(timeInSecs / 3600)
  //     .toString()
  //     .padStart(2, '0'),
  let m = Math.floor((timeInSecs % 3600) / 60)
      .toString()
      .padStart(2, '0'),
    s = Math.floor(timeInSecs % 60)
      .toString()
      .padStart(2, '0')

  return `${m}m:${s}s`
}
