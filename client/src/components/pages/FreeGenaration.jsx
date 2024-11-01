import React from "react";
import Heading1 from "../utils/Heading1";
import bulletin from "../../assets/icons/bulletin.png";
import empty from "../../assets/svg/empty.svg";
import { useState } from "react";
import QrCode from "qrcode";

function FreeGenaration() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [qrCode, setQrCode] = useState("");
  const [error, setError] = useState("");

  async function genarateQrCode() {
    try {
      const genaratedCode = await QrCode.toDataURL(url);
      setQrCode(genaratedCode);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    if (url === "") {
      setError("Please enter a URL to genarate QR code");
    } else {
      setError("");
    }
    setIsLoading(true);
    await genarateQrCode();
    setUrl("");
  }

  function handleOnUrlChange(event) {
    setUrl(event.target.value);
  }

  function handleOnDownloadClick() {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qrCode.png";
    link.click();
  }

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="space-y-10">
        <div className="text-center my-5">
          <Heading1
            text={"Genarate a 100% working QRCode, just by giving the URL!"}
          ></Heading1>
          <ul className="text-left text-xl space-y-3 my-10 px-4">
            <li>
              <span>
                <img src={bulletin} className="w-6 inline-block mx-4" />
              </span>
              Enter the URL in the input box below 🔗
            </li>
            <li>
              <span>
                <img src={bulletin} className="w-6 inline-block mx-4" />
              </span>
              Click on "Genarate" 👉
            </li>
            <li>
              <span>
                <img src={bulletin} className="w-6 inline-block mx-4" />
              </span>
              Your QRCode will get previewed on the right 💻
            </li>
            <li>
              <span>
                <img src={bulletin} className="w-6 inline-block mx-4" />
              </span>
              Download the QRCode and use it!! 🥳
            </li>
          </ul>
        </div>
        {error !== "" && <div className="alert alert-error">{error}</div>}
        <form
          onSubmit={handleOnSubmit}
          className="bg-base-300 rounded-xl shadow-primary shadow-sm px-5 py-10 grid grid-cols-12 gap-3"
        >
          <div className="col-span-9">
            <input
              type="text"
              placeholder="URL"
              className="input input-bordered w-full"
              value={url}
              onChange={handleOnUrlChange}
            />

          </div>
          <div className="col-span-3">
            <button className="btn block w-full hover:shadow-md hover:shadow-white btn-primary">
              Genarate
            </button>
          </div>
        </form>
      </div>

      <div className="mx-auto bg-base-200 rounded-lg px-10 pt-10">
        <div className="shadow-primary shadow-sm w-fit p-5 rounded-md">
          {isLoading && (
            <div className="loader loader-spinner text-primary"></div>
          )}
          {qrCode === "" && (
            <img src={empty} className="w-60 rounded-md" alt="Empty" />
          )}
          {qrCode !== "" && (
            <img src={qrCode} className="w-60 rounded-md" alt="Empty" />
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full my-10"
          disabled={qrCode === "" ? true : false}
          onClick={handleOnDownloadClick}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default FreeGenaration;
