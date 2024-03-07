import Image from "next/image";
import styles from "./page.module.css";
import AddUser from "./component/AddUser";

// import { useState } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="hotel">
        <AddUser name={"Hotel State"} />
        <AddUser name={"Hotel City"} />
        <AddUser name={"Hotel Pincode"} />
        <AddUser name={"Hotel Latitute"} />
      </div>
    </main>
  );
}
