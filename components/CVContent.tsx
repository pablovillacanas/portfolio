/* eslint-disable @typescript-eslint/no-empty-function */
import Link from "next/link";
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
        <li>Focused on delivery.</li>
      </ul>
      <Link
        href="./CV-PabloVillacanas.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button text={"Download the full CV"} onClick={() => {}}></Button>
      </Link>
    </div>
  );
};

export default CVContent;
