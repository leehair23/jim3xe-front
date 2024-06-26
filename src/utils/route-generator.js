import ErrorBoundaryWrapper from "../components/ErrorBoundaryWrapper";
import HomePage from "../pages/HomePage";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorBoundaryWrapper />,
    // loader: asyncLoader,
  },
  {
    path: "/login",
    element: <></>,
    errorElement: <ErrorBoundaryWrapper />,
  },
  {
    path: "/about",
    element: <></>,
    errorElement: <ErrorBoundaryWrapper />,
  },
]);

export { router };
