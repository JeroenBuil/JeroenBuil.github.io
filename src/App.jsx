import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from  "./pages/Landing";
import { NotFound } from "./pages/NotFound";
import { PhotoPortfolio } from "./pages/PhotoPortfolio";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photography" element={<PhotoPortfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
