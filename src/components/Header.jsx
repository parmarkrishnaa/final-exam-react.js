import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const login = localStorage.getItem("isLogin");
    const user = localStorage.getItem("currentUser");
    
    if (login === "true" && user) {
      setIsLogin(true);
      setCurrentUser(JSON.parse(user));
    } else {
      setIsLogin(false);
      setCurrentUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("currentUser");
    setIsLogin(false);
    setCurrentUser(null);
    alert("✅ Logged out successfully!");
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              📚 SMS
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                {isLogin && (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/student-form">
                        Add Student
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/student-list">
                        View Student
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
              <div className="d-flex align-items-center gap-3">
                {isLogin ? (
                  <>
                    <span className="navbar-text">
                      👤 <strong>{currentUser?.username}</strong>
                    </span>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink to="/login" className="btn btn-primary btn-sm me-2">
                      Login
                    </NavLink>
                    <NavLink to="/signup" className="btn btn-success btn-sm">
                      Sign Up
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;