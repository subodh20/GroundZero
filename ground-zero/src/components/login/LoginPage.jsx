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
    <div className="container w-50">
      <h1 className="text-center text-primary">Welcome to Login Page</h1>
      <form onSubmit={handleLogin} className="m-2">
        <div className="form-group text-secondary">
          <label htmlFor="username ">Username</label>
          <input
            id="username"
            type="text"
            className="form-control"
            value={loginDetails.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-secondary">
          <label htmlFor="password ">Password</label>
          <input
            id="password"
            type="text"
            className="form-control"
            value={loginDetails.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="btn btn-primary m-2">Login</button>
          <span className="text-secondary">Don't have an account? </span>
          <Link to="/sign-up" className="text-decoration-none text-secondary">
            create new account?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
