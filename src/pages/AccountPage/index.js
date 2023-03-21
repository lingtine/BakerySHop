import { useNavigate } from "react-router-dom";
import { clearToken } from "~/store";
import { useDispatch } from "react-redux";

function AccountPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(clearToken());
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default AccountPage;
