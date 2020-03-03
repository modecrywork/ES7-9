const names = ["jack", "Max", "Leo"];
const names2 = [
  new Promise(resolve => resolve("jack")),
  new Promise(resolve => resolve("Max")),
  new Promise(resolve => resolve("Leo"))
];

for (let name of names) {
  console.log(name);
}

const showNames = async () => {
  for await (name of nams2) {
    // Асинхронный итератор который дожидается выполнения каждого промиса
    console.log(name);
  }
};

// Async generator function
async function* redLines(paths) {
  let file = await fileOpen(path);
  try {
    while (!file.EOF) {
      yield await file.redLine();
    }
  } finally {
    await file.close();
  }
}

for await (const line of readLines(filePath)) {
  console.log(line);
}
