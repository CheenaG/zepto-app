import React, { useState } from "react";
import axios from "axios";
import "./vendorlogin.css";

const Vendorlogin = () => {
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");
  const [logindata, pickUserdata] = useState({
    email: { value: "", message: "please enter valid E-mail", display: false },
    password: {
      value: "",
      message: "please enter valid password",
      display: false,
    },
  });

  const handleLogin = (obj, value) => {
    const newlogindata = { ...logindata };
    newlogindata[value].value = obj.target.value;
    pickUserdata(newlogindata);
  };

  const validateLogin = () => {
    const Logdata = { ...logindata };

    if (Logdata.email.value == "") {
      alert("hi");
      Logdata.email.display = true;
      pickUserdata(Logdata);
    } else if (Logdata.password.value == "") {
      alert("hello");
      Logdata.password.display = true;
      pickUserdata(Logdata);
    } else {
      alert("hi2");
      var url = "http://localhost:1212/vendor";
      axios.get(url).then((response) => {
        console.log(response);
      });
    }
  };

  const [vendordata, setVendordata] = useState({
    name: { value: "", message: "please fill your name", display: false },
    email: { value: "", message: "please fill your mail", display: false },
    password: { value: "", message: "please fill password", display: false },
    phone: {
      value: "",
      message: "please fill your phone number",
      display: false,
    },
  });

  const Handlevendordata = (obj, inputtype) => {
    console.log(inputtype);
    const newvendordata = { ...vendordata };
    newvendordata[inputtype].value = obj.target.value;
    setVendordata(newvendordata);
  };
  const saveUserData = () => {
    var url = "http://localhost:1212/vendor";
    var newuserdata = {
      name: vendordata.name.value,
      email: vendordata.email.value,
      password: vendordata.password.value,
      phone: vendordata.phone.value,
    };
    axios.post(url, newuserdata).then((response) => {
      if (response.statusText == "Created") {
        alert("registered successfully");
      }
      console.log(response);
    });
  };

  const handledata = () => {
    const userdata = { ...vendordata };
    if (userdata.name.value == "") {
      userdata.name.display = true;
      setVendordata(userdata);
    } else if (userdata.email.value == "") {
      userdata.email.display = true;
      setVendordata(userdata);
    } else if (userdata.password.value == "") {
      userdata.password.display = true;
      setVendordata(userdata);
    } else if (userdata.phone.value == "") {
      userdata.phone.display = true;
      setVendordata(userdata);
    } else {
      saveUserData(userdata);
    }
  };

  const registerLogin = () => {
    setVisible(!visible);
  };

  return (
    <div className="container-fluid register_div">
      {visible ? (
        <div className="col-lg-5">
          <h2>Vendor Register/Login</h2>
          <div className="card">
            <div className="card-body bg-light shadow rounded">
              <h5 className="card-title mb-3">Register</h5>

              <form onSubmit={handledata}>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(obj) => Handlevendordata(obj, "name")}
                    value={vendordata.name.value}
                  />
                  {vendordata.name.display ? (
                    <div style={{ color: "red", textAlign: "right" }}>
                      {vendordata.name.message}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label>E-Mail</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(obj) => Handlevendordata(obj, "email")}
                    value={vendordata.email.value}
                  />
                  {vendordata.email.display ? (
                    <div style={{ color: "red", textAlign: "right" }}>
                      {vendordata.email.message}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(obj) => Handlevendordata(obj, "password")}
                    value={vendordata.password.value}
                  />
                  {vendordata.password.display ? (
                    <div style={{ color: "red", textAlign: "right" }}>
                      {vendordata.password.message}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label>Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(obj) => Handlevendordata(obj, "phone")}
                    value={vendordata.phone.value}
                  />
                  {vendordata.phone.display ? (
                    <div style={{ color: "red", textAlign: "right" }}>
                      {vendordata.phone.message}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3 text-center">
                  <button className="btn btn-success" type="submit">
                    Register
                  </button>
                  <div>
                    Already a Member ?<a onClick={registerLogin}>Login</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-lg-3">
          <div className="card">
            <div className="card-body bg-light shadow rounded">
              <h5 className="card-title mb-3">Login</h5>

              <form onSubmit={validateLogin}>
                <div className="mb-3">
                  <label>E-Mail</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(obj) => handleLogin(obj, "email")}
                    value={logindata.email.value}
                  />
                  {logindata.email.display ? (
                    <div style={{ color: "red", textAlign: "right" }}>
                      {logindata.email.message}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(obj) => handleLogin(obj, "password")}
                    value={logindata.password.value}
                  />
                  {logindata.password.display ? (
                    <div style={{ color: "red", textAlign: "right" }}>
                      {logindata.password.message}
                    </div>
                  ) : null}
                </div>

                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                  <div>
                    Newuser?<a>register</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Vendorlogin;
