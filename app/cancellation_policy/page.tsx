// components/Terms.js

import React from "react";

const Privacy = () => {
  return (
    <div className=" mb-8  mx-auto mt-8 p-16 lg:ml-32 lg:mr-32 sm:ml-8 sm:mr-8 ml-8 mr-8 bg-gray-200 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-black bg-gray-200">
        Our Cancellation Policy - MindMosaic
      </h1>

      <section className="mb-4 bg-gray-200">
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          MindMosaic provides an option of cancellation of any of the
          orders as now and then students have to drop the idea of taking the
          help of external sources due to some reasons. We do cancel the order
          by following conditions given below:
        </h2>

        <br />
        
          <ul className="font-semibold bg-gray-200 ">
            <li className="bg-gray-200 text-black m-4 text-semibold">
              1. If a student places the order twice and wants to cancel one.
            </li>
            <li className="bg-gray-200 text-black m-4 text-semibold">
              2. If the requirements of the assignment have been changed by his/
              her tutor.
            </li>
            <li className="bg-gray-200 text-black m-4 text-semibold">
              3. In case if we are not able to complete the project due to the
              absence of the experts.
            </li>
            <li className="bg-gray-200 text-black m-4 text-semibold">
              4. In case, we cannot complete the work until the given period.
            </li>
            <li className="bg-gray-200 text-black m-4 text-semibold">
              6. If the customer breaches any terms and conditions mentioned.
            </li>
            
          </ul>
        
      </section>
    </div>
  );
};

export default Privacy;
