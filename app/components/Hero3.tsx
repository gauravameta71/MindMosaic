// components/OurGuarantee.js
import React from "react";

const OurGuarantee = () => {
  return (
    <div className="text-center py-8 text-black bg-gray-200">
      {/* Paragraph */}
      <p className="text-sm text-black font-semibold bg-transparent">
        Revolutionary Approach to Academic Assistance
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-bold mt-4 mb-6 bg-transparent">
        Assurance Beyond Excellence
      </h2>

      {/* Icon Section */}
      <div className="flex flex-wrap justify-center gap-6 bg-transparent pt-4 pb-4 m-8">
        {/* Work Icon */}
        <div className="flex flex-col items-center bg-transparent ">
          {/* className="h-10 w-10 text-blue-500 bg-transparent" */}
          <img
            src="/assets/work.png"
            alt="work"
            className="h-10 w-10 text-blue-500 bg-transparent"
          />
          <p className="text-sm text-black mt-1 bg-transparent p-2 m-2">Quality Work</p>
        </div>
        {/* 2222 */}
        <div className="flex flex-col items-center bg-transparent">
          <img
            src="/assets/timing.png"
            alt="work"
            className="max-w-full h-auto h-10 w-10 text-blue-500 bg-transparent"
          />
          <p className="text-sm text-black mt-1 bg-transparent p-2 m-2">
            Fast Delivery
          </p>
        </div>

        <div className="flex flex-col items-center bg-transparent">
          {/* className="h-10 w-10 text-blue-500 bg-transparent" */}
          <img
            src="/assets/modify.png"
            alt="work"
            className="max-w-full h-auto h-10 w-10 text-blue-500 bg-transparent"
          />
          <p className="text-sm text-black mt-1 bg-transparent p-2 m-2">Modification</p>
        </div>

        <div className="flex flex-col items-center bg-transparent">
          {/* className="h-10 w-10 text-blue-500 bg-transparent" */}
          <img
            src="/assets/assistance.png"
            alt="work"
            className="max-w-full h-auto h-10 w-10 text-blue-500 bg-transparent"
          />
          <p className="text-sm text-black mt-1 bg-transparent p-2 m-2">24/7 Support</p>
        </div>

        <div className="flex flex-col items-center bg-transparent">
          {/* className="h-10 w-10 text-blue-500 bg-transparent" */}
          <img
            src="/assets/plagiarism.png"
            alt="work"
            className="max-w-full h-auto h-10 w-10 text-blue-500 bg-transparent"
          />
          <p className="text-sm text-black mt-1 bg-transparent p-2 m-2">
            Plagiarism free
          </p>
        </div>

        <div className="flex flex-col items-center bg-transparent">
          {/* className="h-10 w-10 text-blue-500 bg-transparent" */}
          <img
            src="/assets/assistance.png"
            alt="work"
            className="max-w-full h-auto h-10 w-10 text-blue-500 bg-transparent"
          />
          <p className="text-sm text-black mt-1 bg-transparent p-2 m-2">
            Assistance
          </p>
        </div>

        <div className="flex flex-col items-center bg-transparent">
          {/* className="h-10 w-10 text-blue-500 bg-transparent" */}
          <img
            src="/assets/writer.png"
            alt="work"
            className="max-w-full h-auto h-10 w-10 text-blue-500 bg-transparent"
          />
          <p className="text-sm text-black mt-1 bg-transparent p-2 m-2">
            Expert
          </p>
        </div>

        <div className="flex flex-col items-center bg-transparent">
          {/* className="h-10 w-10 text-blue-500 bg-transparent" */}
          <img
            src="/assets/privacy.png"
            alt="work"
            className="max-w-full h-auto h-10 w-10 text-blue-500 bg-transparent"
          />
          <p className="text-sm text-black mt-1 bg-transparent p-2 m-2">Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default OurGuarantee;
