const A = {
  X: 4,
  Y: 8,
  Z: 3,
}

const B = {
  X: 1,
  Y: 5,
  Z: 9,
}

const C = {
  X: 7,
  Y: 2,
  Z: 6,
}

export const part1 = (data) => {
  let score = 0;
  data.forEach(element => {
    const opponentPlay = element[0];
    const myPlay = element[2];
    switch (opponentPlay) {
      case "A":
        return score += A[myPlay];
      case "B":
        return score += B[myPlay];
      case "C":
        return score += C[myPlay];
    }
  });
  return score;
};

const Y = {
  A: 4,
  B: 5,
  C: 6,
}

const X = {
  A: 3,
  B: 1,
  C: 2,
}

const Z = {
  A: 8,
  B: 9,
  C: 7,
}

export const part2 = (data) => {
  let score = 0;
  data.forEach(element => {
    const opponentPlay = element[0];
    const myPlay = element[2];
    switch (myPlay) {
      case "Y":
        return score += Y[opponentPlay];
      case "X":
        return score += X[opponentPlay];
      case "Z":
        return score += Z[opponentPlay];
    }
  });
  return score;
};

export const parseData = (data) => {
  return data.split(/\n/);
};
