import { useNavigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  return auth ? <Outlet /> : navigate("/login", { replace: true });
  // if (localStorage.getItem("user")) {
  //   return <Outlet {...props} />;
  // } else {
  //   return navigate("/login", { replace: true });
  // }
};
