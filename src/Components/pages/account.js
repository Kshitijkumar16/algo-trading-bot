import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Nav from "./dashboardNavbar";

const Navbar = () => {
  const [setOpenMenu] = useState(false);

  return (
    <div>
     < Nav />
      <div className="page-heading">
        <div className="perform-heading">Account</div>
      </div>
      <div className="account-container">
        hello
      </div>
    </div>
  );
};

export default Navbar;
