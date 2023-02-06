import { HuddleIframe } from "@huddle01/huddle01-iframe";

import React from 'react'

function Huddle() {
    const iframeConfig = {
      roomUrl: "https://iframe.huddle01.com/123",
      height: "600px",
      width: "80%",
      noBorder: false, // false by default
    };
  return (
    <div>
      <HuddleIframe config={iframeConfig} />
    </div>
  );
}

export default Huddle