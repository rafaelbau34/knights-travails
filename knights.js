class MoveNode {
  constructor(position, path) {
    this.position = position;
    this.path = path;
  }
}

function knightMoves(start, end) {
  const allPossibleMoves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  const queue = [];

  const visited = new Set();

  const startNode = new MoveNode(start, [start]);
  queue.push(startNode);
  visited.add(start.toString());

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const [currentX, currentY] = currentNode.position;

    if (currentX === end[0] && currentY === end[1]) {
      return currentNode.path;
    }

    for (const move of allPossibleMoves) {
      const [dx, dy] = move;
      const nextX = currentX + dx;
      const nextY = currentY + dy;
      const nextPosition = [nextX, nextY];

      const isValid = nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8;
      const isVisited = visited.has(nextPosition.toString());

      if (isValid && !isVisited) {
        visited.add(nextPosition.toString());

        const newPath = [...currentNode.path, nextPosition];
        const nextNode = new MoveNode(nextPosition, newPath);

        queue.push(nextNode);
      }
    }
  }
  return null;
}

function printKnightPath(path) {
  if (!path) {
    console.log("No path was found.");
    return;
  }
  console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((square) => {
    console.log(`  [${square.join(",")}]`);
  });
  console.log("\n");
}
