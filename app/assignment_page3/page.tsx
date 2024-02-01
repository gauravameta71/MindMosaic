// components/Hero.js
"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const page = () => {
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
      <div className=" flex flex-col sm:flex-row items-center justify-center text-black ">
        <img
          src="/assets/assignment_page3.png"
          alt="Image"
          className="max-w-full w-full sm:w-1/2 h-auto mb-4 sm:mb-0"
        />
        <div className="text-center sm:text-left sm:w-1/2 sm:pl-8">
          <h1 className="text-2xl">Technical Assignment</h1>
          <h1 className="text-4xl font-bold mb-4">What we Offer?</h1>
          <p
            className="text-lg text-gray-700 mb-8 leading-loose text-justify  pl-4 pr-4"
            id="line-equalizer-container"
          >
            Embarking on technical assignments can be a daunting task, but fear
            not—we offer a comprehensive "Technical Assignment" service tailored
            to your needs. Our team of experts specializes in crafting web, app,
            and programming projects with precision and efficiency. Whether
            you're grappling with complex coding challenges or seeking
            innovative solutions for your technical assignments, our seasoned
            professionals are here to guide you. We delve deep into the
            intricacies of each project, ensuring a meticulous understanding of
            your requirements. From conceptualization to execution, our experts
            bring a wealth of experience to the table. They meticulously plan
            and strategize, ensuring that every line of code serves a purpose
            and aligns with industry best practices. With a keen eye for detail,
            our team ensures that your technical assignments not only meet but
            exceed expectations. Collaborating with us means receiving top-notch
            assistance throughout the development process. Be it a web
            development task, mobile app creation, or programming project, our
            experts employ the latest technologies and methodologies to deliver
            results that showcase both innovation and proficiency.
          </p>
          <p
            className="text-lg text-gray-700 mb-8 leading-loose text-justify  pl-4 pr-4"
            id="line-equalizer-container"
          >
            Let us take the reins of your technical assignments, allowing you to
            focus on grasping the core concepts rather than getting bogged down
            by the intricacies of coding. We're here to turn your visions into
            reality, one code at a time.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
