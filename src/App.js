import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Instamart from "./Components/Instamart";
import Cart from "./Cart";
import Error from "./Components/Error";
import HomeBody from "./Components/HomeBody";

const App = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/instamart",
        element: <Instamart />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/", element: <HomeBody /> },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
