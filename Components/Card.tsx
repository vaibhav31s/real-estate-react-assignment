"use client";
import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { BiBed, BiBath } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { TbRotateRectangle } from "react-icons/tb";

const Card = (data: any) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <div className="w-96 rounded-md overflow-hidden shadow-lg ">
      <img
        className="w-full"
        src={data.img.src}
        alt="Sunset in the mountains"
      />
      <a
        className="absolute -mt-5  w-10 h-10 bg-blue-dark flex items-center justify-center text-center no-underline rounded-full text-white hover:bg-blue-darker"
        href="#"
      >
        <button className="text-white  rounded-es-md rounded-e-md bg-violet-800 p-0.5">
          <div className="flex justify-items-center justify-center">
            <BsStars /> Popular
          </div>
        </button>
      </a>
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl mb-2"><span className="text-violet-800 text-3xl">${data.price}</span><span className="text-gray-500 font-normal">/month</span></div>
          <button
            className="border-solid border-2 inline-block items-center rounded-full px-2 py-2 text-sm font-semibold text-gray-700"
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? (
              <AiFillHeart className="text-red-500 text-4xl" />
            ) : (
              <AiOutlineHeart className=" text-4xl" />
            )}
          </button>
        </div>
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">{data.address}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <hr className="pt-5 border-gray-400" />
        <span className="inline-block  rounded-full px-2 py-1 text-sm font-semibold mr-1 mb-1 ">
          <div className="justify-center justify-items-center items-between grid grid-flow-col">
            <BiBed className="text-xl" /> {data.beds} beds
          </div>
        </span>
        <span className="inline-block  rounded-full px-2 py-1 text-sm font-semibold mr-1 mb-1">
          <div className="justify-between justify-items-between items-between grid grid-flow-col">
            <BiBath className="text-xl"/> {data.bathrooms} bathrooms
          </div>
        </span>
        <span className="inline-block  rounded-full px-2 py-1 text-sm font-semibold mr-1 mb-1">
          <div className="justify-center justify-items-center items-between grid grid-flow-col">
            <TbRotateRectangle className="text-xl"/> {data.sqft} m
            <sup className="text-xs align-top">2</sup>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Card;
