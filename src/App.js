import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, GamePage } from "./Pages/Index.ts";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
