import { Equal, Expect } from '../helpers/type-utils'

type Route =
   | {
        route: '/'
        search: {
           page: string
           perPage: string
        }
     }
   | { route: '/about'; search: {} }
   | { route: '/admin'; search: {} }
   | { route: '/admin/users'; search: {} }


type RoutesObject = { [k in Route as k['route']]: k['search'] }
//     ^?
type tests = [
   Expect<
      Equal<
         RoutesObject,
         {
            '/': {
               page: string
               perPage: string
            }
            '/about': {}
            '/admin': {}
            '/admin/users': {}
         }
      >
   >
]
