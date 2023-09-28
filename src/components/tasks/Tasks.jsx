import React from "react";
import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";

import styles from "./Tasks.module.css";

export default function Tasks() {
  const [tasks, setTasks] = useState(false);

  const handleCheckboxChange = (event) => {
    setTasks(event.target.checked);
    console.log(tasks)
  };

  return (
    <div className={styles.tableContainer}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, borderRadius: 1 }}
          aria-label="caption table"
        >
          <caption>Completed</caption>
          <TableHead>
            <TableRow>
              <TableCell className={styles.title}>My checklist</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>
              <TableCell
                padding="checkbox"
                value={tasks}
                className={styles.checkbox}
                onChange={handleCheckboxChange}
              >
                <Checkbox />
                <Input />
              </TableCell>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
