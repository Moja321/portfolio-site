import "../sass/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  const URL = process.env.REACT_APP_MESSAGE_URL;
  //const URL = "http://localhost:3004/message";
  //const URL = "https://umarportfolio-be.onrender.com/message/";
  //const loginURL = process.env.REACT_APP_BACKEND_LOGIN_URL;

  const [newForm, setNewForm] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleChange = (event) => {
    const value = { ...newForm, [event.target.name]: event.target.value };
    setNewForm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createMessage(newForm);
    setNewForm({
      name: "",
      email: "",
      msg: "",
    });
  };

  //POST|Create
  const createMessage = async (newForm) => {
    console.log("message :" + newForm);
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    });
    //update list of origami
    //getOrigami();
  };

  return (
    <div className="contact" style={{ height: "120vh", marginTop: "30px" }}>
      <div className="contact-intro" style={{paddingLeft: "5%", paddingRight: "5%" }}>
        <h4>Feel free to download my CV via the button below:</h4>
        <br />
        <a
        href="https://drive.google.com/file/d/1hSGv9cQKsLzeOeF_a6OxD3sYZx9asc3y/view"
        className="btn btn-success"
        target="_blank"
        rel="noreferrer"
        >
          Download CV
        </a>
        <br />
        <br />
        <h4>You can contact me at umarroshidi@yahoo.com</h4>
        <br />
        <h4>Or alternatively you can drop me a message via the form below:</h4>
        <br />
        <br />
      </div>
      <div id="function-example">
        <section className="form-style">
          <br />
          <h4 style={{ color: "white" }}>Send me a message!</h4>
          <br />
          <div className="container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="mb-3" style={{ color: "white" }}>
                Name :{" "}
              </label>
              <input
                style={{ width: "300px", borderRadius: "5px" }}
                type="text"
                name="name"
                value={newForm.name}
                placeholder="Name"
                onChange={handleChange}
                required
              />
              <br />
              <label
                htmlFor="email"
                className="mb-3"
                style={{ color: "white" }}
              >
                Email :{" "}
              </label>
              <input
                style={{ width: "300px", borderRadius: "5px" }}
                type="email"
                name="email"
                value={newForm.email}
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="msg" className="mb-3" style={{ color: "white" }}>
                Message :
              </label>
              <br />
              <textarea 
                className="contact-textarea"
                style={{ height: "150px", width: "600px" }}
                name="msg"
                value={newForm.msg}
                placeholder="Enter message"
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <button type="submit" className="btn btn-success">
                Post Message
              </button>
              <br />
              <br />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
