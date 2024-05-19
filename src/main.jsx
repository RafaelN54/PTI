import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/home";
import DisplayNews from "./components/displayNews";
import PickChar from "./components/pickchar";
import VisualNovel from "./components/VisualNovel";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components/home.jsx" element={<Home />} />
        <Route path="/components/displayNews.jsx" element={<DisplayNews />} />
        <Route path="/components/pickchar.jsx" element={<PickChar />} />
        <Route path="/components/VisualNovel.jsx" element={<VisualNovel />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
