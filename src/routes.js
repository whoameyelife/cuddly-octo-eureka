import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import App from "./App";
import FAQ from "./components/FAQ";
import QuizApp from "./components/QuizApp";
  
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="faq" element={<FAQ />} />
            {/* <Route path="quizapp" element={<QuizApp />} /> */}
        </Route>
    )
);

export default router;