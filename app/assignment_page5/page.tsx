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
          src="/assets/assignment_page5.png"
          alt="Image"
          className="max-w-full w-full sm:w-1/2 h-auto mb-4 sm:mb-0"
        />
        <div className="text-center sm:text-left sm:w-1/2 sm:pl-8">
          <h1 className="text-2xl">Home Writing</h1>
          <h1 className="text-4xl font-bold mb-4">What we Offer?</h1>
          <p
            className="text-lg text-gray-700 mb-8 leading-loose text-justify  pl-4 pr-4"
            id="line-equalizer-container"
          >
            At our writing service, we take pride in offering a unique and
            personalized "home writing" experience. Our team of experts is
            dedicated to crafting content that not only meets your academic
            requirements but also resonates with the comfort and familiarity of
            your own home. We understand that every assignment is an opportunity
            to create a piece of work tailored to your needs. Our experts embark
            on the "home writing" journey by delving into the core of your
            assignment, ensuring that each element is carefully considered. From
            the cozy ambiance of your home to the intricate details of your
            requirements, our writers infuse a touch of warmth and authenticity
            into every piece. Through a meticulous process, we transform your
            ideas into a well-crafted narrative that reflects the essence of a
            personalized home environment.
          </p>
          <p
            className="text-lg text-gray-700 mb-8 leading-loose text-justify  pl-4 pr-4"
            id="line-equalizer-container"
          >
            Whether it's an essay, research paper, or any other academic task,
            our "home writing" approach ensures that your work is not just a
            task to complete but an experience to be cherished. Trust us to
            bring the expertise and comfort of home to your academic writing
            journey.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
