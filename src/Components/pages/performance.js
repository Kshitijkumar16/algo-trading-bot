import React, { useState, useEffect } from "react";
import Nav from "./dashboardNavbar";

const Navbar = () => {
  return (
    <>
      <Nav />
      <div>
        <div className="page-heading">
          <div className="perform-heading">Performance</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
