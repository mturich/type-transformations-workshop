import { Equal, Expect } from '../helpers/type-utils'

type DeepPartial<T> = T extends Function
   ? T
   : T extends Array<infer U>
   ? Array<DeepPartial<U>>
   : T extends object
   ? { [K in keyof T]?: DeepPartial<T[K]> }
   : T

type MyType = {
   a: string
   b: number
   c: {
      d: string
      e: {
         f: string
         g: {
            h: string
            i: () => {}
            j: string
         }[]
      }
   }
   d: () => {}
}

type Result = DeepPartial<MyType>
//    ^?
type tests = [
   Expect<
      Equal<
         Result,
         {
            a?: string
            b?: number
            c?: {
               d?: string
               e?: {
                  f?: string
                  g?: {
                     h?: string
                     i?: () => {}
                     j?: string
                  }[]
               }
            }
            d?: () => {}
         }
      >
   >
]
