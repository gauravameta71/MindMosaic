import React from "react";

const OurGuarantee = () => {
  return (
    <div
      className="text-center py-8 text-black bg-cover "
      style={{
        backgroundImage: `url('/assets/bg1.jpg') `, // Adjust the path based on your project structure
      }}
    >
      {/* Paragraph */}
      <p className="text-sm text-black font-bold bg-transparent">
        How Our Quality Assignment Writing Services in the UK Work?
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-bold mt-4 mb-6 bg-transparent">
        Our Procedure
      </h2>

      {/* Icon Section */}
      <div className="flex flex-col lg:flex-row justify-center bg-transparent pt-4 pb-4 m-8">
        {/* Work Icon */}
        <div className="flex flex-col items-center bg-transparent mb-4 lg:mb-0">
          <img
            src="/assets/order.png"
            alt="work"
            className="h-10 w-10 text-blue-500 bg-transparent"
          />
          <p className="text-sm text-black mt-1 bg-transparent font-bold">
            Step 1: Place Your Order
          </p>
          <p className="text-gray-700 font-semibold bg-transparent text-sm text-center">
            Submit your assignment details and requirements through our
            user-friendly order form.
          </p>
        </div>

        <div className="flex flex-col items-center bg-transparent mb-4 lg:mb-0">
          <img
            src="/assets/encrypted.png"
            alt="work"
            className="max-w-full h-auto h-10 w-10 text-blue-500 bg-transparent"
          />
          <p className="text-sm text-black mt-1 bg-transparent font-bold">
            Step 2: Expert Assignment Developers
          </p>
          <p className="text-gray-700 font-semibold bg-transparent text-sm text-center">
            Our team of experienced writers will be assigned to work on your
            assignment, ensuring expertise in the subject.
          </p>
        </div>

        <div className="flex flex-col items-center bg-transparent">
          <img
            src="/assets/document.png"
            alt="work"
            className="max-w-full h-auto h-10 w-10 text-blue-500 bg-transparent"
          />
          <p className="text-sm text-black mt-1 bg-transparent font-bold">
            Step 3: Timely Delivery
          </p>
          <p className="text-gray-700 font-semibold bg-transparent text-sm text-center">
            Receive your well-crafted assignment within the specified timeframe,
            meeting all quality standards.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default OurGuarantee;
