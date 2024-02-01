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
          src="/assets/assignment_page.png"
          alt="Image"
          className="max-w-full w-full sm:w-1/2 h-auto mb-4 sm:mb-0"
        />
        <div className="text-center sm:text-left sm:w-1/2 sm:pl-8">
          <h1 className="text-2xl">Assignment Writing</h1>
          <h1 className="text-4xl font-bold mb-4">What we Offer?</h1>
          <p
            className="text-lg text-gray-700 mb-8 leading-loose text-justify pl-4 pr-4"
            id="line-equalizer-container"
          >
            The present generation showcases remarkable advancements in both the
            commercial and educational sectors, elevating standards. Amidst this
            progress, adapting to these changes becomes the new normal. In the
            dynamic field of education, significant transformations have
            occurred, enhancing the student experience. Among the myriad of
            activities, one pivotal aspect deserving attention is the art of
            assignment writing. Across the globe, education curricula have
            evolved to provide comprehensive learning experiences. Assignments,
            a crucial element, empower students to delve deeper into their
            subjects. However, grasping information solely through lectures may
            prove challenging.
          </p>
          <p
            className="text-lg text-gray-700 mb-8 leading-loose text-justify pl-4 pr-4"
            id="line-equalizer-container"
          >
            Recognizing this challenge, practical measures are introduced to
            ensure students in the UK thrive academically. Let's explore these
            tailored approaches designed for the betterment of their educational
            journey.
          </p>
        </div>
      </div>

      {/* subjects */}

      <div className="pb-8 bg-gray-200 p-8 ">
        <div className="mx-auto rounded-full bg-transparent">
          <h1 className="text-4xl font-semibold text-black mb-6 p-4 flex justify-center bg-transparent">
            Explore Our Diverse Assignment Writing Services:
          </h1>

          <div className="bg-white p-4 shadow-md rounded-2xl">
            <table className="w-full bg-transparent">
              <thead>
                <tr className="border-b text-black p-4">
                  <th className="text-left py-2">Subjects</th>
                  <th className="text-left py-2">Subjects</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b text-black">
                  <td className="py-2 text-black">Mathematics Assignments</td>
                  <td className="py-2 text-black">Economic Assignments</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-black">History Assignments</td>
                  <td className="py-2 text-black">Law Assignments</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-black">Engineering Assignments</td>
                  <td className="py-2 text-black">Programming Assignments</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-black">Chemistry Assignments</td>
                  <td className="py-2 text-black">Physics Assignments</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-black">Accounting Assignments</td>
                  <td className="py-2 text-black">Finance Assignments</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-black">English Assignments</td>
                  <td className="py-2 text-black">Others</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
