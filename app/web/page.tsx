// components/WhoWeAre.js
import React from "react";

const web = () => {
  return (
    <>
      <div className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 leading-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              WEB APPLICATION DEVELOPMENT
            </p>
          </div>

          <div className="mt-10">
            <div className="flex justify-center items-center md:flex-row md:space-x-8">
              <div className="mb-4 md:w-1/2">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg shadow-lg"
                  src="/assets/web.jpg"
                  alt="Text 1"
                />
              </div>
              {/* <div className="md:w-1/2">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg shadow-lg mb-6"
                  src="/assets/wrw2.jpg"
                  alt="Text 1"
                />
              </div> */}
            </div>
            {/* <h1 className="text-3xl font-bold flex justify-center m-8 text-black sm:text-2xl md:text-3xl lg:text-4xl">
              About MindMosaic
            </h1> */}

            <div className="mt-8">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-black">
                  Introduction
                </h2>
                <p className="text-gray-600">
                  In the evolving landscape of online shopping, our website
                  offers a seamless experience for users in the UK who seek
                  convenient access to a diverse array of materials. With a
                  user-friendly design, individuals can easily sign in and
                  explore the rich content available on our platform. Our
                  dedicated team ensures the continuous maintenance and
                  enhancement of the server, making both major and minor
                  improvements to provide an optimal online shopping experience.
                  Embracing the shift towards online platforms, our website
                  caters to the growing demand for accessibility and
                  convenience. As the world moves towards a more interconnected
                  digital space, our platform allows users to effortlessly
                  access a variety of materials from the comfort of their homes.
                  Join us on this online journey to explore and engage with a
                  plethora of content, bringing the convenience of shopping and
                  information access right to your fingertips.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-black ">Design</h2>
                {/* <p className="text-gray-600"> */}
                  {/* 1 */}
                  <h1 className="text-md text-black font-bold">1. Home Page</h1>
                  <div className="mb-4 md:w-full">
                    <img
                      className="object-fit object-center w-full h-[400px] rounded-lg shadow-lg"
                      src="/assets/homepage.jpg"
                      alt="Text 1"
                    />
                  </div>
                  <p className="text-sm text-black">Header</p>

                  <p className="text-sm text-black">Hero Section</p>

                  <p className="text-sm text-black">Featured Products</p>

                  <p className="text-sm text-black ">Special Offers</p>

                  <p className="text-sm text-black ">Testimonials</p>

                  <p className="text-sm text-black ">Footer</p> <br />

                  {/* 2 */}
                  <h1 className="text-md text-black font-bold">
                    2. Product Pages:
                  </h1>
                  <div className="mb-4 md:w-full">
                    <img
                      className="object-fill object-center w-full h-[400px] rounded-lg shadow-lg"
                      src="/assets/productpage.jpg"
                      alt="Text 1"
                    />
                  </div>
                  <p className="text-sm text-black ">Product Listings</p>

                  <p className="text-sm text-black">Product Details</p>

                  <p className="text-sm text-black">Related Products</p> <br />

                  {/* 3 */}
                  <h1 className="text-md text-black font-bold">
                    3. User Account:
                  </h1>
                  <div className="mb-4  md:w-full">
                    <img
                      className="object-fit object-center w-full h-[400px] rounded-lg shadow-lg"
                      src="/assets/user.png"
                      alt="Text 1"
                    />
                  </div>
                  <p className="text-sm text-black">Sign In/Sign Up</p>
                  <p className="text-sm text-black ">User Dashboard</p> <br />
                  {/* 4 */}
                  <h1 className="text-md text-black font-semibold">
                    4. Cart and Checkout:
                  </h1>
                  <div className="mb-4 md:w-full">
                    <img
                      className="object-fit object-center w-full h-[400px] rounded-lg shadow-lg"
                      src="/assets/cart.jpg"
                      alt="Text 1"
                    />
                  </div>
                  <p className="text-sm text-black ">Shopping Cart</p>
                  <p className="text-sm text-black ">Checkout Process</p> <br />
                  {/* 5 */}
                  <h1 className="text-md text-black font-semibold">
                    5. Responsive Design
                  </h1>
                  <div className="mb-4 md:w-full">
                    <img
                      className="object-fit object-center w-full h-[400px] rounded-lg shadow-lg"
                      src="/assets/responsive.jpg"
                      alt="Text 1"
                    />
                  </div> <br />
                  {/* 6 */}
                  <h1 className="text-md text-black font-semibold">
                    6. UK-Centric Features:
                  </h1>

                  <p className="text-sm text-black ">
                    Currency and Measurement
                  </p>
                  <p className="text-sm text-black ">Shipping Information</p>
                  <p className="text-sm text-black ">Customer Support</p> <br />
                  {/* 7 */}
                  <h1 className="text-md text-black font-semibold">
                    7. Legal and Trust Indicators
                  </h1>
                  <p className="text-sm text-black "></p>
                  <p className="text-sm text-black ">
                    Privacy Policy and Terms of Service
                  </p>
                  <p className="text-sm text-black ">Trust Badges</p><br />
                  {/* 8 */}
                  <h1 className="text-md text-black font-semibold">
                    8. Marketing and SEO
                  </h1>
                  <p className="text-sm text-black ">Blog Section</p>
                  <p className="text-sm text-black ">SEO Optimization</p>
                {/* </p> */}
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-black">
                  Challenges
                </h2>
                <p className="text-gray-600">
                  There are many challenges that might arrive in the time of
                  website development: <br /> <br />
                  ● Providing a friendly user experience so that users find it
                  appealing for them, it should not be complicated as there will
                  be problems for many users and it will lessen the popularity
                  of the application. <br /> ● Integration should be present
                  inside the website as there can be many demands coming in the
                  future from users (Saini et al. 2020). And it can be fulfilled
                  if the website has a proper integration system. <br /> ● The
                  personal data of the user should be protected at any cost.
                  Implementing a proper security system is mandatory at the time
                  of creation. Users will provide their card details and other
                  information thus protecting them properly will help an user to
                  trust the website. <br /> ● The website should consist of
                  sustainability so that it can be accessed in every device,
                  starting from a desktop to a mobile device. Should be
                  compatible to be implemented in any device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default web;

