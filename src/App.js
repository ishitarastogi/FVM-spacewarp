import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Huddle from "./Push/Huddle";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
            </>
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="/huddle" element={<Huddle />} />
      </Routes>
    </div>
  );
}

export default App;
