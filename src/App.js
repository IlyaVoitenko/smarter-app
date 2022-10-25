import "./App.css";
import "@fontsource/raleway";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </div>
  );
}

export default App;
