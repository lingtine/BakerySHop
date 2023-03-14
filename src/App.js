import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { useDispatch } from "react-redux";
import { login, logout } from "~/store";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("http://localhost:81/api/auth/user-profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        dispatch(login());
      } catch (error) {
        dispatch(logout());
      }
    };
    fetchData();
  }, [dispatch, accessToken]);
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
    <div className="App">
      <RouterProvider router={router}></RouterProvider>Ư
    </div>
  );
}

export default App;
