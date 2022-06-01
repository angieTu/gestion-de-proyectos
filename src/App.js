import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import List from "./views/List/List";
import EditProject from "./views/EditProject/EditProject";
import AddProject from "./views/AddProject/AddProject";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list" />} />
      <Route path="/list" element={<List />} />
      <Route path="/add" element={<AddProject />} />
      <Route path="/add/:ID" element={<EditProject />} />
    </Routes>
  );
};
