import React from "react";
import styles from "./Tasks.module.css";

export default function Tasks() {
  return (
    <div className={styles.tableContainer}>
      <table>
        <tr className="topRow">
          <th>My checklist</th>
        </tr>
        <tr className="middleRow">
          <th>Title</th>
        </tr>
        <tr className="bottomRow">
          <th>Completed</th>
        </tr>
      </table>
    </div>
  );
}
