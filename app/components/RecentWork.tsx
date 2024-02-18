import React from 'react'

const RecentWork = () => {
  return (
    <>
      <section className="py-10">
        <h1 className="mb-12 text-center font-sans text-4xl font-bold text-black ">
          Our Recent Technical Work
        </h1>
        <hr className="h-2 bg-indigo-600 w-52 mx-auto mt-8" />
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          <article className="h-90 col-span-1 m-auto min-h-full  overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <div className="block h-full w-full">
              <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src="/assets/rw3.png"
              />
              <div className="w-full bg-white p-4">
                <p className="text-md font-medium text-indigo-500">Coding</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  OhSnacker! - An ecomm brand store
                </p>
                <p className="text-md font-light text-gray-400">
                  Project Developed by -{" "}
                  <span className="font-semibold text-xs">Noah's Team</span>
                </p>
                <div className="justify-starts mt-4 flex flex-wrap items-center">
                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #js
                  </div>

                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #NextJS
                  </div>
                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #Firebase
                  </div>
                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #TailwindCSS
                  </div>
                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #MongoDB
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="h-90 col-span-1 m-auto min-h-full  overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <div className="block h-full w-full">
              {/* <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src="https://images.unsplash.com/photo-1660241588741-d653d53348fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              /> */}
              <span className="block h-[160px] w-full rounded-lg bg-gradient-to-r from-gray-200 to-gray-200/25 animate-pulse"></span>

              <div className="w-full bg-white p-4">
                {/* <span className="block h-4 w-72 rounded-lg bg-gradient-to-r from-gray-200 to-gray-200/25 animate-pulse "></span> */}
                {/* <p className="text-md font-medium text-indigo-500">Nature</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  A Visit to Mount Abignale
                </p> */}

                <span className="block h-6 w-52 rounded-lg bg-gradient-to-r from-gray-200 to-gray-200/25 animate-pulse mt-2"></span>
                {/* <br /> */}
                <span> {"  "}</span>
                {/* <p className="text-md font-light text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  vel neque ipsam?
                </p> */}
                <span className="block h-8 w-72 rounded-lg bg-gradient-to-r from-gray-200 to-gray-200/25 animate-pulse mt-2"></span>

                <div className="justify-starts mt-4 flex flex-wrap items-center">
                  {/* <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #js
                  </div>
                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #icefactory
                  </div> */}
                  <span className="block h-8 w-72 rounded-lg bg-gradient-to-r from-gray-200 to-gray-200/25 animate-pulse mt-2"></span>
                </div>
              </div>
            </div>
          </article>

          <article className="h-90 col-span-1 m-auto min-h-full  overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <div className="block h-full w-full">
              {/* <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src="https://images.unsplash.com/photo-1660241588741-d653d53348fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              /> */}
              <span className="block h-[160px] w-full rounded-lg bg-gradient-to-r from-gray-200 to-gray-200/25 animate-pulse"></span>

              <div className="w-full bg-white p-4">
                {/* <span className="block h-4 w-72 rounded-lg bg-gradient-to-r from-gray-200 to-gray-200/25 animate-pulse "></span> */}
                {/* <p className="text-md font-medium text-indigo-500">Nature</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  A Visit to Mount Abignale
                </p> */}

                <span className="block h-6 w-52 rounded-lg bg-gradient-to-r from-gray-200 to-gray-200/25 animate-pulse mt-2"></span>
                {/* <br /> */}
                <span> {"  "}</span>
                {/* <p className="text-md font-light text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  vel neque ipsam?
                </p> */}
                <span className="block h-8 w-72 rounded-lg bg-gradient-to-r from-gray-200 to-gray-200/25 animate-pulse mt-2"></span>

                <div className="justify-starts mt-4 flex flex-wrap items-center">
                  {/* <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #js
                  </div>
                  <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                    #icefactory
                  </div> */}
                  <span className="block h-8 w-72 rounded-lg bg-gradient-to-r from-gray-200 to-gray-200/25 animate-pulse mt-2"></span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default RecentWork