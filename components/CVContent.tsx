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
        <li>Java expert certifications.</li>
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
