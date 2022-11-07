import React from "react";
import App from "../components/App";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="main" style={{ height: "100%" }}>
        <App></App>
      </div>
    </div>
  );
}
