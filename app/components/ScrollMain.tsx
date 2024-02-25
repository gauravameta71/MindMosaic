"use client";
import React from "react";
import { ContainerScroll } from "@/app/components/ui/container-scroll-animation";

 const HeroScrollDemo =()=> {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-md  md:text-4xl lg:text-6xl  text-black ">
              From Stress to Success:Your <br />
              <span className="text-2xl md:text-4xl lg:text-6xl font-bold mt-1 leading-none">
                Assignment Ally
              </span>
            </h1>
            <div className="mt-16 mb-16 flex flex-col items-center justify-center lg:divide-x lg:divide-gray-300 sm:flex-row ">
              {/* <div className="flex max-w-xs space-x-2 px-4 py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <p className="text-gray-600 text-md">
                  We provide work that is plagiarism-free, upholds high
                  standards.{" "}
                </p>
              </div> */}
              <div className="flex max-w-xs space-x-2 px-4 py-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <p className="text-gray-600 text-md">
                  We provide original, high-quality, and impeccable work free
                  from plagiarism.{" "}
                </p>
              </div>

              <div className="flex max-w-xs space-x-2 px-4 py-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
                <p className="text-gray-600 text-md">
                  We provide hands-on technical assignment tutorials designed
                  for learning purposes.{" "}
                </p>
              </div>
              <div className="flex max-w-xs space-x-2 px-4 py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-600 text-md">
                  Affordable rates, ensuring you can focus on value, not
                  expenses.{" "}
                </p>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}
export default HeroScrollDemo;



 const users = [
   {
     name: "Web Design",
     designation: "Founder, Algochurn",
     image: "/img1.jpg",
     // badge: "Mentor",
   },
   {
     name: "Sarah Singh",
     designation: "Founder, Sarah's Kitchen",
     image: "https://picsum.photos/id/11/300/300",
     // badge: "Mentor",
   },
   {
     name: "John Doe",
     designation: "Software Engineer, Tech Corp",
     image: "https://picsum.photos/id/12/300/300",
     // badge: "Mentor",
   },
   {
     name: "Jane Smith",
     designation: "Product Manager, Innovate Inc",
     image: "https://picsum.photos/id/13/300/300",
     // badge: "Mentor",
   },
   {
     name: "Robert Johnson",
     designation: "Data Scientist, DataWorks",
     image: "https://picsum.photos/id/14/300/300",
     // badge: "Mentor",
   },
   {
     name: "Emily Davis",
     designation: "UX Designer, DesignHub",
     image: "https://picsum.photos/id/15/300/300",
     // badge: "Mentor",
   },
   {
     name: "Michael Miller",
     designation: "CTO, FutureTech",
     image: "https://picsum.photos/id/16/300/300",
     // badge: "Mentor",
   },
   {
     name: "Sarah Brown",
     designation: "CEO, StartUp",
     image: "https://picsum.photos/id/17/300/300",
   },
   {
     name: "James Wilson",
     designation: "DevOps Engineer, CloudNet",
     image:
       "data:image/png;base64,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",
     // badge: "Something",
   },
   {
     name: "Patricia Moore",
     designation: "Marketing Manager, MarketGrowth",
     image: "https://picsum.photos/id/19/300/300",
     // badge: "Mentor",
   },
   {
     name: "Richard Taylor",
     designation: "Frontend Developer, WebSolutions",
     image: "https://picsum.photos/id/20/300/300",
   },
   {
     name: "Linda Anderson",
     designation: "Backend Developer, ServerSecure",
     image: "https://picsum.photos/id/21/300/300",
   },
   {
     name: "William Thomas",
     designation: "Full Stack Developer, FullStack",
     image: "https://picsum.photos/id/22/300/300",
     // badge: "Badger",
   },
   {
     name: "Elizabeth Jackson",
     designation: "Project Manager, ProManage",
     image: "https://picsum.photos/id/23/300/300",
     // badge: "Mentor",
   },
   {
     name: "David White",
     designation: "Database Administrator, DataSafe",
     image: "https://picsum.photos/id/24/300/300",
     // badge: "Advocate",
   },
   {
     name: "Jennifer Harris",
     designation: "Network Engineer, NetConnect",
     image: "https://picsum.photos/id/25/300/300",
   },
   {
     name: "Charles Clark",
     designation: "Security Analyst, SecureIT",
     image: "https://picsum.photos/id/26/300/300",
   },
   {
     name: "Susan Lewis",
     designation: "Systems Analyst, SysAnalyse",
     image: "https://picsum.photos/id/27/300/300",
   },
   {
     name: "Joseph Young",
     designation: "Mobile Developer, AppDev",
     image: "https://picsum.photos/id/28/300/300",
     // badge: "Mentor",
   },
   {
     name: "Margaret Hall",
     designation: "Quality Assurance, BugFree",
     image: "https://picsum.photos/id/29/300/300",
     // badge: "Developer",
   },
 ];
