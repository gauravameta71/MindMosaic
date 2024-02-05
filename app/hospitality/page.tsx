// components/WhoWeAre.js
import Link from "next/link";
import React from "react";

const business = () => {
  return (
    <>
      <div className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 leading-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hospitality Management
            </p>
          </div>

          <div className="mt-10">
            <div className="flex justify-center items-center md:flex-row md:space-x-8">
              <div className="mb-4 md:w-1/2">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg shadow-lg"
                  src="/assets/hospitality.jpg"
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
                <h2 className="text-2xl font-semibold text-black">
                  Introduction
                </h2>
                <p className="text-gray-600">
                  In the dynamic and ever-evolving world of hospitality
                  management, academic excellence is a key driver for future
                  success. Navigating through the intricacies of this vibrant
                  industry requires not only practical skills but also a solid
                  understanding of theoretical concepts. For students pursuing
                  studies in hospitality management, assignments play a crucial
                  role in honing their knowledge and skills. This is where
                  specialized Hospitality Management Assignment Services step in
                  to provide invaluable support.
                </p>
                {/*  */}
                <br />
                <p className="text-black pt-2 font-semibold">
                  Why Opt for Hospitality Management Assignment Services?
                </p>{" "}
                <br />
                <p className="text-black font-semibold">
                  1. Expertise in the Field:
                </p>{" "}
                <br />
                <p className="text-black">
                  Professional assignment services often employ experts with a
                  background in hospitality management. These individuals bring
                  a wealth of knowledge about the industry, its trends,
                  challenges, and best practices, ensuring that your assignment
                  reflects a deep understanding of the subject matter.
                </p>
                {/*  */}
                <p className="text-black pt-2 font-semibold">
                  2. Customized Solutions:
                </p>{" "}
                <br />
                <p className="text-black">
                  Hospitality assignments can vary widely, covering topics such
                  as hotel management, event planning, tourism, and customer
                  service. Reputable assignment services understand the diverse
                  nature of these topics and tailor their assistance to meet the
                  unique requirements of each assignment. Whether it's a case
                  study, research paper, or project report, they've got you
                  covered.
                </p>
                {/*  */}
                <p className="text-black pt-2 font-semibold">
                  3. Thorough Research:
                </p>{" "}
                <br />
                <p className="text-black">
                  A hallmark of top-notch hospitality management assignments is
                  the incorporation of relevant and up-to-date information.
                  Assignment services leverage their research skills to gather
                  data from academic journals, industry reports, and reputable
                  sources, ensuring that your assignment is grounded in the
                  latest industry insights.
                </p>
                {/*  */}
                <p className="text-black pt-2 font-semibold">
                  4. Professional Writing:
                </p>{" "}
                <br />
                <p className="text-black">
                  Crafting a well-structured and articulate assignment is an
                  art. Assignment services employ writers with strong
                  communication skills, ensuring that your ideas are presented
                  coherently and persuasively. Proper grammar, formatting, and
                  adherence to assignment guidelines are the cornerstones of
                  their writing process.
                </p>
               
                {/*  */}
                <p className="text-black pt-2 font-semibold">
                  5. Timely Delivery:
                </p>{" "}
                <br />
                <p className="text-black">
                  Recognizing the importance of deadlines in the academic world,
                  these services prioritize timely delivery. Whether you're
                  facing a tight schedule or looking to submit your assignment
                  well in advance, they understand the significance of
                  punctuality.
                </p>
                {/*  */}
                <p className="text-black pt-2 font-semibold">
                  6. Plagiarism-Free Content:
                </p>{" "}
                <br />
                <p className="text-black">
                  Academic integrity is paramount. Reputable assignment services
                  ensure that the content they provide is original and free from
                  plagiarism. Through proper citation methods and a commitment
                  to authenticity, they uphold the highest standards of academic
                  honesty.
                </p>
                <br />
                {/*  */}
                <p className="text-black pt-2 font-semibold text-xl">
                  References
                </p>{" "}
                <br />
                <p className="text-black text-xs">
                  <span className="text-black font-semibold">1. Books:</span>{" "}
                  <br />
                  "Hospitality Management: A Brief Introduction" by Roy C. Wood{" "}
                  <br />
                  "Introduction to Management in the Hospitality Industry" by
                  Clayton W. <br /> Barrows and Tom Powers "Hospitality
                  Management Accounting" by Martin G. Jagels
                </p>
                <br />
                <p className="text-black text-xs">
                  <span className="text-black font-semibold">
                    2. Academic Journals:
                  </span>{" "}
                  <br />
                  Journal of Hospitality and Tourism Management <br />{" "}
                  International Journal of Hospitality Management <br /> Cornell
                  Hospitality Quarterly
                </p>
                <br />
                <p className="text-black text-xs">
                  <span className="text-black font-semibold">
                    3. Industry Reports:
                  </span>{" "}
                  <br />
                  World Travel & Tourism Council (WTTC) Reports <br />{" "}
                  Deloitte's Hospitality Industry Insights <br /> PwC's
                  Hospitality & Leisure Reports
                </p>
                <br />
                <p className="text-black text-xs">
                  <span className="text-black font-semibold">
                    4. Websites and Online Resources:
                  </span>{" "}
                  <br />
                  American Hotel & Lodging Educational Institute (AHLEI) <br />{" "}
                  Cornell Center for Hospitality Research <br /> UNWTO (United
                  Nations World Tourism Organization)
                </p>
                <br />
                <p className="text-black text-xs">
                  <span className="text-black font-semibold">
                    5. Case Studies:
                  </span>{" "}
                  <br />
                  Harvard Business Review - Search for hospitality-related case{" "}
                  <br />
                  studies Ivey Publishing - A repository for business cases,
                  including those in the hospitality sector
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default business;
