import type { PlasmoCSConfig } from "plasmo";
import { useEffect, useState } from "react";

export const config: PlasmoCSConfig = {
  matches: ["https://www.google.com/*"]
};

const Overlay = () => {
  const [opacity, setOpacity] = useState(50);
  const [isOn, setIsOn] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (sender.id !== chrome.runtime.id) {
        return;
      }

      if (request.opacity) {
        console.log("received message", request);
        setOpacity(request.opacity);
      } else if (request.url) {
        console.log("received url message", request);
        setUrl(request.url);
      } else {
        console.log("received isOn message", request);
        setIsOn(request.isOn);
      }
    });
    return () => {
      chrome.runtime.onMessage.removeListener(() => {
        console.log("removed listener");
      });
    };
  }, []);

  if (url) {
    return (
      <iframe
        src={url}
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          opacity: opacity / 100,
          display: isOn ? "block" : "none"
        }}
      />
    );
  } else return null;
};

export default Overlay;
