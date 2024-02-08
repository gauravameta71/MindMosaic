// components/TutorialRequestPage.js

import Link from "next/link";
import React from "react";

const TutorialRequestPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen p-4 bg-cover"
      style={{ backgroundImage: "url(/assets/rcbg.jpg)" }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white bg-transparent">
        Request a Tutorial for Your Project
      </h1>
      <p className="text-center mb-8 text-white text-sm md:text-md lg:text-lg text-bold bg-transparent">
        If you need assistance or guidance with your project, we're here to
        help. Please provide details about your project, and we'll create a
        tailored tutorial for you.
      </p>
      <button>
        <Link
          href="https://wa.me/message/LBGOR7HIIXZPO1"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-bold m-4"
        >
          Request Tutorial
        </Link>
      </button>
    </div>
  );
};

export default TutorialRequestPage;
