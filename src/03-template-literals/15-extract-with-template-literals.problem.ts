import { Equal, Expect } from "../helpers/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type T = `/${string}/:id`
type DynamicRoutes = Extract<Routes , T>;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];
