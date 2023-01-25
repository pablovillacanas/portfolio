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
          <meta
            name="title"
            content="Pablo Domínguez Villacañas freelance full-stack developer"
          ></meta>
          <meta
            name="description"
            content="Pablo Dominguez Villacañas is a freelance full-stack developer based in Spain"
          ></meta>
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
