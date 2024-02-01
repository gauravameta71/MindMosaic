// components/WhoWeAre.js
import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <div className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide font-bolduppercase">
              Why Choose Us
            </h2>
            <p className="mt-2 leading-8  lg:text-4xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Empowering Success, Inspiring Excellence
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-col items-center md:flex-row md:space-x-8">
              <div className="mb-4 md:w-1/2">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg shadow-lg"
                  src="/assets/wrw3.png"
                  alt="Text 1"
                />
              </div>
              <div className="md:w-1/2">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg shadow-lg mb-6"
                  src="/assets/wrw2.jpg"
                  alt="Text 1"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold flex justify-center m-8 text-black sm:text-xl md:text-2xl lg:text-2xl">
              Choose MindMosaic for Your Academic Journey!
            </h1>
          </div>
        </div>
      </div>
      <div
        className="bg-gray-100 p-4 bg-cover"
     
      >
        <div className="flex flex-col md:flex-row gap-4 bg-transparent">
          {/* Card 1 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md flex-1 md:cover-fill bg-cover"
            style={{ backgroundImage: "url(/assets/backg1.jpg)" }}
          >
            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-black bg-transparent pb-4">
              MindMosaic
            </h2>

            <p className="text-base md:text-lg text-blue-900 font-semibold bg-transparent">
              At MindMosaic, we transcend the conventional boundaries of
              assignment services, offering a transformative academic
              experience. Here's why students worldwide choose us :
              <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                {" "}
                Global Expertise :{" "}
              </span>
              Our team comprises over 200 dedicated professionals, ensuring a
              wealth of knowledge and expertise in diverse academic disciplines.
              <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                {" "}
                Tailored Solutions :{" "}
              </span>
              MindMosaic specializes in crafting personalized assignments,
              addressing the unique needs of each student with precision and
              care.
              <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                {" "}
                Unparalleled Quality :{" "}
              </span>
              We go beyond essay writing, tackling technical assignments and
              programming projects with unwavering commitment and creativity.
              <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                {" "}
                Commitment to Excellence :{" "}
              </span>
              Our mission is to uphold the highest standards in assignment
              services, ensuring timely delivery and exceptional quality.
              <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                {" "}
                Local Presence, Global Impact :{" "}
              </span>
              Nestled in Bruche, England, our physical presence reflects a
              commitment to serve the local student community. Yet, our
              influence extends globally, connecting with students from all
              corners of the world.
              <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                {" "}
                Responsive to Feedback :{" "}
              </span>
              We value customer feedback and actively implement suggestions to
              enhance our services continually.
              <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                {" "}
                Academic Partnership :{" "}
              </span>
              MindMosaic isn't just a service provider; we aim to be your
              academic partner, supporting you on your educational journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;


