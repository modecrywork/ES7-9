/one.two/s.test("one\ntwo"); // /s - точка теперь соответсует абсолютно любому символу

const regEx = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/; // позволяет создавать группы
const result = regEx.exec("2019-08-23");

console.log(result.groups); // {year:,month:,day:}

// Позовляет использовать некую последовательность значений и заменять ее на ту которая вам нужна через именную группу
const str = "Test name";

const repl = /(?<firstName>[A-Za-z]+) (?<lastName>[A-Za-z]+$)/u;

const newStr = str.replace(repl, "$<lastName>,$<firstName>");

console.log(newStr);

let sameWords = /(?<fruit>apple|orange) === \k<fruit>/u; // \k - позовляет вернуть ссылку на эту группу

// (?<=[symbol]) - ретроспективная проверка положительная
// (?>![symbol]) - ретроспективная проверка отрицательная
