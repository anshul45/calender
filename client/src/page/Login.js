import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setUserData } from "../utils/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const tokens = await axios.post("http://localhost:3001/api/auth", {
        code,
      });
      console.log(tokens);
    },
    flow: "auth-code",
  });

  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center ">
      <div className="flex gap-5 items-center ">
        <img className="w-7 h-7" src="" alt="logo" />
        <h1 className="text-xl font-bold text-gray-500">Login to Continue..</h1>
      </div>
      <button onClick={() => googleLogin()}>Login With Google</button>
    </div>
  );
};

export default Login;
