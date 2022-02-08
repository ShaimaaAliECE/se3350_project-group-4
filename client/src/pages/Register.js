import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "utils/axios";
import { toast } from "react-toastify";
// import header area sub component
import RegisterHeader from "components/BackBtnHeader";

// Register Page
const Register = (props) => {
  // react-hook-form component used to validate user input
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // watching password to make sure the passwords match
  const password = useRef({});
  password.current = watch("password", "");

  // submit login form function
  const onSubmit = async (data) => {
    //register function implementation
    try {
      const { username, password } = data;
      const res = await axios.post("/auth/register", {
        username,
        password,
        type: 0,
      });
      console.log(res.data);
      const jwToken = res.data;
      console.log(jwToken);
      global.auth.setToken(jwToken);
      toast.success("Register Success");
      //redirect to home page
      props.history.push("/alg");
    } catch (error) {
      const message = error.response.data.message;
      toast.error(message);
    }
  };

  return (
    <div>
      {/* header */}
      <RegisterHeader />
      <div className="login-wrapper">
        <form className="login-box" onSubmit={handleSubmit(onSubmit)}>
          <h4 className="title is-2 has-text-light">Create Account</h4>
          {/* username */}
          <div className="field">
            <label className="label has-text-white has-text-weight-light">
              Username
            </label>
            <div className="control">
              <input
                className={`input is-size-5 ${errors.username && "is-danger"}`}
                type="text"
                placeholder="username"
                name="username"
                // username input form validation
                {...register("username", {
                  required: "you must specify a username", //can't be empty
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
          <div className="field">
            <label className="label has-text-white has-text-weight-light">
              Password
            </label>
            <div className="control">
              <input
                className={`input is-size-5 ${errors.password && "is-danger"}`}
                type="password"
                placeholder="password"
                name="password"
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
          {/* confirm password */}
          <div className="field mb-6">
            <label className="label has-text-white has-text-weight-light">
              Confirm Password
            </label>
            <div className="control">
              <input
                className={`input is-size-5 ${errors.confirm && "is-danger"}`}
                type="password"
                placeholder="confirm password"
                name="confirm"
                {...register("confirm", {
                  required: "please re-enter your password.", //can't be empty
                  validate: {
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match.",
                  },
                })}
              />
              {/* repeat password input helper message */}
              {errors.confirm && (
                <p className="helper has-text-danger">
                  {errors.confirm.message}
                </p>
              )}
            </div>
          </div>
          {/* Register button */}
          <div className="control">
            <button className="button is-fullwidth is-primary has-text-weight-bold is-size-5">
              REGISTER
            </button>
          </div>
          {/* link to Login */}
          <div className="label has-text-white has-text-weight-light has-text-centered mt-2">
            <Link to="/login">Already have an account? Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
