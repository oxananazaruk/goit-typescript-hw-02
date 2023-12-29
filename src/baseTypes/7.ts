/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum IsWeekend {
  Monday = "false",
  Tuesday = "false",
  Wednesday = "false",
  Thursday = "false",
  Friday = "false",
  Suturday = "true",
  Sunday = "true",
};

function isWeekend(day:IsWeekend) {
  return day === IsWeekend.Suturday || IsWeekend.Sunday;
};
