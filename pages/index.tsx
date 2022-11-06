import React from "react";
import App from "../components/App";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <App></App>
      </main>
    </div>
  );
}
