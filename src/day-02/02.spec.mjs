

import { strictEqual } from "assert";
import { parseData, part1, part2 } from "./02.mjs";

describe("Day 02", () => {
  const input = `A Y
B X
C Z`;

  it("should return total score when following the guide", () => {
    const data = parseData(input);
    strictEqual(part1(data), 15);
  });

  it("should return total score when following the guide correctly", () => {
    const data = parseData(input);
    strictEqual(part2(data), 12);
  });
});