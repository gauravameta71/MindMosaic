"use client"
import Link from 'next/link';
import React, { useState } from "react";

// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '@/firebase';/

const page = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //   const router = useRouter();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Store user data in localStorage
  //   const users = JSON.parse(localStorage.getItem("users") || "[]");
  //   const newUser = { username, email, password };
  //   users.push(newUser);
  //   localStorage.setItem("users", JSON.stringify(users));

  //   // Clear form fields
  //   setUsername("");
  //   setEmail("");
  //   setPassword("");

  //   router.push("/log-in");
  // };


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/">
            <img
              className="mx-auto h-10 w-auto"
              src="/assets/logo.png"
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up to your account
          </h2>
        </div>

        <div className="flex justify-center m-4">
          <div className="px-6 sm:px-0 max-w-sm">
            <a href="/log-in">
              <button
                type="button"
                className="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center  dark:focus:ring-[#4285F4]/55 mr-2 mb-2 sm:mr-0 sm:mb-0"
              >
                Log In<div></div>
              </button>
            </a>
          </div>
        </div>
        <span className="text-gray-200 flex justify-center">or</span>

        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        > */}
          <div>

          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your Email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                placeholder="Enter your Email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password Again
              </label>
            </div>
            <div className="mt-2">
              <input
                id="passwordaAgain"
                name="passwordAgain"
                type="password"
                autoComplete="current-password"
                placeholder="********"
                required
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                // value={password}
                onChange={(e) => setPasswordAgain(e.target.value)}
              />
            </div>
          </div>

          <div>
          <button
                disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
                onClick={() => signup()}
                className=" flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign Up
              </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
}

export default page
