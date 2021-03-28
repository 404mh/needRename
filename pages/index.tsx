import styles from "./index.module.scss";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <div className={styles.root}>
      <header className={styles.logo_profile}>
        <h1>TIL</h1>
        <div>profile</div>
      </header>

      <section className={styles.til_submit_section}>
        <label htmlFor="story">Tell us your story:</label>

        <textarea id="story" name="story" rows={10} placeholder={"Write down your today..."} />

        <button>submit</button>
        {/* <input type="submit">ㅊ</input> */}
      </section>
    </div>
  );
}
