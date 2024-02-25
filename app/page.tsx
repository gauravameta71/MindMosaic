import Image from "next/image";
import Hero from "./components/Hero";
import "./globals.css";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Faq from "./components/Faq";
import Heroh from "./components/Heroh";
import Testimonial from "./components/Testimonial";
import Rating from "./components/Rating";
import HeroPage from "./components/HeroPage";



export default function Home() {
  return (
   <h1>
   {/* <HeroPage/> */}
   <Heroh/>
    <Hero/>
    <Hero2/>
    <Hero3/>
    <Hero4/>
    <Testimonial/>
    <Rating/>
    <Faq/>
   </h1>
  );
}
