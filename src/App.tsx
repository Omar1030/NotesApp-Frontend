import { Routes, Route } from "react-router";

import Home from "./pages/home";
import NoteCreate from "./pages/noteCreate";
import NoteDetail from "./pages/noteDetail";

import "./App.css";

function App() {
  return (
    <div data-theme="dark">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/create-note" element={<NoteCreate />}></Route>
        <Route path="/note-detail" element={<NoteDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
