import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserDataContext } from "../../../context";
import { yupResolver } from "@hookform/resolvers/yup";

import { TnafosLogo } from "../../../assets/icons/svg";
import RegisterImage from "../../../assets/images/register.jpg";

import { registerValidationSchema } from "../../../validations";
import { apiRegister } from "../../../api";

export const Register = () => {
  const history = useHistory();

  const { tokenProviderValue } = useContext(UserDataContext);
  const { setUserToken } = tokenProviderValue;

  const [errorRes, setErrorRes] = useState(null);

  const formOptions = { resolver: yupResolver(registerValidationSchema) };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(formOptions);

  const onSubmitFormHandler = async (data, e) => {
    e.preventDefault();
    const res = await apiRegister(data);
    console.log(res);
    if (res.success) {
      setUserToken(res.token);
      history.push("/dashboard");
    } else {
      setErrorRes(res.error);
    }
  };

  return (
    <div className="grid grid-cols-2">
      <div
        className="w-full h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${RegisterImage})` }}
      >
        <div className="relative grid justify-center w-1/2 grid-cols-1 mt-48 ml-56">
          <div className="absolute inset-0 mx-5 h-36">
            <TnafosLogo />
          </div>
          <div className="w-1/2 mt-44">
            <h3 className="flex justify-center text-5xl font-extrabold text-white">
              tnafos تنافس{" "}
            </h3>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1">
        <div className="flex items-end ml-10 font-medium">
          <h3 className="flex mt-20 text-3xl font-bold text-yellow-400 ml-28">
            Register
          </h3>
        </div>

        <form
          className="grid justify-center w-full gap-1 mt-5"
          onSubmit={handleSubmit(onSubmitFormHandler)}
        >
          <div className="flex flex-row gap-x-4">
            <label className="w-32 text-right">First Name :</label>
            <input
              className="inline-block h-10 px-2 border-2 rounded-lg focus:outline-none focus:ring-4 ring-opacity-25 ring-yellow-200 w-80"
              type="text"
              name="first_name"
              required
              autoComplete="off"
              autoFocus="on"
              {...register("first_name")}
            />
            <p>{errors.first_name?.message}</p>
          </div>

          <div className="flex flex-row gap-x-4">
            <label className="w-32 text-right">Last Name :</label>
            <input
              className="inline-block h-10 px-2 border-2 rounded-lg focus:outline-none focus:ring-4 ring-opacity-25 ring-yellow-200 w-80"
              type="text"
              name="last_name"
              required
              autoComplete="off"
              {...register("last_name")}
            />
            {errors.last_name?.message} {errorRes?.errors?.last_name}
          </div>

          <div className="flex flex-row gap-x-4">
            <label className="w-32 text-right">Mobile:</label>
            <div className="relative flex flex-row">
              <div className="absolute w-16 h-10 px-3 py-2 bg-gray-300 rounded-tl-lg rounded-bl-lg">
                <span className="flex content-center justify-center text-sm text-gray-600 rounded-tl-lg rounded-bl-lg">
                  +966
                </span>
              </div>
              <div>
                <input
                  className="inline-block w-64 h-10 px-2 ml-16 border-2 rounded-tr-lg rounded-br-lg focus:outline-none focus:ring-4 ring-opacity-25 ring-yellow-200"
                  type="text"
                  name="phone_number"
                  required
                  autoComplete="off"
                  {...register("phone_number")}
                />
              </div>
            </div>
          </div>
          <p>{errors.phone_number?.message}</p>
          <p>
            {errorRes?.errors?.phone_number.map((e) => (
              <h6>{e}</h6>
            ))}
          </p>

          <div className="flex flex-row gap-x-4">
            <label className="w-32 text-right">Email :</label>
            <input
              className="inline-block h-10 px-2 border-2 rounded-lg focus:outline-none focus:ring-4 ring-opacity-25 ring-yellow-200 w-80"
              type="email"
              name="email"
              required
              autoComplete="off"
              {...register("email")}
            />
            <p>
              {errors.email?.message} {errorRes?.errors?.email}
            </p>
          </div>

          <div className="flex flex-row gap-x-4">
            <label className="w-32 text-right">Password :</label>
            <input
              className="inline-block h-10 px-2 border-2 rounded-lg focus:outline-none focus:ring-4 ring-opacity-25 ring-yellow-200 w-80"
              type="password"
              name="password"
              required
              autoComplete="off"
              {...register("password")}
            />
          </div>
          <p>{errors.password?.message}</p>
          <p>
            {errorRes?.errors?.password.map((e) => (
              <h6>{e}</h6>
            ))}
          </p>

          <div className="flex flex-row gap-x-4">
            <label className="w-32 text-right">Confirm Password:</label>
            <input
              className="inline-block h-10 px-2 border-2 rounded-lg focus:outline-none focus:ring-4 ring-opacity-25 ring-yellow-200 w-80"
              type="password"
              name="password_confirmation"
              required
              autoComplete="off"
              {...register("password_confirmation")}
            />
            <p>{errors.password_confirmation?.message}</p>
          </div>

          <button
            className="w-24 py-1 mb-20 text-lg text-white bg-yellow-400 rounded-lg ml-36 hover:bg-yellow-500"
            type="submit"
          >
            Register
          </button>
          <span className="flex flex-row justify-center text-blue-500">
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-600 hover:underline"
            >
              Alredy have an account? sign in
            </Link>
          </span>
        </form>
        <p>{errorRes?.message}</p>
      </div>
    </div>
  );
};
