import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana<T> = T extends "apple" | 'banana' ? T : never;
type AppleOrBanana2 = Fruit extends infer K ?
// 																			  ^?
			K extends "apple" | "banana"
			? K 
		: never
	: never;
type T = AppleOrBanana<Fruit>
// 	 ^?

type tests = [Expect<Equal<T, "apple" | "banana">>];
