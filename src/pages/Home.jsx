import React from "react";
import Navbar from "../components/navbar/Navbar";
import Tasks from "../components/tasks/Tasks";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Tasks />
    </div>
  );
}
