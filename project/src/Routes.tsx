import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Pages/LayoutPage/DashboardLayout";
import EcommerceLayout from "./Pages/LayoutPage/EcommerceLayout";
import LayoutPage from "./Pages/LayoutPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="chakra">
        <Route path="layout">
          <Route path="as" element={<LayoutPage />} />
          <Route path="dashboard" element={<DashboardLayout />} />
          <Route path="ecommerce" element={<EcommerceLayout />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
