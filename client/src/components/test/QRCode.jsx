import React from "react";
import hero from '../../assets/svg/hero.svg';
import QRCodeStyling from "qr-code-styling";
import { useEffect } from "react";

function QRCode(){
const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "https://www.instagram.com",
  image: hero,
  margin: 5,
  dotsOptions: {
    color: "#833AB4",
    type: "rounded" // Rounded dots improve scanability with colors
  },
  backgroundOptions: {
    color: "black"
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10,
  }
});

// Append the QR code to an element
useEffect(() => {
    function appendQr(){
        qrCode.append(document.getElementById("qr-code"));
    }
    appendQr();
}, [])

  return (
    <div>
      <div id="qr-code"></div>
    </div>
  );
}

export default QRCode;
