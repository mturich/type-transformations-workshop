import { Equal, Expect } from '../helpers/type-utils'
export {}
const frontendToBackendEnumMap = {
   singleModule: 'SINGLE_MODULE',
   multiModule: 'MULTI_MODULE',
   sharedModule: 'SHARED_MODULE',
} as const

type T = keyof typeof frontendToBackendEnumMap
//   ^?
type BackendModuleEnum = typeof frontendToBackendEnumMap[T]
//        ^?

type tests = [
   Expect<
      Equal<
         BackendModuleEnum,
         'SINGLE_MODULE' | 'MULTI_MODULE' | 'SHARED_MODULE'
      >
   >
]
