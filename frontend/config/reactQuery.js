import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {

            refetchOnWindowFocus: false,

            gcTime: 1000 * 60 * 5, // 5 minutes

            staleTime: 1000 * 60 * 1, // 1 minute

            retry: 0,

            throwOnError: false,
        },
        mutations: {
            retry: 0,
        },
    },
});

export default queryClient