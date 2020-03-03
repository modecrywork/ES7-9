const str = "test";
const str2 = "Hello, my name is Alex";

// заполняет строку до нужного размера
str.padStart(10, "~"); // слева
str.padEnd(10, "~"); // справа

// Проверяет начинается или заканчивается ли строка с указанными символами
//str2.startsWith("Hello",7);  второй аргумент указывает с какого символа начать поиск
//str2.endsWith("Hello",7); второй аргумент обрезает строку до нужного кол-ва элементов
str2.startsWith("Hello");
str2.endsWith("Alex");
