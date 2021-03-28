import styles from "./index.module.scss";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <div className={styles.root}>
      <header className={styles.logo_profile}>
        <h1>TIL</h1>
        <div>profile</div>
      </header>
    </div>
  );
}
