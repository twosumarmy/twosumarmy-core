import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavigationRoute, navigations } from "./constants/navigation";
import { TransactionListPage } from "./pages/TransactionListPage";
import { UploadFilePage } from "./pages/UploadFilePage";
import { DashboardPage } from "./pages/DashboardPage";
import { UserLayout } from "./components/UserLayout/UserLayout";

export const App: React.FC = ({}) => {
  const { pathname } = useLocation();

  const render = (): React.ReactElement => {
    return (
      <UserLayout navigations={navigations} selectedNavigationName={pathname}>
        <Routes>
          <Route path={NavigationRoute.Dashboard} element={<DashboardPage />} />
          <Route
            path={NavigationRoute.Activities}
            element={<TransactionListPage />}
          />
          <Route path={NavigationRoute.Upload} element={<UploadFilePage />} />
        </Routes>
      </UserLayout>
    );
  };

  return render();
};
