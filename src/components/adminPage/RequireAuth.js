import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.auth);

  // if (!isAuthenticated) {
  //   navigate("/login");
  // } else {
  //   navigate("/admin")
  // }
  return children;
};

export default RequireAuth;