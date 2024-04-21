import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function IndexPage() {
  const [message, setMessage] = useState("Loading...");
  const [text, setText] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/welcome")
      .then((response) => {
        console.log(response);
        setMessage(response.data.message);
        setText(response.data.text);
      })
      .catch((error) => {
        console.error("Error fetching message:", error);
      });
  }, []); // 空的依賴數組確保此效果只運行一次

  return (
    <div id="container">
      <h1 id="message">{message}</h1>
      <h2 id="text">{text}</h2>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </div>
  );
}

export default IndexPage;
