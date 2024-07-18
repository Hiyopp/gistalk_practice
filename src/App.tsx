import { lazy } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const TopStyle = lazy(() => import("./components/TopStyle"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TopStyle />
    </QueryClientProvider>
  );
}

export default App;
