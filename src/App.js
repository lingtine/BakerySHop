import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { publicRoutes } from "~/routes";
import { useThunk } from "./hooks";
import { getUser, setCart } from "./store";
import { useSelector } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
function App() {
  const [doGetUser] = useThunk(getUser);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const cart = localStorage.getItem("cart");

    if (accessToken) {
      doGetUser(accessToken);
    }
    if (cart) {
      dispatch(setCart(JSON.parse(cart)));
    }
  }, []);
  useEffect(() => {
    if (user) {
      const cart = localStorage.getItem(`cart_${user.id}`);

      if (cart) {
        dispatch(setCart(JSON.parse(cart)));
      }
    }
  }, [user]);

  const route = publicRoutes.map((route, index) => {
    const Page = route.component;
    const Layout = route.layout;
    return {
      path: route.path,
      element: (
        <Layout>
          <Page />
        </Layout>
      ),
    };
  });
  const router = createBrowserRouter(route);
  return (
    <HelmetProvider>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </HelmetProvider>
  );
}

export default App;
