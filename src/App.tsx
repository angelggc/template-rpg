import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { SelectHero } from "./pages/select-hero";
import { Game } from "./pages/game";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen bg-slate-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-hero" element={<SelectHero />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
