'use client'
import React, { useState } from "react";

import house from "../img/house.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";



const Card = (data : any) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <div className="max-w-xs rounded-md overflow-hidden shadow-lg ">
      
      <img className="w-full" src={house.src} alt="Sunset in the mountains" />
      <a
          className="absolute -mt-5  w-10 h-10 bg-blue-dark flex items-center justify-center text-center no-underline rounded-full text-white hover:bg-blue-darker"
          href="#"
        >
          <button className="text-white  rounded-es-md rounded-e-md bg-violet-800">Popular</button>
        </a>
      <div className="px-6 py-4">
        <div className="flex justify-between">
       
          <div className="font-bold text-xl mb-2">${data.price}/month</div>
            <button className="border-solid border-2 inline-block items-center rounded-full px-2 py-2 text-sm font-semibold text-gray-700" onClick={
                () => setIsLiked(!isLiked)
            }>
            {isLiked ?
                <AiFillHeart className="text-red-500 text-4xl" />
            :
                <AiOutlineHeart className=" text-4xl" />
            }
          </button>
        </div>
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">{data.address}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <hr className="pt-5 border-gray-400" />
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {data.beds} beds
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {data.bathrooms} bathrooms
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {data.sqft} sqft
        </span>
      </div>
    </div>
  );
};

export default Card;
