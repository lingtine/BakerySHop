import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authRefresh } from "~/store";
import { useThunk } from "~/hooks";

function AccountPage() {
  const [doLogout, isLoading, error] = useThunk(authRefresh);
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    doLogout();
    navigate("/");
  };

  if (!isAuthenticated) {
    navigate("/");
  }
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default AccountPage;
