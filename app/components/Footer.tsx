import Link from "next/link";
import Image from "next/image";

import "../globals.css";

const Footer = () => {
  return (
    <>
      <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 py-2" />
      <footer className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex justify-start">
                <img
                  src="/assets/logo.png"
                  alt="logo"
                  className="h-10 w-auto mr-3 flex justify-start"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                  Contact Us
                </h2>
                {/* SVG - W */}
                <div className="flex flex-col space-y-4">
                  {/* 1 */}
                  <h1 className="flex items-center text-sm text-black font-semibold ">
                    <img
                      src="/assets/location.png"
                      alt="location"
                      className="w-[16px] h-[14px] mr-2"
                    />
                    <p>Bruche, Warrington, England, UK</p>
                  </h1>

                  {/* 2 */}
                  <h1 className="flex items-center text-sm text-black font-semibold">
                    <img
                      src="/assets/mail.png"
                      alt="mail"
                      className="w-[16px] h-[14px] mr-2"
                    />
                    <p>nick@themindmosaic <span>.com</span></p>
                  </h1>

                  {/* 3 */}
                  <Link
                    href="https://wa.me/message/LBGOR7HIIXZPO1"
                    className="flex items-center text-sm  hover:text-gray-300 text-black font-semibold"
                  >
                    <img
                      src="/assets/whatsapp.png"
                      alt="mail"
                      className="w-[16px] h-[14px] mr-2"
                    />
                    <p>+44 330-828-5951</p>
                  </Link>
                  {/* 3 */}
                </div>
              </div>
              <div>
                <h2 className="mb-3.5 text-sm font-semibold text-gray-900 uppercase">
                  Policies
                </h2>
                <ul className="text-gray-500 dark:text-white font-medium">
                  <li>
                    <Link
                      href="/privacy_and_policy"
                      className="text-sm  hover:text-gray-300 text-black font-semibold"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refund_policy"
                      className="text-sm  hover:text-gray-300 text-black font-semibold"
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cancellation_policy"
                      className="text-sm  hover:text-gray-300 text-black font-semibold"
                    >
                      Cancellation Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tc"
                      className="text-sm  hover:text-gray-300 text-black font-semibold"
                    >
                      Terms and Condition
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3.5 text-sm font-semibold text-black uppercase ">
                  Quick Links
                </h2>
                <ul className="text-gray-500 dark:text-white font-medium">
                  <li>
                    <Link
                      href="/pricing"
                      className="text-sm  hover:text-gray-300 text-black font-semibold"
                    >
                      Order Now
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm  hover:text-gray-300 text-black font-semibold"
                    >
                      Connect With Us
                    </Link>
                  </li>
                  <li>
                    {/* <Link
                      href="/"
                      className="text-sm  hover:text-gray-300 text-black font-semibold"
                    >
                      Services
                    </Link> */}
                  </li>
                  <li>
                    <Link
                      href="/tutorial_req_page"
                      className="text-sm  hover:text-gray-300 text-black font-semibold"
                    >
                      Technical Assignment Tutorial
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between dark:text-gray-400">
            <span className="text-sm sm:text-center ">
              © 2024{" "}
              <Link href="/" className="hover:text-red-500">
                MindMosaic!™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <Link
                href="https://www.instagram.com/mindmosaic.mm?igsh=MWphbzVnZ2FrN2IybA=="
                className="text-Name hover:text-gray-900 dark:hover:text-white"
              >
                <img
                  src="/assets/instagram.png"
                  alt="facebook"
                  className=" w-[28px] h-[27px] flex mt-[-12px]"
                />

                <span className="sr-only">Instagram page</span>
              </Link>

              <Link
                href="https://wa.me/message/LBGOR7HIIXZPO1"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-red-600"
              >
                <img
                  src="/assets/whatsapp.png"
                  alt="whatsapp"
                  className=" w-[28px] h-[27px] flex mt-[-12px]"
                />
                <span className="sr-only">Whatsapp</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
