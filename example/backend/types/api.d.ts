export declare const appRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: any;
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    hello: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            name: string;
        };
        output: string;
        meta: object;
    }>;
    protected: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            context: {
                user: string;
                email: string;
                isAuthenticated: boolean;
            };
        };
        output: {
            status: string;
            user: string;
            email: string;
            isAuthenticated: boolean;
        };
        meta: object;
    }>;
    getUser: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: string;
        };
        output: {
            email: any;
            id: string;
        };
        meta: object;
    }>;
}>>;
export type API = typeof appRouter;
