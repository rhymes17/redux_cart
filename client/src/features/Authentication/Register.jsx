import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, setError } from "./authReducer";

const Register = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isLoading, user, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    //validate passwords
    if (password !== confirmPassword) {
      dispatch(setError({ message: "Passwords does not match" }));
      return;
    }

    const user = {
      username,
      fullname,
      password,
      email,
    };

    dispatch(registerUser(user)).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="">
      <p className="text-amber-500 text-[1.7rem]">Register</p>
      <div className="mt-3 flex flex-col gap-3 relative">
        <form className="flex flex-col gap-5" onSubmit={submitHandler}>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              value={username}
              className="bg-transparent border border-white px-2 py-2 text-sm rounded-md focus:outline-none placeholder:text-sm placeholder:text-gray-400 "
              placeholder="Choose username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="text"
              value={fullname}
              className="bg-transparent border border-white px-2 py-2 text-sm rounded-md focus:outline-none placeholder:text-sm placeholder:text-gray-400 "
              placeholder="Enter Fullname"
              onChange={(e) => setFullname(e.target.value)}
            />

            <input
              type="email"
              value={email}
              className="bg-transparent border  border-white px-2 py-2 text-sm rounded-md focus:outline-none placeholder:text-sm placeholder:text-gray-400 invalid:border-pink-500"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <input
              type="password"
              value={password}
              className="bg-transparent border  border-white px-2 py-2 text-sm rounded-md focus:outline-none placeholder:text-sm placeholder:text-gray-400 "
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <input
              type="password"
              value={confirmPassword}
              className="bg-transparent border  border-white px-2 py-2 text-sm rounded-md focus:outline-none placeholder:text-sm placeholder:text-gray-400 "
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          {/* buttons */}
          <div className="text-center flex flex-col gap-2">
            <button className="bg-gradient-to-r from-[#671D92]  to-[#f45b02] w-full py-2 rounded-lg font-[300] ">
              Register
            </button>

            <p className="text-sm font-[300] text-white/95">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-cyan-500 underline hover:text-white ani">
                  Log In
                </span>
              </Link>
            </p>
          </div>
        </form>
        {isError && <p className="text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
