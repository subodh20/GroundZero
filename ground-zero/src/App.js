import LoginPage from "./components/login/LoginPage";
import {Navigate, Route, Routes} from "react-router-dom";
import SignUpPage from "./components/login/SignUpPage";
import HomePage from "./components/dashboard/HomePage";
import {useState} from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleIsLoggedIn = isLoggedIn => {
        setIsLoggedIn(isLoggedIn);
    }
    return (
        <div className="App">
            <Routes>
                {isLoggedIn && <Route path="/login" element={<Navigate replace to="/"/>}></Route>}
                {isLoggedIn && <Route path="/sign-up" element={<Navigate replace to="/"/>}></Route>}
                <Route path="/login" element={<LoginPage isLoggedIn={handleIsLoggedIn}/>}></Route>
                <Route path="/sign-up" element={<SignUpPage/>}></Route>
                {isLoggedIn && <Route path="/" exact element={<HomePage/>}></Route>}
                {!isLoggedIn && <Route path="/" element={<Navigate replace to="/login"/>}></Route>}
                <Route path="/*" element={<Navigate replace to="/"/>}/>
            </Routes>
        </div>
    );
}

export default App;
