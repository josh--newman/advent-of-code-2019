const generatePositions = moves => {
  return moves
    .map(move => [move.slice(0, 1), Number(move.slice(1, move.length))])
    .reduce((arr, [direction, distance]) => {
      const positions = [];

      for (let i = 0; i < distance; i++) {
        const newPosition = positions.length
          ? { ...positions[positions.length - 1] }
          : arr.length
          ? { ...arr[arr.length - 1] }
          : { x: 0, y: 0 };

        newPosition.x += direction === "R" ? 1 : direction === "L" ? -1 : 0;
        newPosition.y += direction === "U" ? 1 : direction === "D" ? -1 : 0;
        positions.push(newPosition);
      }
      return [...arr, ...positions];
    }, [])
    .flat();
};

// Part 1
const calculateDistance = (wire1, wire2) => {
  const path1 = generatePositions(wire1);
  const path2 = generatePositions(wire2);

  const closestPosition = path1
    .filter(position =>
      path2.find(p => p.x === position.x && p.y === position.y)
    )
    .map(({ x, y }) => Math.abs(x) + Math.abs(y))
    .sort((a, b) => a - b)[0];

  return closestPosition;
};

const getIndexes = (intersections, path) => {
  return intersections.map(intersection => {
    return path.findIndex(
      i => i.x === intersection.x && i.y === intersection.y
    );
  });
};

// Part 2
const calculateSignalDelay = (wire1, wire2) => {
  const path1 = generatePositions(wire1);
  const path2 = generatePositions(wire2);

  const intersections = path1.filter(position =>
    path2.find(p => p.x === position.x && p.y === position.y)
  );

  const indexSet = [
    getIndexes(intersections, path1),
    getIndexes(intersections, path2)
  ];

  return intersections
    .map((_, i) => {
      return indexSet[0][i] + indexSet[1][i] + 2; // +2 accounts for 0 based index
    })
    .sort((a, b) => a - b)[0];
};

module.exports = { calculateDistance, calculateSignalDelay };
