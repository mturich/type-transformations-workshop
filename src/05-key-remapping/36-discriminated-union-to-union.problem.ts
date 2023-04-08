import { Equal, Expect } from '../helpers/type-utils'

type Fruit =
   | {
        name: 'apple'
        color: 'red'
     }
   | {
        name: 'banana'
        color: 'yellow'
     }
   | {
        name: 'orange'
        color: 'orange'
     }
type t = Fruit['name']

type TransformedFruit1 = keyof {
   [K in Fruit as `${K['name']}:${K['color']}`]: K
}
type TransformedFruit = {
   [K in Fruit as K['name']]: `${K['name']}:${K['color']}`
}[Fruit['name']]
//        ^?
type tests = [
   Expect<
      Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>
   >
]
