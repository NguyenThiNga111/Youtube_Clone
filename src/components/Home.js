import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationButton from "../components/NavigationButton";
import image from "../images/1.jpg";
import "../App.css";

function Home() {
  const author = "NGUYEN THI NGA";
  const dateOfBirth = "03/01/2003";
  const address = "Binh Thuy district, Can Tho city";
  const email = "ngantcs171351@fpt.edu.vn";
  const phone = "0795486956";
  const summary =
    "I am a 3rd year student at FPT Can Tho University and my major is software development.";

  return (
    
    <div className="container-fluid">
      <div className="row full-height">
        <div className="col-lg-4 full-height p-3 text-white d-flex justify-content-center align-items-center background-container">
          <div className="avatar-container">
            <img src={image} className="avt rounded-circle" />
          </div>
        </div>
        <div className="col-lg-8 full-height p-3">
          <h2>Personal Information</h2>
          <ul>
            <li>
              <strong>Full name:</strong> {author}
            </li>
            <li>
              <strong>Date of Birth:</strong> {dateOfBirth}
            </li>
            <li>
              <strong>Address:</strong> {address}
            </li>
            <li>
              <strong>Email:</strong> {email}
            </li>
            <li>
              <strong>Phone:</strong> {phone}
            </li>
          </ul>
          <h2>Summary   <NavigationButton/></h2>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
