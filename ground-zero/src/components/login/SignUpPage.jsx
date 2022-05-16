import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <form className="m-2">
      <div className="mb-3">
        <label htmlFor="user-name">UserName</label>
        <input className="form-control" id="user-name" type="text" />
      </div>
      <div className="mb-3">
        <label htmlFor="user-email">Email</label>
        <input className="form-control" id="user-email" type="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="user-password">Password</label>
        <input className="form-control" id="user-password" type="password" />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary m-2">
          Signup
        </button>
        <Link to="/login">Already have account?</Link>
      </div>
    </form>
  );
}

export default SignUpPage;
