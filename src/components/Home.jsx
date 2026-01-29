import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/student-form");
  };

  return (
    <div
      className="container text-center mt-5"
      style={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: '10px' }}>Welcome to the Home Page</h1>
      <button type="button" className="btn btn-primary" onClick={handleAdd} style={{ padding: '8px 20px' }}>
        Add Student
      </button>
    </div>
  );
};

export default Home;
