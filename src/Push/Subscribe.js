import React from "react";

import { useSigner, useAccount } from "wagmi";
import * as PushAPI from "@pushprotocol/restapi";

function Subscribe() {
  const { data: signer, isError, isLoading } = useSigner();
  const { address } = useAccount();
  async function Subscribe() {
    await PushAPI.channels.subscribe({
      signer: signer,
      channelAddress: "eip155:80001:0x9147BDf9aaca01B5f2680633e254a9776ecB10e5", // channel address in CAIP
      userAddress: `eip155:80001:0x0Db723d5863A9B33AD83aA349B27F8136b6d5360`, // user address in CAIP
      onSuccess: () => {
        console.log("opt in success");
      },
      onError: () => {
        console.error("opt in error");
      },
      env: "staging",
    });
  }

  return (
    <div>
      <button
        class="mx-8
        mb-8
        bg-gradient-to-r
        from-pink-700
        to-purple-600
        px-8
        py-2
        flex
        justify-center
        items-center
        rounded-xl
        text-white
        border
        border-white"
        onClick={Subscribe}
      >
        Opt-In
      </button>
    </div>
  );
}

export default Subscribe;
