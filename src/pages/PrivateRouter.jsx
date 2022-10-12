import { Outlet , Navigate } from "react-router-dom";
const PrivateRouter = () => {
    // const { user } = useSelector((state) => state.auth);
    const user = true
  
    return user ? <Outlet /> : <Navigate to="/other" />;
  };
  
  export default PrivateRouter;