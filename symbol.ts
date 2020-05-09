const symbol1 = Symbol();

const symbol2 = Symbol('hello');

const symbol3 = Symbol('hello');

console.log(symbol1, symbol2,  symbol3);

const symbol = Symbol();

const obj = {
  [symbol]: 'value'
}