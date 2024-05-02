// components/OurGuarantee.js
import React from "react";

const OurGuarantee = () => {
  return (
    <>
      {/* // 2 */}
      <div class="max-w-4xl mx-auto px-2 mt-5 text-black pb-14 ">
        <div class="text-center">
          <h2 class="font-semibold text-4xl">Features you'll love</h2>
          <p class="max-w-md mx-auto mt-2 text-gray-500">
            Revolutionary Approach to Academic Assistance
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 mt-10">
          <div class="flex gap-4 items-start">
            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              <img
                src="/delivery1.gif"
                alt="work"
                className="max-w-full  h-8 w-8 text-blue-500 bg-transparent"
              />
            </span>
            <div>
              <h3 class="font-semibold text-xl">Fast Delivery</h3>
              <p class="mt-1 text-gray-500">
                {" "}
                Swift delivery, exceptional service.
              </p>
            </div>
          </div>

          <div class="flex gap-4 items-start ">
            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              <img
                src="/support.gif"
                alt="work"
                className="max-w-full h-8 w-10 text-blue-500 bg-transparent"
              />
            </span>
            <div>
              <h3 class="font-semibold text-xl">24/7 Support</h3>
              <p class="mt-1 text-gray-500">
                {" "}
                Round-the-clock support: Your needs, our commitment.
              </p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              <img
                src="/plag.gif"
                alt="work"
                className="max-w-full h-8 w-12 text-blue-500 bg-transparent"
              />
            </span>
            <div>
              <h3 class="font-semibold text-xl">Plagiarism free</h3>
              <p class="mt-1 text-gray-500">
                {" "}
                Originality is our pledge, plagiarism-free content our
                guarantee.
              </p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              <img
                src="/privacy.gif"
                alt="work"
                className="max-w-full h-8 w-8 text-blue-500 bg-transparent"
              />
            </span>
            <div>
              <h3 class="font-semibold text-xl">Privacy</h3>
              <p class="mt-1 text-gray-500">
                {" "}
                Privacy is not an option, it's a necessity.
              </p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              <img
                src="/quality.gif"
                alt="work"
                className="h-8 w-8 text-blue-500 bg-transparent"
              />
            </span>
            <div>
              <h3 class="font-semibold text-xl">Quality Work</h3>
              <p class="mt-1 text-gray-500">
                {" "}
                Excellence in service, quality in work.
              </p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
              <img
                src="/modify.gif"
                alt="work"
                className="max-w-full  h-8 w-10 text-blue-500 bg-transparent"
              />
            </span>
            <div>
              <h3 class="font-semibold text-xl">Modification</h3>
              <p class="mt-1 text-gray-500">
                {" "}
                Efficient outsourcing mastery, precision perfected
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurGuarantee;
