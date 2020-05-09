// 迭代器

const array = [222, "hello", true];

for (let value of array) {
  console.log(value);
}

for(let index in array){
  console.log(index);
}

const fruits = new Set(["apple", "pear", "mango"]);

fruits["peach"] = "Princess Peach! Make a wish!";

for(let fruit in fruits) {
  console.log(fruit);
}

for (let fruit of fruits) {
  console.log(fruit);
}