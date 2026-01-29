import React from 'react'

const StudentDetails = () => {
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
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>12345</td>
                        <td>10th Grade</td>
                        <td>Edit/Delete</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>12345</td>
                        <td>10th Grade</td>
                        <td>Edit/Delete</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>12345</td>
                        <td>10th Grade</td>
                        <td>Edit/Delete</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails;