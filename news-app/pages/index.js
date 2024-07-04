import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Toolbar } from "@/components/toolbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="page-container">

    <Toolbar/>

      <div className={styles.main}>
        <h1>Next.js New App</h1>

        <h3>Come here to see the latest news articles</h3>
      </div>
    </div>
  );
}
