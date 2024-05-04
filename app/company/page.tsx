import React from 'react'

const page = () => {
  return (
    <>
      {/* Heading */}
      <div className="sm:flex items-center w-screen">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span> */}
            <h2 className=" mb-4 text-start text-orange-800  lg:w-[400px] rounded-lg md:w-[320px] sm:w-[100px] text-3xl flex lg:text-5xl mr[19px] font-semibold  text-black uppercase justify-start items-start">
              Our Company
            </h2>
            <p className="text-gray-700 ">
              Mind Mosaic is a premier outsourcing service provider,
              specializing in delivering tailored solutions to meet diverse
              business needs. With a focus on efficiency, innovation, and
              reliability, we seamlessly integrate with your operations to
              optimize processes and drive success.
            </p>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <section className="">
        <div className=" bg-white">
          <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                Why choose us?
              </h2>
              <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                We know efficiency, we know precision. We are service
                specialists.
              </p>
              <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                We excel in efficiency, we master precision. We're your premier
                outsourcing service specialists.
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
            <div className="bg-gray-100 p-4 bg-cover">
              <div className="flex flex-col md:flex-row gap-4 bg-transparent">
                {/* Card 1 */}
                <div
                  className="bg-white p-6 rounded-lg shadow-md flex-1 md:cover-fill bg-cover "
                  // style={{ backgroundImage: "url(/assets/image.jpg)" }}
                >
                  <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-black bg-transparent pb-4">
                    MindMosaic
                  </h2>

                  <p className=" md:text-lg text-black bg-transparent text-sm">
                    At MindMosaic, we transcend the conventional boundaries of
                    assignment services, offering a transformative academic
                    experience. <br />
                    Here's why students worldwide choose us : <br />
                    <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                      {" "}
                      Global Expertise :{" "}
                    </span>{" "}
                    Our team comprises over 200 dedicated professionals,
                    ensuring a wealth of knowledge and expertise in diverse
                    academic disciplines.
                    <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                      <br /> <br />
                      Tailored Solutions :{" "}
                    </span>
                    MindMosaic specializes in crafting personalized assignments,
                    addressing the unique needs of each student with precision
                    and care.
                    <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                      {" "}
                      <br /> <br />
                      Unparalleled Quality :{" "}
                    </span>
                    We go beyond essay writing, tackling technical assignments
                    and programming projects with unwavering commitment and
                    creativity.
                    <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                      <br /> <br />
                      Commitment to Excellence :{" "}
                    </span>
                    Our mission is to uphold the highest standards in assignment
                    services, ensuring timely delivery and exceptional quality.
                    <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                      <br /> <br />
                      Local Presence, Global Impact :{" "}
                    </span>
                    Nestled in Bruche, England, our physical presence reflects a
                    commitment to serve the local student community. Yet, our
                    influence extends globally, connecting with students from
                    all corners of the world.
                    <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                      <br /> <br />
                      Responsive to Feedback :{" "}
                    </span>
                    We value customer feedback and actively implement
                    suggestions to enhance our services continually.
                    <span className="block md:inline text-black font-bold mt-2 md:mt-0 bg-transparent">
                      <br /> <br />
                      Academic Partnership :{" "}
                    </span>
                    MindMosaic isn't just a service provider; we aim to be your
                    academic partner, supporting you on your educational
                    journey.
                  </p>
                </div>
              </div>
            </div>

       

            {/* who we are */}
            <div className="pb-8">
              <div className="lg:text-center">
                <h2 className="font-heading mt-12 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                  Who We are?
                </h2>
                <p className="font-heading mt-2 text-xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  About MindMosaic
                </p>
              </div>
              <div
                className="bg-gray-100 p-8 bg-cover mt-5"
              
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
                      "MindMosaic," a dynamic organization boasting a committed
                      team of over 200 professionals, proudly emerges as a
                      sister concern within the esteemed Creative and Innovative
                      Service Provider company. Established under the visionary
                      leadership of Mahipal Singh Rathore in 2018, our
                      headquarters are strategically located in the United
                      Kingdom. At MindMosaic, our core mission revolves around
                      delivering exceptional assignment writing services,
                      characterized by a steadfast commitment to quality and
                      punctual delivery. As a subsidiary aligned with a parent
                      company renowned for its innovative solutions, we bring a
                      rich reservoir of expertise to every assignment we embark
                      upon. We take great pride in our responsiveness to
                      customer feedback, constantly striving to elevate our
                      services based on invaluable insights. Your satisfaction
                      stands as our top priority, and we actively incorporate
                      suggestions to refine and enhance our offerings. Come, be
                      a part of this transformative journey, and let MindMosaic
                      serve as your steadfast partner in achieving academic
                      success.
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
                      Embodied in a steadfast dedication to academic brilliance,
                      MindMosaic specializes in an extensive range of services,
                      thoughtfully designed to meet the diverse needs of
                      students. Our devoted team of experts surpasses
                      conventional essay writing, delving into intricate
                      technical assignments and programming projects with
                      unparalleled precision, creativity, and an unwavering
                      commitment to excellence. Nestled in the thriving
                      community of Bruche, our physical presence serves as a
                      testament to our commitment to local students. However,
                      our impact knows no bounds, reaching students worldwide
                      and fostering connections that create a mosaic of
                      educational support across continents and cultures. Join
                      us on your academic journey, where expertise converges
                      with unwavering commitment, offering a transformative
                      learning experience.
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
                      MindMosaic revolutionizes the landscape of assignment
                      services by extending its expertise globally through a
                      seamless online platform. Committed to maintaining the
                      highest standards, our virtual presence ensures that
                      students worldwide can access top-notch academic support.
                      Through our online services, we transcend geographical
                      boundaries, providing a diverse range of students with
                      tailored assignment solutions. Regardless of your
                      location, MindMosaic offers a standardized approach to
                      academic excellence. Our team of experts, dispersed across
                      the globe, collaborates to deliver assignments that adhere
                      to the highest educational standards. MindMosaic's online
                      platform not only facilitates efficient communication but
                      also ensures that every student receives personalized
                      assistance in line with global academic norms. Whether
                      you're navigating complex essays, tackling intricate
                      technical assignments, or diving into programming
                      projects, our online services guarantee excellence,
                      precision, and a commitment to academic success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* who we are */}
          </div>
        </div>
      </section>
    </>
  );
}

export default page