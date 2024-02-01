// components/Terms.js

import React from "react";

const Terms = () => {
  return (
    <div className=" mb-8  mx-auto mt-8 p-16 lg:ml-32 lg:mr-32 sm:ml-8 sm:mr-8 ml-8 mr-8 bg-gray-200 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-black  bg-gray-200">
        Refund Policy - MindMosaic
      </h1>
      <h1 className="text-xl font-bold mb-4 text-black  bg-gray-200">
        We Resolve All Refund Requests as Per the Given Terms and Conditions:
      </h1>

      <section className="mb-4 bg-gray-200">
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          Expert’s Unavailability:
        </h2>
        <p className="text-black bg-gray-200">
          When this case happens where an expert is not available for you help
          and you paid the full amount for assignment then you can order the new
          assignment of same price. Between this period, the full amount paid by
          you then you will get 10GBP additional bonus.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          When the Deadline is Missed:
        </h2>
        <p className="text-black bg-gray-200">
          When you give work to us then you will get an assigned writer. If your
          assigned writer is unable to help you complete your assignment at a
          given time then you can make a complaint regarding refund, which will
          be solved by our customer support team. If your information is not
          correct regarding the assignment and lack of information provided by
          you then we will be unable to do full or partial refund request.
          <br />
          In case you do not get help for your assignment within the given
          deadline by us because of our expert’s inability then you will get
          100% refund of your order. The amount can be used for the new
          assignment or can be transferred to your account. However, we will
          take straight action against the writer for the delay. The decision of
          our customer support team will be authentic and will be taken after
          analyzing the whole problem.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          Failed Grades on Work:
        </h2>
        <p className="text-black bg-gray-200">
          If you get a fail grade in your assignment then you will have to
          submit the feedback report within 60 days of your assignment received
          then you will able to get your refund. In this case, we will check
          your feedback report and investigate if the cause is due to the low
          writing quality or any other reason. We firmly suggest our clients
          take the feedback on the work from the tutor before going for the
          final submission in order to improve the grades. If any mistake is
          found in the writer’s work, then we will process a 50-100% refund in
          your account. The final decision will be taken by our customer support
          team. Please note that any refund request will be valid only between
          60 days of receiving your assignment.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          Money-Back Guarantee:
        </h2>
        <p className="text-black bg-gray-200">
          Money-Back Guarantee request can be processed if you fail in the
          assignment. You will have to submit your original fail report which is
          investigated by our customer support team. The last decision on Money
          Back totally depends on our customer support team.
        </p>
        <br />
        <h2 className="text-lg font-bold mb-2 text-black bg-gray-200">
          Case Scenarios Where Refund requests will not be processed:
        </h2>
        <ul className="bg-gray-200">
          <li className="bg-gray-200 text-black m-2 font-semibold">
            1. When your partial payment is due for the assignment.
          </li>
          <li className="bg-gray-200 text-black m-2 font-semibold">
            2. If you submit your feedback report after 60 days when you got your
            assignment
          </li>
          <li className="bg-gray-200 text-black m-2 font-semibold">
            3. The assignment submission deadline is less than 72 hours.
          </li>
          <li className="bg-gray-200 text-black m-2 font-semibold">
            4. Refund will not be possible if you regulate the deadline within 3
            days of delivering of the work
          </li>
          <li className="bg-gray-200 text-black m-2 font-semibold">
            5. We are only responsible for refund in the case where a student is
            active in communication with our expert and make us avail all the
            essential information which is usable for the assignment.
          </li>
          <li className="bg-gray-200 text-black m-2 font-semibold">
            6. The refund request will be considered only when the student gives
            the feedback report on company mail not on any platform.
          </li>
       
        </ul>
      </section>

      {/* Add more sections for different parts of your terms and conditions */}
    </div>
  );
};

export default Terms;
