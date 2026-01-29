// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { editUser, deleteUser, getUser } from "../features/user/userSlice.js";

// const StudentDetails = () => {
//   const [users, setUsers] = useState([]);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getUser());

//   }, [])

//   // useEffect(() => {
//   //   fetch('http://localhost:3000/users')
//   //     .then((res) => res.json())
//   //     .then((data) => setUsers(data));
//   // }, [])

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-7">
//           <table className="table table-bordered table-dark table-hover table-responsive table-striped caption-top text-center">
//             <caption>
//               <h2>Student Details</h2>
//             </caption>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Student Name</th>
//                 <th>Student Roll No.</th>
//                 <th>Student Class</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.length > 0 ? (
//                 users.map((user, index) => {
//                   const { username, password, id } = user;
//                   return (
//                     <tr key={id}>
//                       <td>{index + 1}</td>
//                       <td>{username}</td>
//                       <td>{password}</td>
//                       <td>
//                         <button
//                           className="btn btn-warning btn-sm"
//                           onClick={() => dispatch(editUser())}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="btn btn-danger btn-sm"
//                           onClick={() => dispatch(deleteUser())}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td className="text-center" colSpan="5">
//                     No Users Found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDetails;
