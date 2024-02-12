"use client";
import React, { useState,useRef,useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isClick, setisClick] = useState(false);
   const navRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setisClick(false);
    }
  };

  // Attach the event listener
  document.addEventListener("mousedown", handleClickOutside);

  // Cleanup the event listener on component unmount
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [navRef]);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav
        className="bg-white shadow-md"
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
        ref={navRef}
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 font-bold text-2xl text-center pb-2 sm:pb-0 text-blackish text-black pl-[-2rem]">
                <Link href="/">
                  <img
                    src="/assets/logo.png"
                    alt="logo"
                    className="h-34 sm:h-45 md:h-50 lg:h-55 xl:h-55 w-48"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-black hover:text-gray-500 font-bold rounded-lg p-2"
                >
                  Home
                </Link>

                <div className="dropdown">
                  <button className="dropbtn">Company</button>
                  <div className="dropdown-content">
                    <a href="/who_we_are">Who we are</a>
                    <a href="/why_choose_us">Why Choose Us</a>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="dropbtn">Services</button>
                  <div className="dropdown-content">
                    <a href="/assignment_page">Assignment Writing</a>
                    <a href="/assignment_page1">Dissertation Writing</a>
                    <a href="/assignment_page2">Technical Assignment</a>
                    <a href="/assignment_page3">Essay Writing</a>
                    <a href="/assignment_page4">Research Paper Writing</a>
                    {/* <a href="/assignment_page5">Home Writing</a> */}
                  </div>
                </div>
                <Link
                  href="/sample"
                  className="text-black hover:text-gray-500 font-bold rounded-lg p-2"
                >
                  Sample
                </Link>
                <Link
                  href="/pricing"
                  className="text-black hover:text-gray-500 font-bold rounded-lg p-2"
                >
                  Pricing
                </Link>

                <Link
                  href="/contact"
                  className="text-black hover:text-gray-500 font-bold rounded-lg p-2"
                >
                  Contact
                </Link>
                <Link href="/signin">
                  <button className="text-white bg-blue-600 hover:bg-blue-800 font-semibold rounded-lg p-2 m-2 sm:text-xs md:text-sm lg:text-md">
                    LogIn
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <Link href="/signin">
                <button className="text-white bg-blue-600 hover:bg-blue-800 font-semibold rounded-lg p-1.5 m-2 sm:text-xs md:text-sm lg:text-md">
                  LogIn
                </button>
              </Link>
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-black   hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div>
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-0 space-y-1 sm:px-3 fixed w-full">
                <a
                  href="/"
                  className="text-black block hover:text-gray-400 font-bold rounded-lg p-2 "
                >
                  Home
                </a>
                {/*  */}
                <div className="dropdown1">
                  <button className="dropbtn1">Company</button>
                  <div className="dropdown-content1">
                    <a href="/who_we_are">Who we are</a>
                    <a href="/why_choose_us">Why Choose Us</a>
                  </div>
                </div>
                <div className="dropdown1">
                  <button className="dropbtn1">Services</button>
                  <div className="dropdown-content1 ">
                    <a href="/assignment_page">Assignment Writing</a>
                    <a href="/assignment_page1">Dissertation Writing</a>
                    <a href="/assignment_page2">Technical Assignment</a>
                    <a href="/assignment_page3">Essay Writing</a>
                    <a href="/assignment_page4">Research Paper Writing</a>
                    {/* <a href="/assignment_page5">Home Writing</a> */}
                  </div>
                </div>
                {/*  */}

                <a
                  href="/sample"
                  className="text-black block hover:text-gray-400 font-bold rounded-lg p-2"
                >
                  Sample
                </a>

                <a
                  href="/pricing"
                  className="text-black block hover:text-gray-400 font-bold rounded-lg p-2"
                >
                  Pricing
                </a>

                <a
                  href="/contact"
                  className="text-black block hover:text-gray-400 font-bold rounded-lg p-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
