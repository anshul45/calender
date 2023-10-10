import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center ">
      <div className="flex gap-5 items-center ">
        <img className="w-7 h-7" src="" alt="logo" />
        <h1 className="text-xl font-bold text-gray-500">Login to Continue..</h1>
      </div>
      <div>
        <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span className="text-gray-500">Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
