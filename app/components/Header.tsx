
"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isClick, setisClick] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [disableBodyScroll, setDisableBodyScroll] = useState(false);
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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
    useEffect(() => {
      const htmlElement = document.documentElement;
    
      if (disableBodyScroll) {
        htmlElement.classList.add('overflow-hidden');
      } else {
        htmlElement.classList.remove('overflow-hidden');
      }
    
      return () => {
        htmlElement.classList.remove('overflow-hidden');
      };
    }, [disableBodyScroll]);

  // useEffect(() => {
  //   // Check if there are any users stored in localStorage
  //   const users = JSON.parse(localStorage.getItem("users") || "[]");
  //   setIsAuthenticated(users.length > 0);
  // }, []);

  // const handleLogout = () => {
  //   // Clear user data from localStorage
  //   localStorage.removeItem("users");
  //   setIsAuthenticated(false);
  //   router.push("/log-in"); // Redirect to login page
  // };

  const toggleNavbar = (): void => {
    setisClick(!isClick);
    setIsMobileNavOpen(!isClick);
    setDisableBodyScroll(!isClick);
  };



  return (
    <>
    <div className={disableBodyScroll ? 'overflow-hidden' : ''}>
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
            <div className="hidden md:block ">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="/"
                  className="text-black hover:text-gray-500 font-semibold rounded-lg p-2"
                >
                  Home
                </a>

                <a
                  href="/company"
                  className="text-black hover:text-gray-500 font-semibold rounded-lg p-2"
                >
                  Company
                </a>

                <a
                  href="/services"
                  className="text-black hover:text-gray-500 font-semibold rounded-lg p-2"
                >
                  Services
                </a>
                <a
                  href="/sample"
                  className="text-black hover:text-gray-500 font-semibold rounded-lg p-2"
                >
                  Sample
                </a>
                <a
                  href="/pricing"
                  className="text-black hover:text-gray-500 font-semibold rounded-lg p-2"
                >
                  Pricing
                </a>

                <a
                  href="/contact"
                  className="text-black hover:text-gray-500 font-semibold rounded-lg p-2"
                >
                  Contact
                </a>
                {/* <a href="/log-in */}
                {/* "> */}
                {/* <button className="text-blue-600 bg-white hover:bg-blue-100 border-2 border-blue-500 font-semibold rounded-lg pl-2 pr-2 m-2 p-1.5 sm:text-xs md:text-sm lg:text-md">
                    LogIn
                  </button> */}
                {/* </a> */}
                <div className="ml-4 flex items-center space-x-4">
                  {/* ... */}
                  {isAuthenticated ? (
                    <button
                      className="text-blue-600 bg-white hover:bg-blue-100 border-2 border-blue-500 font-semibold rounded-lg pl-2 pr-2 m-2 p-1.5 sm:text-xs md:text-sm lg:text-md"
                      // onClick={handleLogout}
                    >
                      Logout
                    </button>
                  ) : (
                    <a href="/log-in">
                      <button className="text-blue-600 bg-white hover:bg-blue-100 border-2 border-blue-500 font-semibold rounded-lg pl-2 pr-2 m-2 p-1.5 sm:text-xs md:text-sm lg:text-md">
                        Login
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center">
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
    <div className={isClick ? 'md:hidden fixed top-0 left-0 w-full h-full overflow-auto z-50 mt-10' : 'hidden'}>
      <div className="px-2 pt-2 pb-0 space-y-1 sm:px-3 fixed w-full">
        <a
          href="/"
          className="text-black block hover:text-gray-400 font-semibold rounded-lg py-2 px-4"
        >
          Home
        </a>
        <a
                  href="/company"
                  className="text-black block hover:text-gray-400 font-semibold rounded-lg py-2 px-4 mt-2"
                >
                  Company
                </a>
                <a
                  href="/sample"
                  className="text-black block hover:text-gray-400 font-semibold rounded-lg py-2 px-4"
                >
                  Sample
                </a>
                <a
                  href="/pricing"
                  className="text-black block hover:text-gray-400 font-semibold rounded-lg py-2 px-4"
                >
                  Pricing
                </a>
                <a
                  href="/contact"
                  className="text-black block hover:text-gray-400 font-semibold rounded-lg py-2 px-4"
                >
                  Contact Us
                </a>

        <div className="ml-4 flex items-center space-x-4">
          {/* ... */}
          {isAuthenticated ? (
            <button
              className="text-blue-600 bg-white hover:bg-blue-100 border-2 border-blue-500 font-semibold rounded-lg pl-2 pr-2 m-2 p-1.5 sm:text-xs md:text-sm lg:text-md"
              // onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <a href="/log-in">
              <button className="text-blue-600 bg-white hover:bg-blue-100 border-2 border-blue-500 font-semibold rounded-lg pl-2 pr-2 m-2 p-1.5 sm:text-xs md:text-sm lg:text-md">
                Login
              </button>
            </a>
          )}
        </div>

        {/* Close button */}
        {/* <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleNavbar}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> */}
      </div>
    </div>
  </div>
)}
      </nav>
      </div>
    </>
  );
};

export default Header;










