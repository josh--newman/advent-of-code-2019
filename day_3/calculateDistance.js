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

const calculateDistance = (wire1, wire2) => {
  const path1 = generatePositions(wire1);
  console.log(path1);
  const path2 = generatePositions(wire2);
  console.log(path2);

  const closestPosition = path1
    .filter(position =>
      path2.find(p => p.x === position.x && p.y === position.y)
    )
    .map(({ x, y }) => Math.abs(x) + Math.abs(y))
    .sort((a, b) => a - b)[0];

  return closestPosition;

  // return closestPosition.x + closestPosition.y;
};

module.exports = calculateDistance;
