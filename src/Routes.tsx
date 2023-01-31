import { Routes, Route } from "react-router-dom";
import { MainPage, SecondPage } from "./Pages";
import { MultiselectDoc } from "./components";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/second" element={<SecondPage />} />
      <Route path="/multiselect-dropdown" element={<MultiselectDoc />} />
    </Routes>
  );
}

export default AppRoutes;
