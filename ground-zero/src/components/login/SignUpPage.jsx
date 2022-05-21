import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function SignUpPage() {
  const initialValue = {
    userName: "",
    userEmail: "",
    userPassword: "",
  };
  const [userInput, setUserInput] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const userInputHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(userInput));
    setIsSubmit(true);
    userInput.userName = "";
    userInput.userEmail = "";
    userInput.userPassword = "";
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userInput);
    }
  }, [formErrors, isSubmit, userInput]);
  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if (!values.userName) {
      errors.userName = "User name is required";
    }
    if (!values.userEmail) {
      errors.userEmail = "User email is required";
    } else if (regex.test(values.userEmail)) {
      errors.userEmail = "This is not a valid email format";
    }
    if (!values.userPassword) {
      errors.userPassword = "User password is required";
    } else if (values.userPassword.length < 6) {
      errors.userPassword = "Please Enter more than 6 character";
    }
    return errors;
  };
  return (
    <div className="container w-50">
      <h1 className="text-center text-primary">Welcome to Login Page</h1>
      <form onSubmit={userInputHandler} className="m-2 ">
        <div className="form-group text-secondary">
          <label htmlFor="user-name ">UserName</label>
          <input
            value={userInput.userName}
            onChange={onChangeHandler}
            className="form-control"
            id="user-name"
            type="text"
            name="userName"
          />
          <p className="text-danger">{formErrors.userName}</p>
        </div>
        <div className="form-group text-secondary">
          <label htmlFor="user-email">Email</label>
          <input
            value={userInput.userEmail}
            onChange={onChangeHandler}
            className="form-control"
            id="user-email"
            type="email"
            name="userEmail"
          />
          <p className="text-danger">{formErrors.userEmail}</p>
        </div>
        <div className="form-group text-secondary">
          <label htmlFor="user-password">Password</label>
          <input
            value={userInput.userPassword}
            onChange={onChangeHandler}
            className="form-control"
            id="user-password"
            type="password"
            name="userPassword"
          />
          <p className="text-danger">{formErrors.userPassword}</p>
        </div>
        <div>
          <button type="submit" className="btn btn-primary m-2 align-right">
            Signup
          </button>
          <Link to="/login" className="text-decoration-none text-secondary">
            Already have account?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
