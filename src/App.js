import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, GamePage, PlayerSelector } from "./Pages/Index.ts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/selection-page" element={<Home />} />
          <Route path="/game-page" element={<GamePage />} />
          <Route path="/player-selector" element={<PlayerSelector />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
