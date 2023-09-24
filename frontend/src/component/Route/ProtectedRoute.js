import { React } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin = "false" }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }
  if (user && user.role !== "admin" && isAdmin === "true") {
    navigate("/login");
  }

  return <Outlet />;
};

export default ProtectedRoute;
