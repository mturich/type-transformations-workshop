// import { programModeEnumMap } from './10-as-const.solution';
import { Equal, Expect } from '../helpers/type-utils'

export const programModeEnumMap = {
   GROUP: 'group',
   ANNOUNCEMENT: 'announcement',
   ONE_ON_ONE: '1on1',
   SELF_DIRECTED: 'selfDirected',
   PLANNED_ONE_ON_ONE: 'planned1on1',
   PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
} as const

const t = Object.values(programModeEnumMap)
type tx = typeof t[0]
export type IndividualProgram = Exclude< tx, 'group' | 'announcement'>

type ProgramType =  keyof typeof programModeEnumMap
export type IndividualProgram1 = typeof programModeEnumMap[Exclude<
  ProgramType,
   'GROUP' | 'ANNOUNCEMENT'
>]

type tests = [
   Expect<
      Equal<
         IndividualProgram,
         '1on1' | 'selfDirected' | 'planned1on1' | 'plannedSelfDirected'
      >
   >
]
