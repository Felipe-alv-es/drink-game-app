import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  Home,
  GamePage,
  PlayerSelector,
  DeckSelector,
  WinScreen,
} from "./Pages/Index.ts";

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
          <Route path="/deck-selector" element={<DeckSelector />} />
          <Route path="/win-screen" element={<WinScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
