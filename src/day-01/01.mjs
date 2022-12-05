export const part1 = (data) => {
  return Math.max.apply(0, data);
};

export const part2 = (data) => {
  const threeLargestStashes = [...data].sort((a, b) => a - b).slice(-3);
  return reduceArray(threeLargestStashes);
};

export const parseData = (data) => {
  return data.split(/\n{2,}/).map(item => {
    const stash = item.split(/\n/);
    return reduceArray(stash);
  });
};

const reduceArray = (arr) => {
  return arr.reduce((acc, curr) => Number(acc) + Number(curr), 0);
}