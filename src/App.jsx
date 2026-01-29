import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Login from './components/Login';
import Signup from './components/Signup';

const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin");
  
  if (isLogin !== "true") {
    localStorage.setItem("redirectAfterLogin", window.location.pathname);
    return <Navigate to="/login" />;
  }
  
  return children;
};

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route 
          path='/student-form' 
          element={
            <ProtectedRoute>
              <StudentForm />
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/student-list' 
          element={
            <ProtectedRoute>
              <StudentList />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  )
}

export default App;