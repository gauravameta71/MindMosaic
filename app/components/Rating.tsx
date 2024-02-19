"use client";
import Image from "next/image";
import React, { useState } from "react";

const Rating = () => {

    const [rateValue, setRateValue] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = () => {
      if (rateValue) {
        setIsSubmit(true);
      }
    };

  return (
    <div className="flex flex-row sm:flex-row w-full lg:flex-row-reverse bg-white">
      <div className="w-full sm:w-1/2 bg-white p-4">
        <div className="w-full sm:w-1/2 bg-white p-4">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            What people think about MindMosaic.
          </h1>
          <div className="text-gray-700">
            <p className="font-medium">Reviews</p>
            <ul className="mb-6 mt-2 space-y-2">
              <li className="flex items-center text-sm font-medium">
                <span className="w-3">5</span>
                <span className="mr-4 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-10/12 bg-yellow-400"></div>
                </div>
                <span className="w-3">356</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <span className="w-3">4</span>
                <span className="mr-4 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-8/12 bg-yellow-400"></div>
                </div>
                <span className="w-3">129</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <span className="w-3">3</span>
                <span className="mr-4 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-1/12 bg-yellow-400"></div>
                </div>
                <span className="w-3">4</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <span className="w-3">2</span>
                <span className="mr-4 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-0 bg-yellow-400"></div>
                </div>
                <span className="w-3">0</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <span className="w-3">1</span>
                <span className="mr-4 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-1/12 bg-yellow-400"></div>
                </div>
                <span className="w-3">5</span>
              </li>
            </ul>
          </div>
          {/* <button class="w-36 rounded-full bg-blue-900 py-3 text-white font-medium">Write a review</button> */}
        </div>
      </div>
      {/* Rating  */}
      <div className="w-auto sm:w-96 h-64 whitespace-nowrap overflow-hidden transition-all border-2 border-black rounded-3xl shadow-lg mt-10">
        <div
          className="inline-block break-words align-top whitespace-normal transition-all h-96 w-full sm:w-96 shadow-lg"
          style={{
            transform: isSubmit ? "translateX(-100%)" : "translateX(0%)",
          }}
        >
          <div className="w-full sm:w-96 h-96 p-5 rounded-3xl text-white flex flex-col gap-8 mr-8">
            <div className="flex flex-row gap-2">
              <Image
                src="/assets/icon-star.svg"
                alt="star"
                width={40}
                height={30}
              />

              <h1 className="text-2xl font-bold text-black pt-2">
                How did we do? <br />
              </h1>
            </div>

            <div className="flex gap-6">
              {[1, 2, 3, 4, 5].map((value) => {
                return (
                  <div
                    key={value}
                    className={`grid place-content-center h-12 w-12 rounded-full cursor-pointer  transition-all  ${
                      value === rateValue
                        ? "bg-orange-500  text-white"
                        : "text-gray-400 hover:bg-white font-semibold hover:text-orange-500 hover:border-2  bg-gray-300"
                    }`}
                    onClick={() => setRateValue(value)}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
            <button
              className="w-full bg-orange-500 rounded-3xl py-2 hover:bg-white hover:text-orange-500 hover:border-2 border-orange-500 transition-all"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div
          className="inline-block whitespace-normal transition-all h-96 w-full sm:w-96"
          style={{
            transform: isSubmit ? "translateX(-100%)" : "translateX(0%)",
          }}
        >
          <div className="w-full sm:w-96 h-96 p-5 rounded-3xl text-white flex flex-col items-center gap-8">
            <Image
              src="/assets/illustration-thank-you.svg"
              alt="Thank you"
              className="mx-auto object-center object-cover"
              width={120}
              height={120}
              priority
            />
            <span className="text-center  font-semibold border-2 border-gray-500 bg-orange-200  px-2 py-1 rounded-3xl text-orange-500">
              You select {rateValue} out of 5
            </span>

            <h1 className="text-2xl font-bold text-center text-black mb-2">
              Thank you!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
