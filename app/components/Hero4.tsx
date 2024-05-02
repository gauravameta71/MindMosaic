

import React from 'react'

const Hero4 = () => {
  return (
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-black">
      <h2 class="font-headline text-2xl font-semibold sm:text-4xl text-center">
        How We Work? - Our Procedure
      </h2>

      <div class="grid sm:grid-cols-3 gap-16 sm:gap-8 mt-16 sm:mt-24">
        <div class="text-center">
          <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
            <div class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
              <img src="/order.gif" alt="" className="h-14 w-14" />
            </div>
            <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
          </div>
          <h3 class="font-headline text-xl font-semibold sm:text-2xl mt-6 sm:mt-10">
            1. Place Your Order
          </h3>
          <p class="leading-relaxed mt-4">
            Submit your assignment details and requirements through our
            user-friendly order form.
          </p>
        </div>
        <div class="text-center">
          <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
            <div class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
              <img src="/expertw.gif" alt="" className="h-14 w-14" />
            </div>
            <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
          </div>
          <h3 class="font-headline text-xl font-semibold sm:text-2xl mt-6 sm:mt-10">
            2. Expert Writers
          </h3>
          <p class="leading-relaxed mt-4">
            Our team of experienced writers will be assigned to work on your
            assignment, ensuring expertise in the subject..
          </p>
        </div>
        <div class="text-center">
          <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
            <div class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
              <img src="/time.gif" alt="" className="h-16 w-16 rounded-full" />
            </div>
            <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
          </div>
          <h3 class="font-headline text-xl sm:text-2xl font-semibold mt-6 sm:mt-10">
            3. Timely Delivery
          </h3>
          <p class="leading-relaxed mt-4">
            Receive your well-crafted assignment within the specified timeframe,
            meeting all quality standards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero4