import React from 'react'
import { useNavigate } from 'react-router';

const Home = () => {

    const navigate = useNavigate();

    const handleAdd = () => {
        navigate('/student-form');
    }

  return (
    <div className='container text-center mt-5'>
      <h1>Welcome to the Home Page</h1>
      <button type='button' className='btn btn-primary' onClick={handleAdd}>Add Student</button>
    </div>
  )
}

export default Home;