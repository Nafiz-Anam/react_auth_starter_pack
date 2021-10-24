import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Firebase/Hooks/useAuth";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
    // importing login methods here
    const { loginUsingGoogle, error, setUser, setError, auth } = useAuth();
    // location information
    const location = useLocation();
    const history = useHistory();
    // redirect url here
    // console.log("Came from ", location.state?.from);
    const redirect_uri = location.state?.from || "/";
    const handleLoginUsingGoogle = () => {
        loginUsingGoogle()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error);
            });
    };
    // email/password login
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                // console.log(result);
                setUser(result.user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error);
            });
    };
    return (
        <div>
            <div className="auth-error">
                <h6>{error}</h6>
            </div>
            <div className="container">
                <h1>Login Here</h1>
                <div className="login-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                        />
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Log In"
                        />
                    </form>
                </div>
                <button
                    className="btn btn-success"
                    onClick={handleLoginUsingGoogle}
                >
                    Google SignIn
                </button>
                <h1>New user?</h1>
                <Link to='/register'>
                    <button className="btn btn-info">Register Here</button>
                </Link>
            </div>
        </div>
    );
};

export default Login;
