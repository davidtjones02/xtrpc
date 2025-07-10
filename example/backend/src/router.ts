import { initTRPC } from "@trpc/server";
import { z } from "zod";

async function createContext() {
  const user = { id: "abc", email: "user@example.com" }; // mock
  return {
    user,
  };
}

type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();

const router = t.router;

export const appRouter = router({
  hello: t.procedure
    .input(z.object({ name: z.string() }))
    .output(z.string())
    .query(({ input }) => `Hello ${input.name}`),

  protected: t.procedure
    .input(
      z.object({
        context: z.object({
          user: z.string(),
          email: z.string(),
          isAuthenticated: z.boolean(),
        }),
      }),
    )
    .query(({ input }) => {
      const updated = {
        ...input.context,
        status: "active",
      };
      return updated;
    }),

  getUser: t.procedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      const updated_id = `user-${input.id}`;
      return { email: ctx.user.email, id: updated_id };
    }),
});

export type AppRouter = typeof appRouter;
