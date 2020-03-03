const object = {
  a: 1,
  b: 2,
  get test() {
    return `${this.a}${this.b}`;
  }
};
const array = ["test-0", "test-1"];
const array2 = [
  ["one", 1],
  ["two", 2]
];

/*!! Symbol - игонорируется, !! Не учитываются свойства из цепочки прототипов */
console.log(Object.entries(object)); // Возваращает массив в формате [[key,value]]
console.log(Object.entries(array)); // (Если нет ключей возвращает index вместо key )
console.log(Object.values(object)); // Возвращет массив значений
console.log(Object.fromEntries(array2)); // Преобразовывает в объект из массива

console.log(Object.getOwnPropertyDescriptors(object)); // Возвращает все сведения о всех своствах объекта (так же geterr и setter) в виде объекта
const object2 = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(person)
); // позволяет  склонировать объект включая геттеры и сеттеры

console.log(Object.getOwnPropertyDescriptors(object2));
