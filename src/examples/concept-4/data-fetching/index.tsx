import { Comparison } from "../../../ui/comparison";
import { ReactQueryFetching } from "./react-query-fetching";
import reactQueryFetchingCode from "./react-query-fetching.tsx?raw";
import { CustomHookFetching } from "./custom-hook-fetching";
import customHookFetchingCode from "./custom-hook-fetching.tsx?raw";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const DataFetching = () => (
  <Comparison
    title="React Query vs Custom Fetch Hook"
    goodPractice={{
      badge: "React Query",
      description:
        "Using a specialized data fetching library with advanced caching and state management",
      component: (
        <QueryClientProvider client={queryClient}>
          <ReactQueryFetching />
        </QueryClientProvider>
      ),
      code: reactQueryFetchingCode,
    }}
    badPractice={{
      badge: "Custom Fetch Hook",
      description:
        "Even well-designed custom hooks lack advanced features like background updates and caching",
      component: <CustomHookFetching />,
      code: customHookFetchingCode,
    }}
  />
);
