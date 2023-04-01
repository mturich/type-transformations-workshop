import { Equal, Expect } from "../helpers/type-utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },  
  mocha: {
    label: "Mocha",
  },
};
type t = keyof typeof testingFrameworks;
//   ^?

type TestingFramework = keyof typeof testingFrameworks;

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];
