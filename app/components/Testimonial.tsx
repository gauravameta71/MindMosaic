import React from 'react'

const testimonial = () => {
  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h2 className="mt-4 text-3xl font-bold text-black sm:text-4xl xl:text-5xl">
                Have a look at what our clients say
              </h2>
              <hr className="h-2 bg-indigo-600 w-52 mx-auto mt-8" />
            </div>

            <div className="mt-8 text-center md:order-3 md:mt-16">
              <a
                href="#"
                title=""
                className="border-b-2 border-gray-900 pb-2 text-base font-bold leading-7 text-black transition-all duration-200 hover:border-indigo-600 hover:text-indigo-600 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Read more reviews
              </a>
            </div>

            <div className="relative mt-10 md:order-2 md:mt-24">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div className="mx-auto h-full w-full max-w-5xl rounded-3xl opacity-30 blur-lg filter"></div>
              </div>

              <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-2 lg:gap-10">
                <div className="relative flex flex-col overflow-hidden">
                  <svg
                    className="absolute top-6 text-4xl text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"
                    />
                  </svg>
                  <div className="flex flex-1 flex-col justify-between p-6 lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <blockquote className="mt-8 flex-1">
                        <p className="text-xl font-[600] leading-snug text-black">
                          I was struggling with my marketing assignment, but the
                          help I received was exceptional! The expert not only
                          delivered a well-researched paper but also provided
                          valuable insights. I aced my assignment and gained a
                          deeper understanding of the topic. Thank you!
                        </p>
                      </blockquote>
                    </div>

                    <div className="mt-8 flex items-center tracking-wide">
                      <p className="text-base font-bold text-black">Natasha</p>
                      <p className="ml-3 text-gray-700">- Marketing Student</p>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col overflow-hidden">
                  <svg
                    className="absolute top-6 text-4xl text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"
                    />
                  </svg>
                  <div className="flex flex-1 flex-col justify-between p-6 lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <blockquote className="mt-8 flex-1">
                        <p className="text-xl font-[600] leading-snug text-black">
                          As a computer science student, I often find coding
                          assignments challenging. The support I received was
                          fantastic. The code was clean, well-commented, and the
                          explanations helped me understand every line and the tutorial was just amazing. Great
                          experience!
                        </p>
                      </blockquote>
                    </div>

                    <div className="mt-8 flex items-center tracking-wide">
                      <p className="text-base font-bold text-black">Sarah L.</p>
                      <p className="ml-3 text-gray-700">
                        - Computer Science Student
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default testimonial;