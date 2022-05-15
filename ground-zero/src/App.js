import LoginPage from "./components/login/LoginPage";
import {Navigate, Route, Routes} from "react-router-dom";
import SignUpPage from "./components/login/SignUpPage";
import HomePage from "./components/dashboard/HomePage";
import Login from "./components/login/LoginPage";

function App() {
    const loggedIn = true;
    return (
        <div className="App">
                <Routes>
                    {loggedIn && <Route path="/login" element={<Navigate replace to ="/" />}></Route>}
                    {loggedIn && <Route path="/sign-up" element={<Navigate replace to ="/" />}></Route>}
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/sign-up" element={<SignUpPage />}></Route>
                    {loggedIn && <Route path="/" exact element={<HomePage />}></Route>}
                    {!loggedIn && <Route path="/"  element={<Navigate replace to ="/login" />}></Route>}
                    <Route path="/*" element={<Navigate replace to ="/" />} />
                </Routes>
        </div>
    );
}

export default App;
