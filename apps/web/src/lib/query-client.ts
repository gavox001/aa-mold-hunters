import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Time in milliseconds that the data is considered fresh
      staleTime: 1000 * 60 * 5, // 5 minutes
      // Time in milliseconds that unused data remains in cache
      gcTime: 1000 * 60 * 60, // 1 hour (previously cacheTime)
      // Refetch data on window focus
      refetchOnWindowFocus: true,
      // Retry failed queries
      retry: 3,
      // Delay between retries
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      // Don't refetch on mount if data exists in cache
      refetchOnMount: "always",
      // Refetch when reconnecting
      refetchOnReconnect: true,
    },
    mutations: {
      // Retry failed mutations (useful for network errors)
      retry: 2,
      retryDelay: 1000,
    },
  },
});

// Export a function to create a new query client instance (useful for SSR)
export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });
}
