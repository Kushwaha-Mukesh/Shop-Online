import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/index.js";
import { Provider } from "react-redux";
import HomeItems from "./components/HomeItems.jsx";
import BagItems from "./components/BagItems.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeItems />,
      },
      {
        path: "/bag",
        element: <BagItems />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
