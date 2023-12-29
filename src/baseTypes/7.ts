/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum IsWeekend {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Suturday,
  Sunday,
};

function isWeekend(day:IsWeekend) {
  return day === IsWeekend.Suturday || day === IsWeekend.Sunday;
};
