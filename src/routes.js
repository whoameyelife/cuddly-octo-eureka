import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import App from "./App";
import FAQ from "./components/FAQ";
  
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
        <Route path="faq" element={<FAQ />} />
        {/* ... etc. */}
        </Route>
    )
);

export default router;