import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
