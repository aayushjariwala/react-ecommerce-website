import React, { useState } from 'react';
import './css/LoginSignup.css';

const LoginSignup = () => {
    const [state, setState] = useState("Login");

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    });

    const [agree, setAgree] = useState(false); // State to handle terms agreement

    const login = async () => {
        try {
            const response = await fetch("http://localhost:4000/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const responseData = await response.json();
            console.log(responseData);

            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace("/"); // Redirect to home or dashboard page
            } else {
                alert(responseData.errors || "Login failed"); // Display error message from server or default message
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Error during login. Please try again.");
        }
    };

    const signup = async () => {
        try {
            const response = await fetch("http://localhost:4000/signup", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const responseData = await response.json();

            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace("/");
            } else {
                alert(responseData.error); // Display error message from server
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Error during signup. Please try again.");
        }
    };

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAgreeChange = (e) => {
        setAgree(e.target.checked);
    };

    const handleSubmit = () => {
        if (!agree) {
            alert("You must agree to the terms of use & privacy policy.");
            return;
        }
        state === "login" ? login() : signup();
    };

    return (
        <>
            <div className="loginsignup">
                <div className="loginsignup-container">
                    <h1>{state}</h1>
                    <div className="loginsignup-fields">
                        {state === "sign up" && (
                            <input
                                name="username"
                                value={formData.username}
                                onChange={changeHandler}
                                type='text'
                                placeholder='Your Name'
                            />
                        )}
                        <input
                            type='email'
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            placeholder='Your Email'
                        />
                        <input
                            type='password'
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder='Your Password'
                        />
                    </div>
                    <button className='loginsignup-button' onClick={handleSubmit}>
                        Continue
                    </button>
                    {state === "sign up" ? (
                        <p className='loginsignup-login'>
                            Already have an account?{" "}
                            <span className='clickhere' onClick={() => { setState("login") }}>
                                Login here
                            </span>
                        </p>
                    ) : (
                        <p className='loginsignup-login'>
                            Create an account{" "}
                            <span className='clickhere' onClick={() => { setState("sign up") }}>
                                Click Here
                            </span>
                        </p>
                    )}
                    <div className="loginsignup-agree">
                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={handleAgreeChange}
                        />
                        <p>By continuing, I agree with the terms of use & privacy policy</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginSignup;
