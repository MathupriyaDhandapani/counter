import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Counter from "@/components/counter/counter";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Counter/>
      </div>

      <div className={styles.center}>
        
      </div>

      <div className={styles.grid}>
      
      </div>
    </main>
  );
}
