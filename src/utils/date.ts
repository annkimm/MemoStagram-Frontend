const [millisFormatMin, millisFormatHour, millisFormatDay, millisFormatWeek,
] = [60, 3600, 86400, 604800];
const [secUnit, minUnit, hourUnit, dayUnit, monthUnit, yearUnit] = ['초', '분', '시간', '일', '월', '년'];
const beforeUnit = '전';

export function checkElapsedTime(time: Date) {
  const currentTime = Date.now();
  const postTime = time.getTime();

  return Math.floor((currentTime - postTime) / 1000);
}

export function checkBeforeWeek(elapsedTime: number) {
  if (elapsedTime < millisFormatMin) {
    return `${elapsedTime}${secUnit}`;
  }

  if (elapsedTime < millisFormatHour) {
    return `${Math.floor(elapsedTime / millisFormatMin)}${minUnit}`;
  }

  if (elapsedTime < millisFormatDay) {
    return `${Math.floor(elapsedTime / millisFormatHour)}${hourUnit}`;
  }

  return `${Math.floor(elapsedTime / millisFormatDay)}${dayUnit}`;
}

export function checkAfterWeek(postTime: Date) {
  const year = postTime.getFullYear();
  const min = postTime.getMonth() + 1;
  const day = postTime.getDate();
  return `${year}${yearUnit} ${min}${monthUnit} ${day}${dayUnit} `;
}

export function changeTimeFormat(time: string, isReply: boolean) {
  const postTime = new Date(time);
  const elapsedTime = checkElapsedTime(postTime);

  if (elapsedTime < millisFormatWeek) {
    return checkBeforeWeek(elapsedTime) + (isReply ? '' : beforeUnit);
  }

  return checkAfterWeek(postTime);
}
