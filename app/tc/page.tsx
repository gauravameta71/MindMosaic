// components/Terms.js

import React from "react";

const Terms = () => {
  return (
    <div className=" mb-8  mx-auto mt-8 p-4 lg:ml-32 lg:mr-32 sm:ml-8 sm:mr-8 ml-8 mr-8 bg-gray-200 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-black  bg-gray-200">
        Terms and Conditions - MindMosaic
      </h1>

      <section className="mb-4 bg-gray-200">
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">1. Introduction</h2>
        <p className="text-black bg-gray-200">
          Welcome to MindMosaic, your trusted partner in academic excellence. By
          accessing or using our website and services, you agree to comply with
          and be bound by these Terms and Conditions. Please read this document
          carefully before availing yourself of our assignment services.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          2. Service Description
        </h2>
        <p className="text-black bg-gray-200">
          MindMosaic offers assignment services across various fields of study,
          including but not limited to, science, arts, business, technology, and
          humanities. Our services encompass research, writing, editing, and
          proofreading to support your academic endeavors.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          3. Placing an Order
        </h2>
        <p className="text-black bg-gray-200">
          To request our services, you must provide accurate and complete
          information, including assignment details, deadlines, and any specific
          requirements. MindMosaic reserves the right to refuse service if we
          believe the request violates any academic integrity policies.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">4. Payment</h2>
        <p className="text-black bg-gray-200">
          Payment for our services is required in advance. We accept various
          payment methods, and all transactions are secure. Prices are subject
          to change, and any additional costs will be communicated to you before
          the commencement of work.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          5. Originality and Academic Integrity
        </h2>
        <p className="text-black bg-gray-200">
          MindMosaic is committed to delivering original and high-quality work.
          However, it is your responsibility to use our services ethically and
          in accordance with academic integrity policies. We do not support
          plagiarism, and our services are intended for research and learning
          purposes.
        </p>
        <br />
        {/*  */}
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          6. Revisions and Refunds
        </h2>
        <p className="text-black bg-gray-200">
          We strive for customer satisfaction. If you are not satisfied with the
          delivered work, you may request revisions within the specified
          timeframe. Refund policies are outlined in detail in our Refund Policy
          document.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          7. Confidentiality
        </h2>
        <p className="text-black bg-gray-200">
          MindMosaic respects the confidentiality of your personal information
          and assignment details. We do not disclose your information to third
          parties without your consent. Please review our Privacy Policy for
          more details.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          8. Limitation of Liability
        </h2>
        <p className="text-black bg-gray-200">
          While we make every effort to provide accurate and timely services,
          MindMosaic is not liable for any consequential, indirect, or
          incidental damages that may arise from the use of our services.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          9. Termination of Service
        </h2>
        <p className="text-black bg-gray-200">
          MindMosaic reserves the right to terminate or suspend services if
          there is a violation of these Terms and Conditions or if we believe it
          is necessary to protect our interests or comply with legal
          requirements.
        </p>
      </section>

      {/* Add more sections for different parts of your terms and conditions */}
    </div>
  );
};

export default Terms;
