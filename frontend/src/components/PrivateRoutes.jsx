import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const { hospitalInfo } = useSelector((state) => state.auth);
  return hospitalInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
