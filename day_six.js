// https://adventofcode.com/2021/day/6

let lanternfish = [
  1, 4, 3, 3, 1, 3, 1, 1, 1, 2, 1, 1, 1, 4, 4, 1, 5, 5, 3, 1, 3, 5, 2, 1, 5, 2,
  4, 1, 4, 5, 4, 1, 5, 1, 5, 5, 1, 1, 1, 4, 1, 5, 1, 1, 1, 1, 1, 4, 1, 2, 5, 1,
  4, 1, 2, 1, 1, 5, 1, 1, 1, 1, 4, 1, 5, 1, 1, 2, 1, 4, 5, 1, 2, 1, 2, 2, 1, 1,
  1, 1, 1, 5, 5, 3, 1, 1, 1, 1, 1, 4, 2, 4, 1, 2, 1, 4, 2, 3, 1, 4, 5, 3, 3, 2,
  1, 1, 5, 4, 1, 1, 1, 2, 1, 1, 5, 4, 5, 1, 3, 1, 1, 1, 1, 1, 1, 2, 1, 3, 1, 2,
  1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 4, 5, 1, 3, 1, 4, 4,
  2, 3, 4, 1, 1, 1, 5, 1, 1, 1, 4, 1, 5, 4, 3, 1, 5, 1, 1, 1, 1, 1, 5, 4, 1, 1,
  1, 4, 3, 1, 3, 3, 1, 3, 2, 1, 1, 3, 1, 1, 4, 5, 1, 1, 1, 1, 1, 3, 1, 4, 1, 3,
  1, 5, 4, 5, 1, 1, 5, 1, 1, 4, 1, 1, 1, 3, 1, 1, 4, 2, 3, 1, 1, 1, 1, 2, 4, 1,
  1, 1, 1, 1, 2, 3, 1, 5, 5, 1, 4, 1, 1, 1, 1, 3, 3, 1, 4, 1, 2, 1, 3, 1, 1, 1,
  3, 2, 2, 1, 5, 1, 1, 3, 2, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 1, 1,
  1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1,
];
let lanternfishExample = [3, 4, 3, 1, 2];

function estimate(daysleft, fishpool) {
  for (let day = daysleft; day >= 0; day--) {
    fishpool = fishpool.flat().map((fish) => {
      if (fish-- === 0) {
        return [6, 8];
      }
      return fish;
    });
  }
  return fishpool.length;
}
console.log("res", estimate(80, lanternfish));
