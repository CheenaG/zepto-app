import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navigateFunc = (value) => {
    navigate(`/${value}`);
  };

  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-12">
          <div className="nav-bar">
            <div className="row">
              <div className="col-lg-4">
                <img src="/images/logoimg.jpg" className="logo_img" />
              </div>
              <div className="col-lg-8 row nav_right">
                <div className="col-lg-3">
                  <button className="nav_btn" onClick={() => navigateFunc("")}>
                    Home
                  </button>
                </div>
                <div className="col-lg-3">
                  <button
                    className="nav_btn"
                    onClick={() => navigateFunc("del-areas")}
                  >
                    Delivery Areas
                  </button>
                </div>
                <div className="col-lg-3">
                  <button
                    className="nav_btn"
                    onClick={() => navigateFunc("press")}
                  >
                    Press
                  </button>
                </div>

                <div className="col-lg-3">
                  <button
                    className="nav_btn"
                    onClick={() => navigateFunc("customer")}
                  >
                    customer support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
