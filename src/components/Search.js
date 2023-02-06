import React, { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { useSigner, useAccount } from "wagmi";
import * as PushAPI from "@pushprotocol/restapi";
import { Chat } from "@pushprotocol/uiweb";

import axios from "axios";
function Search() {
      const iframeConfig = {
        roomUrl: "https://iframe.huddle01.com/123",
        height: "600px",
        width: "80%",
        noBorder: false, // false by default
      };
   const [showChat, setShowChat] = useState(false);
      const [showHuddle, setShowHuddle] = useState(false)

const[img,setImg]=useState(null)
  const [ipfsLink, setIpfsLink] = useState("");
    const [ownerAddress, setOwnerAddress] = useState("");
    const [ens, setENS] = useState("");
    const [selectedAddress ,setSelectedAddress] = useState("");

  const [image, setImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchValue1, setSearchValue1] = useState("");
  const [searchValue2, setSearchValue2] = useState("");
  const { data: signer, isError, isLoading } = useSigner();
  const { address } = useAccount();
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  function handleButtonClick1() {
    console.log("hi");
    setShowHuddle(true);
  }
const handleButtonClick = () => {
    console.log("hi");
  setShowChat(true);
    console.log("hi2");

    if (selectedOption === "ens" ) {
      setSelectedAddress(ens)
      console.log(ens)
console.log(selectedAddress);
    } else if (selectedOption === "opensea" || selectedOption === "address") {
      setSelectedAddress(ownerAddress);
    }

};
  async function Notification(owner) {
    console.log(owner);

    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 3, // target
        identityType: 2, // direct payload
        notification: {
          title: "Hello",
          body: "worldsss!!",
        },
        payload: {
          title: "Hello",
          body: "worldss!!",
          cta: "",
          img: "",
        },
        recipients: `eip155:80001:0x0Db723d5863A9B33AD83aA349B27F8136b6d5360`, // recipient address
        channel: "eip155:80001:0x9147BDf9aaca01B5f2680633e254a9776ecB10e5", // your channel address
        env: "staging",
      });

      // apiResponse?.status === 204, if sent successfully!
      console.log("API repsonse: ", apiResponse);
    } catch (err) {
      console.error("Error: ", err);
    }
  }

 async function ensHandler(val){
const provider = new ethers.providers.AlchemyProvider(
  "mainnet",
  "process.env.ALCHEMY_API_KEY"
);
const address=await provider.resolveName(val)
console.log(address);
setENS(address)
setImg(
  "https://public.bnbstatic.com/static/academy/uploads-original/7e1ad3c6293e4e938d8a98bf5c7772ca.png"
);
  }
  const extractData = (url) => {
    console.log(url);
    let parts = url.split("/");
    console.log(parts[3]);
    if (parts[3] !== "assets") {
      throw new Error("Only assets are supported");
    }
    let blockchain = parts[4];
    let address = parts[5];
    let number = parts[6];
    console.log("Blockchain:", blockchain);
    console.log("Address:", address);
    console.log("Number:", number);
    checkOwner(address, number);
  };

  async function checkOwner(address, number) {
    // The ABI (Application Binary Interface) is the interface that defines how to interact with the smart contract
    const abi = [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "ownerOf",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "tokenURI",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ];
    console.log("data");
    const provider = new ethers.providers.AlchemyProvider(
      "mainnet",
      "process.env.ALCHEMY_API_KEY"
    );
    console.log("data2");

    const contract = new ethers.Contract(address, abi, provider);
    console.log("data3");
console.log(address)
    const owner = await contract.ownerOf(number);
    console.log("data4");

    console.log("Owners:", owner);
        setOwnerAddress(owner);

    const tokenURI = await contract.functions.tokenURI(number);
    console.log(tokenURI, tokenURI[0]);

    setIpfsLink(tokenURI[0]);

    console.log("data5");
    // Notification(owner);
  }
  const getImageFromIpfs = async (ipfsLink) => {
    const parts = ipfsLink.split("/");
    const hash = parts[2];
    const imageNumber = parts[3];
    try {
      const { data } = await axios.get(
        `https://ipfs.io/ipfs/${hash}/${imageNumber}`
      );
      const part2 = data["image"].split("/");
      const imageHash = part2[2];
      const imageType = part2[3];
      console.log(`https://ipfs.io/ipfs/${imageHash}/${imageType}`);
      setImage(`https://ipfs.io/ipfs/${imageHash}/${imageType}`);
    } catch (error) {
      console.error(error);
    }
  }; //ipfs://QmSwyR1HcvdVxRppMWNvb8L9TU6sqcQ2WpwkXqxD42Gd72/5205.png
  //ipfs.io/ipfs/QmSwyR1HcvdVxRppMWNvb8L9TU6sqcQ2WpwkXqxD42Gd72/5205.png
  //https://ipfs.io/ipfs/QmSwyR1HcvdVxRppMWNvb8L9TU6sqcQ2WpwkXqxD42Gd72/5205
  useEffect(() => {
    if (ipfsLink) {
      getImageFromIpfs(ipfsLink);
    }
  }, [ipfsLink]);
  return (
    <div>
      <section class=" w-screen">
        <div class="container max-w-6xl mx-auto px-6 py-12">
          <nav class="flex  items-center justify-between font-bold text-black">
            <div class="font-rale text-xl">
              <Link to="/">NFT Connect</Link>
            </div>
            <div class="hidden h-10 font-alata md:flex md:space-x-8">
              <div class="float-right">
                <ConnectButton chainStatus="none" />
              </div>
            </div>
          </nav>
        </div>
      </section>
      <div class="realative w-[52vh] h-[65vh] gradient-yellow-pink-orange border border-gray-500 rounded-lg mt-10 ml-40 p-6 ">
        <p class="text-white  bottom-40 absolute p-2 font-rale font-18">
          <h1 class="mb-5 mr-4 text-center">HODL tight</h1>
          <h1 class="mb-5 text-center mr-2">Your NFT search is over!</h1>
        </p>
      </div>

      <section className=" absolute top-72 left-80 bg-white rounded-lg pb-4 px-8 ">
        <div className="flex flex-col items-center justify-between mt-12">
          <select
            className="bg-pink-400 text-white rounded-lg mr-16 mb-18 p-4 w-64"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Select an option</option>
            <option value="opensea">Opensea</option>
            <option value="ens">ENS</option>
            <option value="address">Address</option>
          </select>
          {selectedOption === "opensea" && (
            <div className="mt-4">
              <input
                type="text"
                className="w-64 h-10 p-2 rounded-lg bg-white border border-gray-400"
                value={searchValue1}
                placeholder="Add opensea url"
                onChange={(e) => setSearchValue1(e.target.value)}
              />
              <button
                onClick={() => extractData(searchValue1)}
                className="bg-purple-600 ml-2 text-white rounded-lg p-2 mt-2"
              >
                Search
              </button>
            </div>
          )}
          {selectedOption === "ens" && (
            <div className="mt-4">
              <input
                type="text"
                className="w-64 h-10 p-2 rounded-lg bg-white border border-gray-400"
                value={searchValue1}
                placeholder="Add ens name"
                onChange={(e) => setSearchValue1(e.target.value)}
              />
              <button
                onClick={() => ensHandler(searchValue1)}
                className="bg-purple-600 ml-2 text-white rounded-lg p-2 mt-2"
              >
                Search
              </button>
            </div>
          )}
          {selectedOption === "address" && (
            <div className="mt-4 flex flex-col items-center justify-between">
              <input
                type="text"
                className="w-64 h-10 p-2 mr-16 rounded-lg bg-white border border-gray-400"
                value={searchValue1}
                placeholder="Add address"
                onChange={(e) => setSearchValue1(e.target.value)}
              />
              <input
                type="text"
                className="w-64 h-10 p-2 mt-2 mr-16 rounded-lg bg-white border border-gray-400"
                value={searchValue2}
                placeholder="Add tokenid"
                onChange={(e) => setSearchValue2(e.target.value)}
              />
              <button
                onClick={() => checkOwner(searchValue1, searchValue2)}
                className="bg-purple-600 mr-12 text-white rounded-lg p-2 mt-2"
              >
                Search
              </button>
            </div>
          )}
        </div>
      </section>
      <section>
        {image || img ? (
          <div>
            <img
              src={image || img}
              alt="NFT Image"
              className="absolute top-40 right-60 w-[48vh] h-[50vh]"
            />
            <div class="absolute bottom-40 right-[40vh] flex flex-col items-center justify-center">
              {/* <h1 class="text-black text-lg font-rale text-indigo-500">
                Send Message
              </h1>
              <h1 class="text-black text-lg text-center font-rale text-indigo-500">
                to owner
              </h1> */}
              <br />
              <br />
              <button
                class="bg-gradient-to-r from-pink-400 to-purple-500  h-18 w-60 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-purple-600 hover:border-purple-500 rounded shadow"
                onClick={handleButtonClick}
              >
                {" "}
                send message
              </button>
              <br />
              <Link to="/huddle">
                {" "}
                <button
                  class="bg-gradient-to-r from-pink-400 to-purple-500  h-18 w-60 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-purple-600 hover:border-purple-500 rounded shadow"
                  onClick={handleButtonClick1}
                >
                  {" "}
                  Meet
                </button>{" "}
              </Link>
            </div>
            {console.log(selectedAddress)}
            {showChat && (
              <Chat
                account={address} //user address
                supportAddress={selectedAddress} //support address
                apiKey={process.env.PUSH_API_KEY}
                env="staging"
              />
            )}{" "}
            {/* {showHuddle && <HuddleIframe config={iframeConfig} />} */}
          </div>
        ) : (
          <div class="absolute top-40 right-60 w-[48vh] h-[50vh] rounded-lg border border-2 border-indigo-500 shadow-lg bg-white p-4 flex flex-col items-center justify-center">
            <h1 class="text-indigo-500 text-center text-lg font-rale">
              Your favorite NFT
            </h1>

            <h2 class="text-indigo-500 text-center text-lg font-rale">
              is just a search away
            </h2>
          </div>
        )}
      </section>
    </div>
  );
}

export default Search;
