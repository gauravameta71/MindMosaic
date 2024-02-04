/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="flex items-center bg-stone-100 font-poppins bg-transparent ">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="px-4 mb-10 md:text-center md:mb-20">
          <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl ">
            FAQ's
          </h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
            <div className="flex-1 h-[5px] bg-gray-200"></div>
            <div className="flex-1 h-[5px] bg-gray-400"></div>
            <div className="flex-1 h-[5px] bg-gray-300"></div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-5 text-white min-h-sceen">
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div className="py-5 ">
              <details className="group text-black">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    Is it available for students in the UK only, or can
                    international students also use the service?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-400 mt-3 group-open:animate-fadeIn">
                  MindMosaic is available to both students in the UK and
                  international students studying in the UK.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group text-black">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Why I have to choose MindMosaic, and how can it assist me
                    with my assignments?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-400 mt-3 group-open:animate-fadeIn">
                  MindMosaic is an academic assistance service that provides
                  personalized assignment help. We can assist you with research,
                  writing, and guidance to help you excel in your studies.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group text-black">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Are you provide original and plagiarism-free content?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-400 mt-3 group-open:animate-fadeIn">
                  Yes, all assignments from Assignment In Need are
                  custom-written, unique, and rigorously checked for plagiarism
                  to ensure originality.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group text-black">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> How do I place an order for assignment help?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-400 mt-3 group-open:animate-fadeIn">
                  To place an order, visit our website, fill out the order form
                  with your assignment details, make payment, and we will assign
                  a qualified writer to your task.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group text-black">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Can I choose a specific writer for my assignment, especially
                    if I have worked with them before?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-400 mt-3 group-open:animate-fadeIn">
                  Yes, you have the option to select a preferred writer based on
                  their profiles and reviews. You can also have a suitable
                  writer assigned to your task.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group text-black">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    What subjects and academic levels does MindMosaic cover?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-400 mt-3 group-open:animate-fadeIn">
                  MindMosaic covers a wide range of subjects and
                  academic levels, from high school to university and
                  postgraduate levels. Our expert writers are proficient in
                  various disciplines.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group text-black">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    How does MindMosaic ensure data privacy and confidentiality?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-400 mt-3 group-open:animate-fadeIn">
                  We have stringent privacy policies in place to safeguard your
                  personal information and ensure confidentiality regarding your
                  assignments.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group text-black">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Can I track the progress of my assignment as it's being
                    completed?
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-400 mt-3 group-open:animate-fadeIn">
                  Yes, you can track the progress by communicating with your
                  assigned writer through our secure messaging system.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group text-black">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> How can I request a revision for my assignment?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-400 mt-3 group-open:animate-fadeIn">
                  Requesting a revision is easy. Once you receive your completed
                  assignment from Assignment In Need, review it carefully. If
                  you need any changes or revisions, simply log in to your
                  account, go to the order page, and click the "Request
                  Revision" button. Provide clear instructions regarding the
                  changes you'd like, and our team will promptly address your
                  revision request to ensure your satisfaction. We offer free
                  revisions within a reasonable scope to meet your requirements.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
