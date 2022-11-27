import React from "react";
import styles from "../../styles/Custom.module.css";
import { ShoppingCart, Phone, LogIn, LogOut } from "react-feather";

function CustomHeader() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.companyLogo}>
          {" "}
          Company Name <ShoppingCart size="20px" />
        </div>
        <div className={styles.innerItems}>
          {" "}
          <div className={styles.items} style={{ marginLeft: "2px" }}>
            {" "}
            <Phone size="18px" />
            016751548528
          </div>
          |
          <a className={styles.items} href="#" style={{ color: "white" }}>
            {" "}
            <LogIn size="18px" />
            Login
          </a>
          |
          <a className={styles.items} href="#" style={{ color: "white" }}>
            {" "}
            <LogOut size="18px" />
            Registration
          </a>
        </div>
      </div>
    </>
  );
}

export default CustomHeader;
