import { first } from 'lodash'
import { Split } from 'ts-toolbelt/out/String/Split'
import { Equal, Expect } from '../helpers/type-utils'

type Names = [
   'Matt Pocock',
   'Jimi Hendrix',
   'Eric Clapton',
   'John Mayer',
   'BB King'
]

type GetSurname<T extends string> = T extends `${infer first} ${infer last}`
   ? last
   : never
//
// type GetSurname<T extends string> = Split<T, ' '>[1]

//    ^?
type tests = [
   Expect<Equal<GetSurname<Names[0]>, 'Pocock'>>,
   Expect<Equal<GetSurname<Names[1]>, 'Hendrix'>>,
   Expect<Equal<GetSurname<Names[2]>, 'Clapton'>>,
   Expect<Equal<GetSurname<Names[3]>, 'Mayer'>>,
   Expect<Equal<GetSurname<Names[4]>, 'King'>>
]
