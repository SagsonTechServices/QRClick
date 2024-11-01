import React from "react";
import accessDenied from "../../assets/svg/accessDenied.svg";
import Heading1 from "../utils/Heading1";
import Button1 from "../utils/Button1";

function ErrorPage() {
  return (
    <div>
      <div className="text-center space-y-5 w-fit mx-auto">
          <img
            src={accessDenied}
            alt="Access Denied"
            className="w-60 mx-auto"
          />
          <Heading1 text={"Your QRcode is not active yet!"}></Heading1>

        <div className="text-left space-y-5">
            <h1 className="text-2xl">This can be due to...</h1>
            <ul style={{listStyle: 'square'}} className="font-bold">
                <li>You might not have paid for the custom QRCode.</li>
                <li>You might have scanned the dummy QRCode displayed to you during customization.</li>
            </ul>
        </div>

        <p className="text-lg">For any confusion contact us now...</p>
        <Button1 text={"Contact us"} classes={"mx-auto"}></Button1>
      </div>
    </div>
  );
}

export default ErrorPage;
