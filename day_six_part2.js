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
  let daysOld = new Array(9).fill(0);
  for (let f of fishpool) {
    daysOld[f]++;
  }
  for (let day = daysleft; day > 0; day--) {
    let six_days_olds = 0;
    let eight_days_olds = 0;
    for (let day = 0; day < daysOld.length; day++) {
      let age = daysOld[day];
      if (day === 0) {
        six_days_olds = age;
        eight_days_olds = age;
      } else {
        daysOld[day - 1] = age;
      }
    }
    daysOld[6] += six_days_olds;
    daysOld[8] = eight_days_olds;
  }
  return daysOld.reduce((a, b) => a + b);
}
console.log("res", estimate(256, lanternfish), 26984457539);
