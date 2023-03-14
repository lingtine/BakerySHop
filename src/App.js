import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { useDispatch } from "react-redux";
import { login, logout } from "~/store";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem("accessToken");

  const fetchData = async () => {
    try {
      await axios.get("http://localhost:81/api/auth/user-profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      dispatch(login());
    } catch (error) {
      console.log(error);
      dispatch(logout());
    }
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout>{<Page />}</Layout>}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
