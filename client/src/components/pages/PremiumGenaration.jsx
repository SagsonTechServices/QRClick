import React, { useEffect, useRef, useState } from "react";
import QrCodeStyling from "qr-code-styling";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PremiumGeneration() {
  const [dotColor, setDotColor] = useState("black");
  const [url, setUrl] = useState("https://example.com");
  const [bgColor, setBgColor] = useState("white");
  const [dotType, setDotType] = useState("square");
  const [cornerDotType, setCornerDotType] = useState("square");
  const [logo, setLogo] = useState();
  const [qrShape, setQrShape] = useState("square");
  const [error, setError] = useState("");
  const qrCodeRef = useRef(null);
  const qrCode = useRef(
    new QrCodeStyling({
        data: url,
        shape: qrShape,
        type: 'svg',
      width: 300,
      height: 300,
      dotsOptions: { color: dotColor, type: dotType },
      backgroundOptions: { color: bgColor },
      cornersDotOptions: { type: cornerDotType },
      imageOptions: { crossOrigin: "anonymous", margin: 5 },
    })
  );

  const navigate = useNavigate();

  const handleOnDotColorChange = (event) => setDotColor(event.target.value);
  const handleOnBgColorChange = (event) => setBgColor(event.target.value);
  const handleOnDotTypeChange = (event) => setDotType(event.target.value);
  const handleOnQrShapeChange = (event) => setQrShape(event.target.value);
  const handleOnCornerDotTypeChange = (event) => setCornerDotType(event.target.value);
  const handleOnUrlChange = (event) => setUrl(event.target.value);

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setLogo(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Update the QR code options whenever relevant state changes
    qrCode.current.update({
      dotsOptions: { color: dotColor, type: dotType },
      backgroundOptions: { color: bgColor },
      cornersDotOptions: { type: cornerDotType },
      shape: qrShape,
      image: logo,
      data: url
    });

    qrCode.current.append(qrCodeRef.current);
  }, [dotColor, dotType, bgColor, cornerDotType, logo, qrShape]);

  async function handleOnPayNowClick(){
    if(url === 'https://example.com'){
        setError("Kindly enter the url before payment.");
        return;
    }
    setError("");
    document.getElementById('urlInput').close();

    // create order 
    try{
      console.log(import.meta.env.VITE_BACKEND_URL);
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}payment/create-order`, {amount: 99});
      const {id: order_id, currency, amount: order_amount} = response.data.order;

      // configure razorpay options 
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Replace with your actual Razorpay key
        amount: order_amount,
        currency: currency,
        name: "QR Code Generator",
        description: "Purchase customized QR code",
        order_id: order_id,
        handler: function (response) {
          alert("Payment Successful!");

          // Step 3: Trigger QR code download
          qrCode.current.download({ name: "QRCode", extension: "png" });
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="grid lg:grid-cols-2 bg-base-300 rounded-xl shadow-lg shadow-neutral grid-cols-1 lg:p-5 lg:my-10">
      <div className="p-5 space-y-5 lg:order-1 order-2">
      <div>
          <label htmlFor="qrShape" className="label label-text">
            Select the shape of your QR
          </label>
          <select
            className="select select-bordered select-primary w-full"
            id="QrShape"
            name="QrShape"
            value={qrShape}
            onChange={handleOnQrShapeChange}
          >
            <option value="square">Square</option>
            <option value="circle">Circle</option>
          </select>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 px-3 text-justify">
          <div>
            <label htmlFor="dotColor" className="label label-text">
              Pick a color for the dots
            </label>
            <input
              type="color"
              name="dotColor"
              id="dotColor"
              value={dotColor}
              onChange={handleOnDotColorChange}
              className="color-picker"
            />
          </div>
          <div>
            <label htmlFor="bgColor" className="label label-text">
              Pick a color for the background
            </label>
            <input
              type="color"
              name="bgColor"
              id="bgColor"
              value={bgColor}
              onChange={handleOnBgColorChange}
              className="color-picker input-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="dotType" className="label label-text">
            Select the dot type in your QR
          </label>
          <select
            className="select select-bordered select-primary w-full"
            id="dotType"
            name="dotType"
            value={dotType}
            onChange={handleOnDotTypeChange}
          >
            <option value="square">Square</option>
            <option value="rounded">Rounded</option>
            <option value="dots">Dots</option>
            <option value="classy">Classy</option>
            <option value="classy-rounded">Classy Rounded</option>
            <option value="extra-rounded">Extra Rounded</option>
          </select>
        </div>

        <div>
          <label htmlFor="cornerDotType" className="label label-text">
            Select the style for the corner dots
          </label>
          <select
            className="select select-bordered select-primary w-full"
            id="cornerDotType"
            name="cornerDotType"
            value={cornerDotType}
            onChange={handleOnCornerDotTypeChange}
          >
            <option value="square">Square</option>
            <option value="dot">Dot</option>
            <option value="extra-rounded">Extra Rounded</option>
          </select>
        </div>

        <div>
          <label htmlFor="logo" className="label label-text">
            Add a logo image
          </label>
          <input
            type="file"
            id="logo"
            name="logo"
            onChange={handleLogoChange}
            className="file-input file-input-bordered file-input-primary w-full"
          />
        </div>
      </div>

      <div className="flex items-center flex-col lg:order-2 order-1 justify-center bg-base-100 rounded-xl border border-sm border-neutral p-5">
        <div ref={qrCodeRef}></div>
        <div className="my-10">
        <button className="btn btn-primary w-full" onClick={() => document.getElementById('urlInput').showModal()}>Proceed to pay and download</button>
      </div>
      </div>

<dialog id="urlInput" className="modal">
  <div className="modal-box space-y-7">
    <h3 className="font-bold text-lg">Kindly enter the url to be embedded in the QR.</h3>
    {error !== "" && <div className="alert alert-error">{error}</div>}
    <input type="text" value={url} onChange={handleOnUrlChange} className="input input-bordered input-primary w-full" placeholder="URL" />
    <div className="modal-action">
        {/* if there is a button in form, it will close the modal */}
        <div className="space-x-2">
        <button className="btn btn-primary" onClick={handleOnPayNowClick} >Pay Now!</button>
        <form method="dialog" className="inline">
        <button className="btn btn-error">Close</button>
        </form>
        </div>
    </div>
  </div>
</dialog>
    </div>
  );
}

export default PremiumGeneration;
