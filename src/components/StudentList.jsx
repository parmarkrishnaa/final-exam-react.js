import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateStudent,
  deleteStudent,
  getStudent,
} from "../features/user/userSlice.js";

const StudentList = () => {
  const { students } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudent());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <table className="table table-bordered table-dark table-hover table-responsive table-striped caption-top text-center">
            <caption>
              <h2>Student Details</h2>
            </caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Student Roll No.</th>
                <th>Student Class</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students && students.length > 0 ? (
                students.map((std, index) => (
                  <tr key={std.id}>
                    <td>{index + 1}</td>
                    <td>{std.name}</td>
                    <td>{std.rollNo}</td>
                    <td>{std.stdClass}</td>
                    <td>
                      <button
                        className="btn btn-warning me-2"
                        onClick={() =>
                          dispatch(updateStudent({ id: std.id, data: std }))
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(deleteStudent(std.id))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>Data not available!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
