import React from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import { Header } from "./components/Header/Header";

export default function App() {
  return (
    <div className="App container border">
      <Header />
      <EmployeeList />
    </div>
  );
}
