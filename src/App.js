import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Components/Header";
//import Instamart from "./Components/Instamart";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import HomeBody from "./Components/HomeBody";
import { lazy, Suspense, useState } from "react";
import Simmer from "./Components/Simmer";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const InstamartLazy = lazy(() => import("./Components/Instamart"));

const App = () => {
  const [userInfo, setUserInfo] = useState("ram");

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      <Header />
      <Outlet />
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/instamart",
        element: (
          <Suspense fallback={() => <Simmer />}>
            <InstamartLazy />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
      { path: "/", element: <HomeBody /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
