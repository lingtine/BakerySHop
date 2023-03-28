import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { useThunk } from "./hooks";
import { getUser } from "./store";

function App() {
  const [doGetUser] = useThunk(getUser);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      doGetUser(accessToken);
    }
  }, []);

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
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
