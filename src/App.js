import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SelectTheme from "./Pages/SelectTheme";
import SelectLeftSideBox from "./Pages/SelectLeftSideBox";
import SelectTopSideBox from "./Pages/SelectTopSideBox";
import SelectActiveCheckBox from "./Pages/SelectActiveCheckBox";
import SelectPassiveBox from "./Pages/SelectPassiveBox";
import SelectFontColor from "./Pages/SelectFontColor";
import CreateHabit from "./Pages/CreateHabit";
import "./App.css";
import Tracker from "./Pages/Tracker";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="select-page-1" element={<SelectTheme />} />
        <Route path="select-page-2" element={<SelectLeftSideBox />} />
        <Route path="select-page-3" element={<SelectTopSideBox />} />
        <Route path="select-page-4" element={<SelectActiveCheckBox />} />
        <Route path="select-page-5" element={<SelectPassiveBox />} />
        <Route path="select-page-6" element={<SelectFontColor />} />
        <Route path="create-habit" element={<CreateHabit />} />
        <Route path="habit-tracker" element={<Tracker />} />
      </Routes>
    </div>
  );
}

export default App;
