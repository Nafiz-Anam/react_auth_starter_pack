import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Firebase/Hooks/useAuth";

const Register = () => {
    const { auth, setUser, setError } = useAuth();
    // location information
    const location = useLocation();
    const history = useHistory();
    // redirect url here
    // console.log("Came from ", location.state?.from);
    const redirect_uri = location.state?.from || "/";
    // email/password registration
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        // update profile info here
        const updateProfileData = () => {
            updateProfile(auth.currentUser, {
                displayName: data.name,
            }).then((res) => {});
        };
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((result) => {
                // console.log(result);
                setUser(result.user);
                updateProfileData();
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error);
            });
    };

    return (
        <div>
            <h1>Register Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                        required: true,
                        maxLength: 25,
                    })}
                />
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
                    value="Register"
                />
            </form>
        </div>
    );
};

export default Register;
