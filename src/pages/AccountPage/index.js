import { logout } from "~/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function AccountPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default AccountPage;
