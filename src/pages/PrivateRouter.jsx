import { Outlet , Navigate } from "react-router-dom";
import React from "react"
const PrivateRouter = () => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    console.log("user = " , user)
    
    return (
      user ? <Outlet /> : <Navigate to="/login" />
    )
  };
  
  export default PrivateRouter;