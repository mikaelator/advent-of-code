

import { strictEqual } from "assert";
import { parseData, part1, part2 } from "./01.mjs";

describe("Day 01", () => {
  const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

  it("should return how many Calories are being carried by the Elf carrying the most Calories", () => {
    const data = parseData(input);
    strictEqual(part1(data), 24000);
  });

  it("should return total Calories carried by the top three Elves carrying the most Calories", () => {
    const data = parseData(input);
    strictEqual(part2(data), 45000);
  });
});