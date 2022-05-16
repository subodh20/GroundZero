import { Link } from "react-router-dom";
import { useState } from "react";

function Login({ isLoggedIn }) {
  const userAdmin = {
    username: "admin",
    password: "admin",
  };

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      userAdmin.username === loginDetails.username &&
      userAdmin.password === loginDetails.password
    ) {
      console.log("authenticated");
      isLoggedIn(true);
    } else {
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    const account = { ...loginDetails };
    account[input.name] = input.value;
    setLoginDetails(account);
  };

  return (
    <div>
      <p>Welcome to Login Page</p>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="form-control"
            value={loginDetails.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            className="form-control"
            value={loginDetails.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
      <span>Don't have an account? </span>
      <Link to="/sign-up">create new account?</Link>
    </div>
  );
}

export default Login;
