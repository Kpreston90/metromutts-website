import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getTodayAndTomorrowAvailability, getAvailability } from "./gingr";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  availability: router({
    /**
     * Get availability for today and tomorrow — used by the Limited Spots Toast
     */
    todayAndTomorrow: publicProcedure.query(async () => {
      return getTodayAndTomorrowAvailability();
    }),

    /**
     * Get availability for a specific date — used by the booking modal
     */
    byDate: publicProcedure
      .input(z.object({ date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/) }))
      .query(async ({ input }) => {
        return getAvailability(input.date);
      }),
  }),
});

export type AppRouter = typeof appRouter;
