import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from  "./pages/Landing";
import { NotFound } from "./pages/NotFound";
import { Astrophotography } from "./pages/Astrophotography";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/astrophotography" element={<Astrophotography />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
