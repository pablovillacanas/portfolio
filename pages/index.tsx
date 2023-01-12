import Head from "next/head";
import React from "react";
import App from "../components/App";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="main" style={{ height: "100%" }}>
        <Head>
          <title>Pablo Villacañas</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <App></App>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
