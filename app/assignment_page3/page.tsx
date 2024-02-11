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
          <h1 className="text-2xl">Essay Writing</h1>
          <h1 className="text-4xl font-bold mb-4">What we Offer?</h1>
          <p
            className="text-lg text-gray-700 mb-8 leading-loose text-justify  pl-4 pr-4"
            id="line-equalizer-container"
          >
            Navigating through higher levels of education, the significance of
            academic writing becomes increasingly crucial for students aiming at
            top grades. However, not everyone possesses the innate ability to
            craft flawless essays. Some struggle with language intricacies,
            while others may find the essay-writing process daunting and
            unclear. In such circumstances, our essay writing service in the UK
            is here to provide valuable assistance. Our goal is to alleviate the
            challenges you face during your academic journey. While numerous
            services offer custom-written essays, not all can meet your specific
            expectations. With our dedicated essay writing help tailored for the
            UK audience, our writers strive to deliver outcomes that enhance
            your likelihood of securing excellent grades. Trust us to guide you
            through the intricacies of academic writing, ensuring your success
            in every essay.
          </p>
          <p
            className="text-lg text-gray-700 mb-8 leading-loose text-justify  pl-4 pr-4"
            id="line-equalizer-container"
          >
            By choosing our essay writing service, you're investing in more than
            just a paper – you're investing in your academic journey. Let us be
            the support you need to navigate the complexities of essay writing
            and elevate your academic performance. Join countless students who
            have benefited from our expertise and experience the difference in
            your grades with our essay writing help in the UK. Your success is
            our priority.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
