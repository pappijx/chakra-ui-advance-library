import { Routes, Route } from "react-router-dom";
import { Multiselect } from "./components";
import { MainPage, SecondPage } from "./Pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/second" element={<SecondPage />} />
      <Route path="/multiselect-dropdown" element={<Multiselect />} />
    </Routes>
  );
}

export default AppRoutes;
