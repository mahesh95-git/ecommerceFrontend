import React from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader, AdminOption, Footer } from "../commponets";

function Admin() {
  return (
    <div className="container-27">
      <div className="container-27-1">
        <AdminHeader />
      </div>
      <div className="container-27-2">
        <div className="container-27-2-1">
        <AdminOption />
        </div>
        <div className="container-27-2-2">
        <Outlet />
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
