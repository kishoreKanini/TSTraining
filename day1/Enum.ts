enum Direction{Up, Down, Left, Right};
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
// or
enum Direction2{Up =10, Down, Left, Right};
console.log(Direction2.Down);
// or
enum Direction3{Up="Up", Down = "Down", Left = "Left", Right = "Right"};
