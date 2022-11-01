import "./App.css";
import "@fontsource/raleway";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Overview from "./components/Overview";
import OurClient from "./components/OurClient";
import HowItWork from "./components/HowItWork";
import OurStory from "./components/OurStory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/our-clients" element={<OurClient />} />
        <Route path="/how-it-work" element={<HowItWork />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
    </div>
  );
}

export default App;
