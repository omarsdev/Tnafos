/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export const Login = () => {
  // const { userTokenProvider } = useContext(UserContextProvider);
  // const [userToken, setUserToken] = userTokenProvider;
  // const [loading, setLoading] = useState(true);
  // const history = useHistory();
  // const [User, setUser] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [error, setError] = useState("");

  // //* for the checkbox state:
  // const [check, setCheck] = useState(false);

  // //* redistracting the state at the top of the other next funcs,so we can use them in multiple places.
  // const { email, password } = User;

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser({ ...User, [name]: value });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await handleLogin(User);
  //     console.log(response, "user-token");

  //     //* in case user clicked on (Remember me):
  //     setUserToken(response);

  //     //* in case the user didn't enter (Remember me) button:
  //     setUserSession(response);
  //     history.push("/dashboard");
  //   } catch (error) {
  //     if (error.response.message === 401 || error.response.message === 400) {
  //       setError(error.response);
  //     } else {
  //       setError("Something went wrong. Please try again later.");
  //     }
  //   }
  // };

  return (
    <div className="grid grid-cols-2">
      <div
        className="w-full h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('../imgs/sign.jpg')" }}
      >
        <div className="relative grid justify-center w-1/3 grid-cols-1 mt-48 ml-64">
          <img
            src="imgs/Tnafos-logo.svg"
            alt="tanafos-logo"
            className="inset-0 h-36"
          />
          <div className="w-1/2 mt-4">
            <h3 className="flex justify-center text-5xl font-extrabold text-white">
              tnafos تنافس{" "}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full ml-10 h-72 justify-items-center mt-44">
        <div className="flex items-end ml-10 font-medium">
          <h3 className="flex mt-20 text-3xl font-bold text-yellow-400">
            Sign In
          </h3>
        </div>

        <form
          className="grid w-full gap-4 mt-5"
          // onSubmit={(ev) => handleSubmit(ev)}
        >
          <div className="flex flex-row gap-x-4">
            <label className="w-32 text-right">E-mail Address :</label>
            <input
              className="inline-block h-10 px-2 border-2 rounded-lg focus:outline-none focus:ring-4 ring-opacity-25 ring-yellow-200 w-80"
              type="email"
              name="email"
              // value={email}
              required
              // onChange={(ev) => handleChange(ev)}
              autoComplete="off"
              autoFocus="on"
            />
          </div>

          <div className="flex flex-row gap-x-4">
            <label className="w-32 text-right">Password :</label>
            <input
              className="inline-block h-10 px-2 border-2 rounded-lg focus:outline-none focus:ring-4 ring-opacity-25 ring-yellow-200 w-80"
              type="password"
              name="password"
              // value={password}
              required
              // onChange={(ev) => handleChange(ev)}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-row items-center gap-2 ml-36">
            <input
              className="p-1 mx-1 border-black"
              type="checkbox"
              // value={check}
              // onChange={(e) => {
              //   setCheck(e.target.checked);
              // }}
            />
            <label className=""> Remember Me </label>
          </div>

          <div className="px-2 ml-32">
            {/* <Link to="/dashboard/createcompany"> */}
            <button
              type="submit"
              // value={loading ? "loading..." : "Login"}
              className="w-1/6 py-3 text-white bg-yellow-400 rounded-lg hover:bg-yellow-500"
            >
              Login
            </button>
            {/* </Link> */}
            <Link
              to="#"
              className="p-2 mx-3 text-blue-400 hover:text-blue-600 hover:underline"
            >
              Forget Your Password ?
            </Link>
          </div>

          <div className="flex justify-center mt-40">
            <span>
              <Link
                to="/register"
                className="text-blue-400 hover:text-blue-600 hover:underline"
              >
                Don't have an account?sign up for free!
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
