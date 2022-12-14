// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { userRouter } from "./user.router";
// import { protectedExampleRouter } from "./protected-example-router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("user.", userRouter);
// .merge("question.", protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
