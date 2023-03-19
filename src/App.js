import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { useDispatch } from "react-redux";
import { login, useFetchAccessTokenQuery } from "~/store";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  const { data, isLoading, isError, isSuccess } =
    useFetchAccessTokenQuery(accessToken);

  useEffect(() => {
    if (isLoading) {
    } else if (isError) {
      console.log("Chưa đăng nhập");
    } else if (isSuccess) {
      console.log(data);
      dispatch(login());
    }
  }, [data, isLoading, isError, isSuccess, dispatch]);

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
