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
          src="/assets/assignment_page4.png"
          alt="Image"
          className="max-w-full w-full sm:w-1/2 h-auto mb-4 sm:mb-0"
        />
        <div className="text-center sm:text-left sm:w-1/2 sm:pl-8">
          <h1 className="text-2xl">Research Paper Writing</h1>
          <h1 className="text-4xl font-bold mb-4">What we Offer?</h1>
          <p
            className="text-lg text-gray-700 mb-8 leading-loose text-justify  pl-4 pr-4"
            id="line-equalizer-container"
          >
            Our research paper writing service is meticulously crafted by
            seasoned experts dedicated to delivering excellence. When you
            entrust us with your research paper, our skilled writers immerse
            themselves in the subject matter, conducting thorough research and
            analysis. They carefully synthesize information, ensuring a cohesive
            and well-structured paper. Our experts possess in-depth knowledge
            across various disciplines, allowing them to approach each research
            paper with a nuanced understanding. They adhere to academic
            standards, employ critical thinking, and employ a meticulous writing
            process. From crafting compelling introductions to presenting
            well-supported arguments and drawing insightful conclusions, our
            experts ensure every aspect of your research paper meets the highest
            standards.
          </p>
          <p
            className="text-lg text-gray-700 mb-8 leading-loose text-justify  pl-4 pr-4"
            id="line-equalizer-container"
          >
            We prioritize originality and authenticity, guaranteeing that each
            paper is tailored to your specific requirements. Our commitment to
            quality extends to thorough proofreading and editing, ensuring a
            polished and error-free final product. With our research paper
            writing service, you can trust that your academic work is in the
            hands of professionals dedicated to delivering scholarly excellence
            tailored to your unique needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
