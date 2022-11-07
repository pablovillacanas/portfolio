import React from "react";
import Button from "./Button";

const CVContent = () => {
  return (
    <div style={{ fontSize: "1.3em" }}>
      <p>At a glance:</p>
      <ul>
        <li>High skills in React and frontend.</li>
        <li>Medium skills in Backend (Rails, Nodejs).</li>
        <li>Experience in Kubernetes and CI/CD.</li>
        <li>
          <a
            href="https://www.credly.com/badges/f4a464fd-42a2-410d-9711-822e6afc42ba/public_url"
            target={"_blank"}
            style={{ color: "#9FC131" }}
          >
            Java expert certification
          </a>
        </li>
        <li>Agile development.</li>
        <li>Soft skill (leadership and teamwork).</li>
      </ul>
      <Button
        text={"Download the full CV"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></Button>
    </div>
  );
};

export default CVContent;
