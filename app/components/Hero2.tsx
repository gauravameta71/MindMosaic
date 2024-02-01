"use client";
// components/WhatWeCanDo.js
import React from "react";

const WhatWeCanDo = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center p-4">
      {/* Large Image on Right */}
      <img
        src="/assets/v2.jpg"
        alt="Large Image"
        className="w-full sm:w-1/2 h-auto sm:h-[800px] mb-4 sm:mb-0"
      />

      {/* Heading */}
      <div className="text-center text-black sm:text-left sm:w-1/2 sm:pl-8">
        <h1 className="text-4xl font-bold mb-4">What We Can Do</h1>
      

        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Card 1 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/assets/assignment.jpg"
              alt="Card 1 Image"
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <p className="text-sm text-gray-700 h-20 overflow-auto">
              Mastering assignment writing is a formidable challenge for
              countless students, demanding extensive research and time
              commitment to meet stringent requirements. We understand the
              unique academic landscape in the UK, and our tailored approach
              ensures your success, making assignment writing a more manageable
              and rewarding journey.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/assets/technical.jpg"
              alt="Card 2 Image"
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <p className="text-sm text-gray-700 h-20 overflow-auto">
              MindMosaic stands out as a premier writing service, specializing
              in crafting exceptional research papers. Our team of highly
              qualified writers possesses the expertise to compose a wide range
              of research papers. Whether you are pursuing academic excellence
              or seeking assistance with your scholarly endeavors, we are
              dedicated to delivering top-notch papers tailored to your specific
              needs.
            </p>
          </div>
        </div>

        {/* Cards Section - Second Row */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* Card 3 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/assets/homework.jpg"
              alt="Card 3 Image"
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <p className="text-sm text-gray-700 h-20 overflow-auto">
              At times, students may encounter challenges when crafting a
              well-structured essay. The intricacies of organizing content and
              ensuring its relevance can pose difficulties. We understand the
              importance of addressing these concerns and providing the
              necessary support for a seamless essay writing experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/assets/projects.jpg"
              alt="Card 4 Image"
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <p className="text-sm text-gray-700 h-20 overflow-auto">
              We take pride in not only delivering exceptional work but also
              offering detailed tutorials on our processes. This way, you not
              only receive top-notch results but also gain valuable insights,
              ensuring a holistic learning experience tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeCanDo;
