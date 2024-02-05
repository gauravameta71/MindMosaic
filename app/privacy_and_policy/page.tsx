// components/Terms.js

import React from "react";

const Privacy = () => {
  return (
    <div className=" mb-8 mx-auto mt-8 p-4 lg:ml-32 lg:mr-32 sm:ml-8 sm:mr-8 ml-8 mr-8 bg-gray-200 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-black bg-gray-200">
        Privacy and Policy - MindMosaic
      </h1>

      <section className="mb-4 bg-gray-200">
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          1. Introduction
        </h2>
        <p className="text-black bg-gray-200">
          Welcome to MindMosaic, your trusted provider of assignment services.
          At MindMosaic, we are committed to safeguarding the privacy of our
          users. This Privacy Policy outlines how we collect, use, disclose, and
          protect your personal information when you use our website and
          services.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          2. Information We Collect
        </h2>
        <p className="text-black bg-gray-200">
          We may collect personal information from you when you use our website
          or avail yourself of our assignment services. This information may
          include, but is not limited to:
          <br />
          <br />
          <ul className="font-semibold bg-gray-200">
            <li className="bg-gray-200">1. Name</li>
            <li className="bg-gray-200">2. Email</li>
            <li className="bg-gray-200">3. Address</li>
            <li className="bg-gray-200">4. Contact Details</li>
            <li className="bg-gray-200">6. Academic Details</li>
            <li className="bg-gray-200">7. Payment Infomation</li>
          </ul>
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          3. How We Use Your Information
        </h2>
        <p className="text-black bg-gray-200">
          To request our services, you must provide accurate and complete
          information, including assignment details, deadlines, and any specific
          requirements. MindMosaic reserves the right to refuse service if we
          believe the request violates any academic integrity policies.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          4. Payment
        </h2>
        <p className="text-black bg-gray-200">
          We use the collected information for the following purposes:
          <br />
          <br />
          <ul className="font-semibold">
            <li className="bg-gray-200">1. To provide and improve our assignment services</li>
            <li className="bg-gray-200">2. To provide and improve our assignment services</li>
            <li className="bg-gray-200">3. To process payments and prevent fraud</li>
            <li className="bg-gray-200">4. To personalize your user experience</li>
            <li className="bg-gray-200">5. To comply with legal obligations</li>
          </ul>
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          4. Information Sharing and Disclosure
        </h2>

        <p className="text-black bg-gray-200">
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties. However, we may share your information with
          trusted third parties who assist us in operating our website,
          conducting our business, or providing services to you, as long as
          those parties agree to keep this information confidential.
        </p>
        <br />
        {/*  */}
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">5. Security</h2>
        <p className="text-black bg-gray-200">
          We take appropriate measures to protect your personal information from
          unauthorized access, disclosure, alteration, and destruction. We use
          industry-standard security protocols and technology to ensure the
          security of your data.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          6. Cookies and Tracking Technologies
        </h2>
        <p className="text-black bg-gray-200">
          Our website may use cookies and similar tracking technologies to
          enhance your user experience. You have the option to control cookies
          through your browser settings, but please note that disabling cookies
          may affect the functionality of our website.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">7. Contact Us</h2>
        <p className="text-black bg-gray-200">
          If you have any questions or concerns regarding our Privacy Policy,
          please contact us at [contact@mindmosaic.com].
        </p>
      </section>

      {/* Add more sections for different parts of your terms and conditions */}
    </div>
  );
};

export default Privacy;
