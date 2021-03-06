import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "utils/axios";
import { toast } from "react-toastify";
import { Animated } from "react-animated-css";
import clickSound from "assets/audios/ClickSound2.mp3";
import { motion } from "framer-motion";

// Login Page
const Login = (props) => {
  // react-hook-form component used to validate user input
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit login form function
  const onSubmit = async (data) => {
    //Login function implementation
    try {
      const { username, password } = data;
      //verify user information
      const res = await axios.post("/auth/login", { username, password });
      const jwToken = res.data;
      console.log(jwToken);
      // save jwToken in local storage
      global.auth.setToken(jwToken);
      // show login success message
      toast.success("Login Successful");
      //redirect to select algorithm page
      props.history.push("/alg");
    } catch (error) {
      console.log(error.response.data);
      const message = error.response.data.message;
      // show login failed message
      toast.error(message);
    }
  };

  function playSound() {
    new Audio(clickSound).play();
  }

  return (
    <div>
      {/* header */}
      <Animated animationIn="fadeInLeft" animationOut="bounce" isVisible={true}>
        <LoginHeader />
        <div className="login-wrapper">
          <form className="login-box" onSubmit={handleSubmit(onSubmit)}>
            <h4 className="title is-2 has-text-light">Login</h4>
            {/* username */}
            <div className="field">
              <label className="label has-text-white has-text-weight-light">
                Username
              </label>
              <div className="control">
                <input
                  className={`input is-size-5 ${
                    errors.username && "is-danger"
                  }`}
                  type="text"
                  placeholder="username"
                  name="username"
                  // username input form validation
                  {...register("username", {
                    required: "username is required", //can't be empty
                    pattern: {
                      // must start with A-Z or a-z, and be 5-20 characters in length
                      value: /^[A-Za-z][A-Za-z0-9_]{4,21}$/,
                      message: "username must start with a letter.",
                    },
                    minLength: {
                      value: 5, // at least 5 characters
                      message: "username must be at least 5 characters.",
                    },
                    maxLength: {
                      value: 20, // at most 20 characters
                      message: "username must be less than 20 characters.",
                    },
                  })}
                />
                {/* username input helper message */}
                {errors.username && (
                  <p className="helper has-text-danger">
                    {errors.username.message}
                  </p>
                )}
              </div>
            </div>
            {/* password */}
            <div className="field mb-6">
              <label className="label has-text-white has-text-weight-light">
                Password
              </label>
              <div className="control">
                <input
                  className={`input is-size-5 ${
                    errors.password && "is-danger"
                  }`}
                  type="password"
                  placeholder="password"
                  name="password"
                  // password input form validation
                  {...register("password", {
                    required: "password is required.", //can't be empty
                    minLength: {
                      value: 6, // at least 5 characters
                      message: "password must be at least 6 characters.",
                    },
                  })}
                />
                {/* password input helper message */}
                {errors.password && (
                  <p className="helper has-text-danger">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            {/* LOG In button */}
            <div className="control">
              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                className="button is-fullwidth is-primary has-text-weight-bold is-size-5 hvr-outline-out"
                onClick={() => {
                  playSound();
                }}
              >
                LOG IN
              </motion.button>
            </div>
            {/* link to register */}
            <div className="label has-text-white has-text-weight-light has-text-centered mt-2">
              <Link to="/register" className="hvr-pulse-grow">Don???t have an account? Register here</Link>
            </div>
          </form>
        </div>
      </Animated>
    </div>
  );
};

export default Login;

// Header component for login and register page
export const LoginHeader = () => {
  return (
    <div>
      <div className="back-header">
        <div className="grid">
          <div className="start">
            {/* Back to home page */}
            <Link to="/" className="hvr-skew-backward">
              <strong>
                <i className="fa-solid fa-arrow-left"></i> Back
              </strong>
            </Link>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};
