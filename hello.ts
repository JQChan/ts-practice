console.log('hello world')

/**
 * 泛型
 * @param arg 
 */
function hello<T>(arg: T): T {
  return arg;
}

/**
 * 使用熟悉的尖括号方式进行表达
 */
let output = hello<string>("hello TypeScript");

/**
 * 使用类型推断
 */
let output1 = hello("hello TypeScript");

console.log(output, output1);