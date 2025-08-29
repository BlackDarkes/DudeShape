import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./routers/queryRouter/QueryRouter";
import { HomePage } from "@pages/index";
import "@shared/styles/base/global.scss";
import "@shared/styles/base/normalize.scss";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
