import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { editStudent, deleteStudent, getStudent } from "../features/user/userSlice.js";

const StudentList = () => {

    const [students, setStudents] = useState([]);

    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudent());
    setStudents({});
  }, [])

  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-7">
            <table className='table table-bordered table-dark table-hover table-responsive table-striped caption-top text-center'>
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
                    {
                        students.length > 0
                        ?
                        students.map((std, index) => {
                            const { name, rollNo, stdClass, id} = std;
                            return (
                                <tr key={id}>
                                    <td>{index + 1}</td>
                                    <td>{name}</td>
                                    <td>{rollNo}</td>
                                    <td>{stdClass}</td>
                                    <td>
                                        <button type='button' className='btn btn-warning' onClick={() => dispatch(editStudent())}>Edit</button>
                                        <button type='button' className='btn btn-danger' onClick={() => dispatch(deleteStudent())}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        <tr>
                            <td className='text-center' colSpan={5}>Data not available!</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default StudentList;