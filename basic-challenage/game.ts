/**
 * game
 */

type Position = {
  x: number;
  y: number;
};

const position: Position = { x: 0, y: 0 };

type Direction = "up" | "down" | "left" | "right";

const move = (direction: Direction) => {
  switch (direction) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "left":
      position.x -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    default:
      throw Error("Unknown Command");
  }
};

console.log(move("down"));
console.log(move("up"));
