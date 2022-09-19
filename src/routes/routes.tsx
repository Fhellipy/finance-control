import { LayoutBase } from "@layouts/Base";
import { LoginPage } from "@modules/Login";
import { Route, Routes as AllRoutes } from "react-router-dom";
import { HomePage } from "@modules/Home";

function Routes() {
  return (
    <AllRoutes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<LayoutBase />}>
        <Route index element={<HomePage />} />
      </Route>
    </AllRoutes>
  );
}

export { Routes };
