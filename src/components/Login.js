import { useContext, useRef } from "react";
import AuthContext from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const userName = useRef("");
    const password = useRef("");
    const { login } = useContext(AuthContext)

    const loginSubmit = async () => {
        let payload = {
            user: userName.current.value,
            password: password.current.value
        }
        let response = await login(payload);
        if (response.status === 200) {
            navigate('/admin');
        } else {
            console.log(response)
        }
    };
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <legend>Login Form</legend>
                        <form>
                            <div className="form-group mb-3">
                                <label className="form-label">User</label>
                                <input type="text" className="form-control" id="userName" placeholder="jcaceres" ref={userName}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="userPass" ref={password}/>
                            </div>
                            <button className="btn btn-primary" type="button" onClick={loginSubmit}>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;