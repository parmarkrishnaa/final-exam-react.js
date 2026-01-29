import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addStudent, getStudent } from "../features/user/userSlice";

const StudentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    stdClass: "",
  });

  // Check login status when component mounts
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin !== "true") {
      alert("Please login first to add students!");
      localStorage.setItem("redirectAfterLogin", "/student-form");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();

    // ✅ Validate all fields are filled
    if (!formData.name || !formData.rollNo || !formData.stdClass) {
      alert("Please fill all fields!");
      return;
    }

    // ✅ Add student to Redux store and db.json
    dispatch(addStudent(formData))
      .then((result) => {
        if (result.payload) {
          alert("✅ Student added successfully!");
          setFormData({
            name: "",
            rollNo: "",
            stdClass: "",
          });
          // Refresh student list after adding
          dispatch(getStudent());
          navigate("/student-list");
        } else {
          alert("❌ Failed to add student!");
        }
      })
      .catch((error) => {
        alert("❌ Error adding student: " + error);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleAddStudent}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Roll No.</label>
              <input
                type="number"
                className="form-control"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Class</label>
              <input
                type="text"
                className="form-control"
                name="stdClass"
                value={formData.stdClass}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Add Data
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
