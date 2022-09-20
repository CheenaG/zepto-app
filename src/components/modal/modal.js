import React from "react";
import axios from "axios";
import { useState } from "react";
import "./modal.css";

import { Modal, Button } from "react-bootstrap";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  const handleUserdata = (e, value) => {
    //console.log(e,"hello");
    const newuser = { ...user };
    newuser[value] = e.target.value;
    setUser(newuser);
  };

  const handleInputs = () => {
    var url = "http://localhost:1212/userlist";

    axios
      .post(url, user)

      .then((response) => {
        setMessage(user.name + " " + "save successfully!");
        setUser({ name: "", phone: "", email: "", gender: "", address: "" });
      });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Connect Here
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customer Query Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img_user" src="/images/user.png" />
          <p>{message}</p>
          <p>
            Customer Name
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              onChange={(e) => handleUserdata(e, "name")}
              value={user.name}
            />
          </p>
          <p>
            Email
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              onChange={(e) => handleUserdata(e, "email")}
              value={user.email}
            />
          </p>
          <p>
            Phone
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              onChange={(e) => handleUserdata(e, "phone")}
              value={user.phone}
            />
          </p>
          <p>
            Gender
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              onChange={(e) => handleUserdata(e, "gender")}
              value={user.gender}
            />
          </p>
          <p>
            {" "}
            Address
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              onChange={(e) => handleUserdata(e, "address")}
              value={user.address}
            />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleInputs}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Form;
