import React from "react";
import "./css.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className="custom-heading">กรอกรหัสนักศึกษา</h1>
      <div>
        <input type="text" />
      </div>

      <button className="button-margin">Submit</button>
    </div>
  );
}
