// components/Hero.js
"use client";
import React, { useEffect } from "react";
import Link from "next/link";


const Hero = () => {
  useEffect(() => {
    // Adjust word-spacing for equal line lengths
    const adjustWordSpacing = () => {
      const container = document.getElementById("line-equalizer-container");
      if (container) {
        const words = container.innerText.split(" ");
        const totalSpace = container.offsetWidth - container.scrollWidth;
        const spacePerWord = totalSpace / (words.length + words.length / 4); // Adjust the denominator to control word spacing
        container.style.wordSpacing = `${spacePerWord}px`;
      }
    };

    // Call the adjustment function on load and resize
    adjustWordSpacing();
    window.addEventListener("resize", adjustWordSpacing);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustWordSpacing);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <div
        className="wrap text-white h-screen flex flex-col items-center justify-center px-4 bg-cover"
        style={{
          backgroundImage: `url('/assets/bg.jpg') `, // Adjust the path based on your project structure
        }}
      >
        <h1 className="gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center text-white font-bold mb-4 pt-4">
          From Stress to Success: Your Assignment Ally
        </h1>
        <h3 className=" bg-transparent mb-2 text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-center text-black ">
          {/* Count on our team of seasoned experts, dedicated to providing
          steadfast support, ensuring your assignment journey culminates in
          triumph. Your success is our commitment. */}
          Premium quality, unbeatable prices. Elevate your success without
          breaking the bank.
        </h3>{" "}
        {/* <p className=" text-base sm:text-sx md:text-sm lg:text-md text-center text-white bg-transparent txt">
          {" "}
          Premium quality, unbeatable prices. Elevate your success without
          breaking the bank.
        </p> */}
        <a href="/pricing" className="bg-transparent">
          <button className="bg-blue-600  hover:bg-blue-700 text-white rounded-lg font-semibold py-3 px-4 m-12 sm:text-xs md:text-sm lg:text-md">
            Order Now
          </button>
        </a>
      </div>
      <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center text-black p-4">
        <img
          src="/assets/v1.jpg"
          alt="Image"
          className="max-w-full w-full sm:w-1/2 h-auto mb-4 sm:mb-0"
        />
        <div className="text-center sm:text-left sm:w-1/2 sm:pl-8">
          <h1 className="text-2xl">About us</h1>
          <h1 className="text-4xl font-bold mb-4">Assignment Help UK</h1>
          <p
            className="text-sm text-gray-700 mb-8 leading-loose text-justify"
            id="line-equalizer-container"
          >
            Welcome to MindMosaic – your trusted partner for premium academic
            support in the UK. Since our establishment in 2018, we have been
            dedicated to delivering unparalleled services to our valued clients.
            At MindMosaic, we understand the importance of your academic
            success, and we're here to provide top-notch assistance tailored to
            the UK education system. Our commitment is reflected in our
            affordable pricing without compromising on the quality of our work.
            Our team, comprised of accomplished professionals, has been
            diligently serving students across a diverse range of subjects. We
            operate 24/7 to meet your study needs, ensuring that you receive the
            support you deserve. What sets MindMosaic apart is our team of
            experts, each a graduate in their respective disciplines. This
            diversity allows us to cater to a broad spectrum of academic
            assignments, ensuring that you receive the highest standard of work.
            Choose MindMosaic for academic excellence – your pathway to success
            in the UK educational landscape.
          </p>
          <p
            className="text-sm text-gray-700 mb-8 leading-loose text-justify"
            id="line-equalizer-container"
          >
            Certainly! Here's a revised version tailored to appeal to a UK
            audience: At MindMosaic, our team of experts is ready to assist you
            in a wide array of academic fields, including Law, Mathematics,
            Physics, C++, Java, Programming, UI/UX, Design, MATLAB, and other
            technical assignments. We comprehend the unique demands of each
            project and, with our exceptionally knowledgeable team, we strive to
            deliver assignment project details that not only meet but exceed the
            expectations of our esteemed clients. Choose MindMosaic for bespoke
            academic support tailored to the UK education landscape. Our
            commitment to excellence ensures that your assignments are handled
            by experts who understand the intricacies of your subject matter,
            providing you with the highest level of service.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
