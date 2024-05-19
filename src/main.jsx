import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PickChar from "./components/pickchar";
import VisualNovel from "./components/VisualNovel";
export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components/pickchar.jsx" element={<PickChar />} />
        <Route path="/components/VisualNovel.jsx" element={<VisualNovel />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
