"use client";
import "./globals.css";
import React from "react";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [word, setWord] = useState("");
  const [isPushed, setIsPushed] = useState(false);

  return (
    <>
      {!isPushed ? (
        <div
          className={
            "bg-slate-900 flex justify-center items-center flex-col w-screen h-screen"
          }
        >
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Marqueue
          </h1>
          <p className=" text-lg font-normal text-gray-500  sm:px-16 xl:px-48 dark:text-gray-400">
            Enter any text and see the magic happen
          </p>
          <div className=" text-lg font-normal text-gray-500  sm:px-16 xl:px-48 dark:text-gray-400">
            Press F11 to view in Fullscreen
          </div>
          <p className="mt-6 text-md font-normal text-gray-500  sm:px-16 xl:px-48 dark:text-gray-200">
            Refresh to try again
          </p>

          <div className="flex mt-5 gap-5 items-center justify-center">
            <input
              className="block p-2 w-52 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="marqueeInput"
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              required
            />

            <button
              onClick={() => {
                setIsPushed(true);
              }}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Submit
              </span>
            </button>
          </div>
          <div className="absolute right-5 bottom-5 flex gap-1">
            <div className="text-md font-normal text-gray-500 dark:text-gray-400">
              Developed with love by
            </div>
            <div className="text-md font-normal text-gray-500 dark:text-gray-200">
              Misha
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            "bg-slate-900 flex justify-center items-center flex-col w-screen h-screen"
          }
        >
          <Marquee
            pauseOnClick
            speed="300"
            gradient
            gradientColor="white"
            gradientWidth=" 200"
          >
            <h1 className="mb-4 mr-72 text-10xl font-bold tracking-tight text-gray-900 dark:text-white">
              {word}
            </h1>
          </Marquee>
        </div>
      )}
    </>
  );
};

export default Home;
