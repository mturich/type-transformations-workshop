import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};



// type Fn = (...args: any) => string | boolean | number 
type Fn = (...args: any) => any 
type UnionFn = Fn| { [key: string]: Fn }
type GetParserResult<T extends UnionFn> = T extends (() => infer K) | { [key: string]: () => infer K }
  ? K
  : never;
;
type T = GetParserResult<typeof parser1>

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
];
