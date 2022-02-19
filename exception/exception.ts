//javascript: Error
{
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
        const invalid: never = direction;
        throw Error(`Unknown Command${invalid}`);
    }
  };

  console.log(move("down"));
  console.log(move("up"));
}

//Error(Exception) Handling : try -> catch -> finally
function readFile(fileName: string): string {
  if (fileName === "not exist") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {
  console.log(`finally`);
}

const fileName = "not exist";

function run() {
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`caught! ${error}`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed`);
  }
}
run();
