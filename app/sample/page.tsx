// components/Card.js
import Link from "next/link";
import React from "react";

const Card = () => (
  <>
    <h1 className="text-5xl lg:text-3xl xl:text-xl 2xl:text-2xl font-bold text-center text-black pt-6 pb-6 bg-white ">
      Samples
    </h1>
    <div className="flex flex-wrap justify-center gap-4 pb-12">
      {/* card 1 */}
      <div className="max-w-xs mx-auto p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="/assets/web.jpg"
            alt="card1"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h2 className="text-sm font-semibold mb-2 text-black">
              WEB APPLICATION DEVELOPMENT
            </h2>
            <Link href="/web">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* card 2 */}
      {/* ... Repeat similar structure for other cards */}
      <div className="max-w-xs mx-auto p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="/assets/business.jpg"
            alt="card1"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h2 className="text-sm font-semibold mb-2 text-black">
              BUSINESS MANAGEMENT – PPT
            </h2>
            <Link href="/business">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className="max-w-xs mx-auto p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="/assets/dbms.jpg"
            alt="card1"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h2 className="text-sm font-semibold mb-2 text-black">
              Database Management System(DBMS)
            </h2>
            <Link href="/dbms">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className="max-w-xs mx-auto p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="/assets/report.jpg"
            alt="card1"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h2 className="text-sm font-semibold mb-2 text-black">
              Reflective Report <br /> <br /> <span> </span>{" "}
            </h2>
            <Link href="/reflective">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md ">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className="max-w-xs mx-auto p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="/assets/webd.jpg"
            alt="card1"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h2 className="text-sm font-semibold mb-2 text-black">
              WEBSITE DESIGN, DEPLOYMENT & OPERATION UNDERSTANDING <br /> <br />{" "}
              <span> </span>
            </h2>
            <Link href="/webd">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* card 5 */}
      <div className="max-w-xs mx-auto p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="/assets/research.jpg"
            alt="card1"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h2 className="text-sm font-semibold mb-2 text-black">
              RESEARCH STUDY: IMPORTANCE OF RATIO ANALYSIS IN AN ORGANIZATION
            </h2>
            <Link href="/research">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* card 6 */}
      <div className="max-w-xs mx-auto p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="/assets/project.jpg"
            alt="card1"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h2 className="text-sm font-semibold mb-2 text-black">
              INTERNATIONAL OPERATIONS AND PROJECT MANAGEMENT <br /> <br />{" "}
              <span> </span>
            </h2>
            <Link href="/project">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* card 7 */}
      <div className="max-w-xs mx-auto p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="/assets/reflective.jpg"
            alt="card1"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h2 className="text-sm font-semibold mb-2 text-black">
              REFLECTIVE PROFESSIONAL PRACTICE <br /> <br /> <span> </span>
            </h2>
            <Link href="/reflective_p">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* card 8 */}
      <div className="max-w-xs mx-auto p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="/assets/hospitality.jpg"
            alt="card1"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h2 className="text-sm font-semibold mb-2 text-black">
              HOSPITALITY MANAGEMENT ASSIGNMENT <br /> <br /> <span> </span>
            </h2>
            <Link href="/hospitality">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Card;
