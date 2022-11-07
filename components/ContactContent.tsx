import React from "react";
import Button from "./Button";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const ContactContent = () => {
  return (
    <div>
      <p>
        Don't hesitate to get in touch!. You can mail me directly or reach me in
        my professional social networks :)
      </p>
      <Button
        text={"Mail me!"}
        onClick={() => {
          location.href =
            "mailto:pablo.villacanas@gmail.com" +
            "&subject=" +
            "Hi!" +
            "&body=" +
            "";
        }}
      ></Button>
      <div
        style={{
          display: "flex",
          gap: "1em",
          alignItems: "center",
          margin: "1em 0em",
          cursor: "pointer",
        }}
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/pablo-villacanas/",
            "_newtab"
          );
        }}
      >
        <BsLinkedin size={32} />
        <span>Reach me on Linkedin</span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1em",
          alignItems: "center",
          marginBottom: "1em",
          cursor: "pointer",
        }}
        onClick={() => {
          window.open("https://github.com/pablovillacanas", "_newtab");
        }}
      >
        <BsGithub size={32} />
        <span>Github</span>
      </div>
    </div>
  );
};

export default ContactContent;
