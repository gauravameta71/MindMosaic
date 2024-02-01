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
          src="/assets/assignment_page1.png"
          alt="Image"
          className="max-w-full w-full sm:w-1/2 h-auto mb-4 sm:mb-0"
        />
        <div className="text-center sm:text-left sm:w-1/2 sm:pl-8">
          <h1 className="text-2xl">Dissertation Writing</h1>
          <h1 className="text-4xl font-bold mb-4">What we Offer?</h1>
          <p
            className="text-lg text-gray-700 mb-8 leading-loose text-justify  pl-4 pr-4"
            id="line-equalizer-container"
          >
            Embarking on the journey of dissertation writing can be a daunting
            task, requiring meticulous research and scholarly expertise. Our
            dissertation writing service is crafted to alleviate the burden from
            your shoulders, ensuring a seamless and high-quality academic
            experience. Our team of seasoned experts, comprising subject matter
            specialists and experienced writers, is dedicated to meticulously
            guiding you through the intricacies of dissertation creation. From
            formulating a compelling research question to conducting exhaustive
            literature reviews, our experts leverage their academic prowess to
            ensure your dissertation stands out. We prioritize originality and
            depth in every piece of work, tailoring each dissertation to meet
            the unique requirements of your academic pursuit. By choosing our
            dissertation writing service, you gain access to a collaborative and
            supportive process that values your input and aims to surpass
            academic expectations.
          </p>
          <p
            className="text-lg text-gray-700 mb-8 leading-loose text-justify  pl-4 pr-4"
            id="line-equalizer-container"
          >
            Let our experts transform your academic vision into a well-crafted
            dissertation, presenting your research with clarity, coherence, and
            academic rigor. Your academic success is our priority, and our
            commitment to excellence is reflected in every dissertation we
            produce.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
