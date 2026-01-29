import React from "react";
import { useNavigate } from "react-router";

const StudentForm = () => {
  const navigate = useNavigate();

  const handleAddStudent = (e) => {
    e.preventDefault();

    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      alert("Please login to continue process..");
      localStorage.setItem("redirectAfterLogin", "/student-form");
      navigate("/login");
      return;
    }

    alert("Student added successfully!");
    navigate("/student-list");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form method="post">
            <div className="mb-3">
              <label htmlFor="std-name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="std-name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="std-rollno" className="form-label">
                Roll No.
              </label>
              <input
                type="number"
                className="form-control"
                id="std-rollno"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="std-class" className="form-label">
                Class
              </label>
              <input
                type="text"
                className="form-control"
                id="std-class"
                aria-describedby="emailHelp"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleAddStudent}
            >
              Add Data
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
