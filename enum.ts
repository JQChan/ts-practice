// 数字枚举

/**
 * 从1开始自增
 */
enum OrderStatus {
  Start = 1,
  Unpaid,
  Shipping,
  Shipped,
  Complete,
}

console.log(OrderStatus.Start, 'Start');
console.log(OrderStatus.Unpaid, 'Unpaid');
console.log(OrderStatus.Shipping, 'Shipping');
console.log(OrderStatus.Shipped, 'Shipped');
console.log(OrderStatus.Complete, 'Complete');

/**
 * 从0开始自增
 */
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up, 'Up');
console.log(Direction.Down, 'Down');
console.log(Direction.Left, 'Left');
console.log(Direction.Right, 'Right');

/**
 * 数字枚举可以反向映射
 */
enum Enum {
  A,
}

console.log(Enum.A, 'Enum.A');
console.log(Enum[0], 'Enum[0]');


// 字符串枚举，所有成员必须手动初始化

enum Status {
  Start = 'Start',
  Unpaid = 'Unpaid',
  Shipping = 'Shipping',
  Shipped = 'Shipped',
  Complete = 'Complete'
}

console.log(Status.Start, 'Start');
console.log(Status.Unpaid, 'Unpaid');
console.log(Status.Shipping, 'Shipping');
console.log(Status.Shipped, 'Shipped');
console.log(Status.Complete, 'Complete');