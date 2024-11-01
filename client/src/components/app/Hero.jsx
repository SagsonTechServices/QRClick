import React from "react";
import hero from "../../assets/svg/hero.svg";
import Button1 from "../utils/Button1";
import {Link} from 'react-router-dom'
import Heading1 from "../utils/Heading1";

function Hero() {
  return (
    <div className="container flex lg:flex-row flex-col align-middle justify-center">
      <div className="text-center space-y-8 my-auto lg:w-1/2">
        <Heading1 text={"Create Custom QR Codes in Seconds"}></Heading1>
        <p className="text-2xl text-center">
          Generate professional, customizable QR codes for your business,
          marketing, or personal use. Track scans, share with ease, and take
          your projects to the next level.
        </p>
        <div className="py-10">
          <Link to={'/packages'}><Button1 classes={"mx-auto"} text={"Start Generating Your QR Code Now"}></Button1></Link>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src={hero} className="w-full mx-auto" />
      </div>
    </div>
  );
}

export default Hero;
