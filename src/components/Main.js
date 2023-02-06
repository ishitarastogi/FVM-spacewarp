import React from 'react'
import work1 from "../images/work3.jpeg";
import Subscribe from '../Push/Subscribe';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <section className="hero">
        <div class="container max-w-6xl mx-auto px-6 py-12">
          <nav class="flex  items-center justify-between font-bold text-white">
            <div class="font-rale text-xl"> <Link to="/">NFT Connect</Link></div>
            <div class="hidden h-10 font-alata md:flex md:space-x-8">
              <div class="group">
                <Link to="/search" class="text-2xl">
                  Search
                </Link>
                <div class="  group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div>
                <Subscribe />
              </div>
              <div class="float-right">
                <ConnectButton chainStatus="none" />
              </div>
            </div>
          </nav>
          <div class="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl  text-white uppercase border-2 md:p-8   md:text-6xl">
            Discover Your Next Favorite NFT
          </div>
        </div>
      </section>

      <section id="feature">
        <div class="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:right-40 md:flex-row md:px-0 md:justify-center md:items-center">
          <img src={work1} alt="" class="w-1/2" />

          <div class="top-32 pr-0 bg-white md:absolute md:right-0  md:pl-4 md:py-16">
            <h2 class="max-w-lg mt-10 mb-6 font-alata text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              How It Works?
            </h2>

            <p class="max-w-md text-center md:text-left">
              <ul class="list-decimal pl-8">
                <li class="mb-3 py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg shadow-md">
                  Opt-in with your address
                </li>
                <li class="mb-3 py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg shadow-md">
                  Search NFT by resolver or address and token id
                </li>
                <li class="py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg shadow-md">
                  Connect with NFT owner via push chat
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <footer class="bg-gray-900 text-gray-200 py-16 px-8  h-40">
        <div class="container mx-auto flex items-center justify-between">
          <p class="font-rale">NFT Connect</p>
        </div>
      </footer>
    </div>
  );
}

export default Main