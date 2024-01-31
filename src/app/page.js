import Counter from "../components/counter/counter";
import styles from "./page.module.css";
import React from "react";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className="page">
        <Counter/>
      </div>

      {/* <div className={styles.center}>
        
      </div>

      <div className={styles.grid}>
      
      </div> */}
    </main>
  );
}
