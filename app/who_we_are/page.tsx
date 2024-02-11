// components/WhoWeAre.js
import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <div className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide font-bolduppercase">
              Who We Are
            </h2>
            <p className="mt-2 leading-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Discover Our Story
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
            <h1 className="text-3xl font-bold flex justify-center m-8 text-black sm:text-2xl md:text-3xl lg:text-4xl">
              About MindMosaic
            </h1>
          </div>
        </div>
      </div>

      <div
        className="bg-gray-100 p-8 bg-cover "
        // style={{ backgroundImage: "url(/assets/wrw3.png)" }}
      >
        <div className="flex flex-col md:flex-row gap-4 bg-transparent">
          {/* Card 1 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md flex-1 md:cover-fill bg-cover"
            style={{ backgroundImage: "url(/assets/c1.jpg)" }}
          >
            <h2 className="text-3xl md:text-3xl lg:text-3xl font-semibold text-black bg-transparent">
              About Company
            </h2>

            <p className="mt-2 text-black bg-transparent overflow-auto">
              "MindMosaic," a dynamic organization boasting a committed team of
              over 200 professionals, proudly emerges as a sister concern within
              the esteemed Creative and Innovative Service Provider company.
              Established under the visionary leadership of Mahipal Singh
              Rathore in 2018, our headquarters are strategically located in the
              United Kingdom. At MindMosaic, our core mission revolves around
              delivering exceptional assignment writing services, characterized
              by a steadfast commitment to quality and punctual delivery. As a
              subsidiary aligned with a parent company renowned for its
              innovative solutions, we bring a rich reservoir of expertise to
              every assignment we embark upon. We take great pride in our
              responsiveness to customer feedback, constantly striving to
              elevate our services based on invaluable insights. Your
              satisfaction stands as our top priority, and we actively
              incorporate suggestions to refine and enhance our offerings. Come, be a part of
              this transformative journey, and let MindMosaic serve as your
              steadfast partner in achieving academic success.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md flex-1 bg-cover"
            style={{ backgroundImage: "url(/assets/c2.jpg)" }}
          >
            <h2 className="text-3xl font-semibold text-black bg-transparent">
              What We Do?
            </h2>
            <p className="mt-2 text-black bg-transparent ">
             Embodied in a steadfast dedication to academic brilliance, MindMosaic specializes in an extensive range of services, thoughtfully designed to meet the diverse needs of students. Our devoted team of experts surpasses conventional essay writing, delving into intricate technical assignments and programming projects with unparalleled precision, creativity, and an unwavering commitment to excellence. Nestled in the thriving community of Bruche, our physical presence serves as a testament to our commitment to local students. However, our impact knows no bounds, reaching students worldwide and fostering connections that create a mosaic of educational support across continents and cultures. Join us on your academic journey, where expertise converges with unwavering commitment, offering a transformative learning experience.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md flex-1 bg-cover"
            style={{ backgroundImage: "url(/assets/c3.jpg)" }}
          >
            <h2 className="text-3xl font-semibold text-black bg-transparent">
              MindMosaic - Global
            </h2>
            <p className="mt-2 text-black bg-transparent ">
              MindMosaic revolutionizes the landscape of assignment services by
              extending its expertise globally through a seamless online
              platform. Committed to maintaining the highest standards, our
              virtual presence ensures that students worldwide can access
              top-notch academic support. Through our online services, we
              transcend geographical boundaries, providing a diverse range of
              students with tailored assignment solutions. Regardless of your
              location, MindMosaic offers a standardized approach to academic
              excellence. Our team of experts, dispersed across the globe,
              collaborates to deliver assignments that adhere to the highest
              educational standards. MindMosaic's online platform not only
              facilitates efficient communication but also ensures that every
              student receives personalized assistance in line with global
              academic norms. Whether you're navigating complex essays, tackling
              intricate technical assignments, or diving into programming
              projects, our online services guarantee excellence, precision, and
              a commitment to academic success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
