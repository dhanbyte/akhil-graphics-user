import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/Style/index.css";
import MainlayoutPage from "./Layout/Mainlayout";
import { DataProvider } from "./components/HomePage/DataContext"; // ✅ Context Import

import ChildCard from "./components/HomePage/ChildCard";
import ParentCard from "./Layout/ParentCard";
import SubChildCard from "./components/HomePage/SubChildCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayoutPage />,
    children: [
      { path: "/", element: <ParentCard /> }, // ✅ Data Context se milega
      { path: "/child/:childId", element: <ChildCard /> },
      { path: "/sub-child/:childId/:subChildId", element: <SubChildCard /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <DataProvider> {/* ✅ Wrap with Context */}
        <RouterProvider router={router} />
      </DataProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
