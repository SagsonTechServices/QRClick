import React from "react";
import { Link } from "react-router-dom";

function PackageCard({tire, desc, features, price, link}) {
  const styles = [
    {
      card: 'bg-base-200 shadow-md shadow-yellow-300', 
      button: 'bg-yellow-400 text-black hover:bg-yellow-500', 
      text: 'text-yellow-400',
      bulletin: "yellow"
    },
    {
      card: 'bg-neutral shadow-md shadow-primary', 
      button: 'bg-primary hover:bg-primary', 
      text: 'text-primary',
      bulletin: "#1EB854"
    },
    {
      card: 'bg-base-200 shadow-md shadow-blue-400', 
      button: 'bg-blue-400 text-black hover:bg-blue-500', 
      text: 'text-blue-400',
      bulletin: "white"
    }
  ]
  let selected = styles[1];
  switch(tire){
    case "Premium":
      selected = styles[0];
      break;
    case "Elite (monthly subscription)":
      selected = styles[2];
  }

  return (
    /* From Uiverse.io by Yaya12085 */
    <div class={`card rounded-xl ${selected.card}`}>
      <div class="header">
          <span class={`title ${selected.text}`}>{tire}</span>
        <span class="price">{price === 0 ? 'Free' : price}</span>
      </div>
      <p class="desc">{desc}</p>
      <ul class="lists">
        {features.map((feature) => {
          return(
            <li class="list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={selected.bulletin}
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>{feature}</span>
        </li>
          );
        })}
      </ul>
      <Link to={link}><button className={`btn ${selected.button} block w-full`}>Get Started</button></Link>
    </div>
  );
}

export default PackageCard;
