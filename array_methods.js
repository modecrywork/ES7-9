const arr = [1, 2, 3, 4];
const arr2 = [1, 2, [3, 4]];

if (arr.indexOf(3) >= 0) {
  // возвращает индекс элемента, -1 если его нет
  console.log(true);
}

if (arr.includes(1)) {
  // Проверяет имеется ли нужный элемент в массиве (так же подходит для NaN)
  console.log(true);
}

console.log(arr2.flat()); // поднимает подмассивы из уровней вложенности, аргумент указывается для  указания уровней вложенности, так же удаляет пустые слоты
console.log(arr2.flatMap(x => [x * 2])); // выполняет  коллбэк для каждого элемента массива, затем выводит на верхний уровень вложенности
