import React from 'react'
import { useNavigate } from 'react-router';

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        navigate("/student-form");
    }

  return (
     <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form method="post">
            <div className="mb-3">
              <label htmlFor="std-name" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="std-name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                aria-describedby="emailHelp"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;