import React from "react";
import { Routes, Route } from "react-router-dom";
import { TransactionListPage } from "./pages/TransactionListPage";
import { UploadFilePage } from "./pages/UploadFilePage";

export const App: React.FC = ({}) => {
  const render = (): React.ReactElement => {
    return (
      <Routes>
        <Route path="/" element={<UploadFilePage />} />
        <Route path="/transactions" element={<TransactionListPage />} />
      </Routes>
    );
  };

  return render();
};
