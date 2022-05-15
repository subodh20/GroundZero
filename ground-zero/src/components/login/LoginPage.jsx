import {Link} from "react-router-dom";

function Login() {
    return <div>
        <p>Welcome to Login Page</p>
        <span>Don't have an account? </span><Link to="/sign-up">create new account?</Link>
    </div>
}

export default Login;