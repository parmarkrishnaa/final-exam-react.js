import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Login from './components/Login';
import StudentDetails from './components/StudentDetails';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/student-form' element={<StudentForm />} />
        <Route path='/student-list' element={<StudentList />} />
        <Route path='/student-detail' element={<StudentDetails />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App;