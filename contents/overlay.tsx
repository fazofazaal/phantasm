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
      }
      if (request.isOn) {
        console.log("received isOn message", request);
        setIsOn(request.isOn);
      }
      if (request.url) {
        console.log("received url message", request);
        setUrl(request.url);
      }
    });
    return () => {
      chrome.runtime.onMessage.removeListener(() => {
        console.log("removed listener");
      });
    };
  }, []);

  if (isOn && url) {
    return (
      <iframe
        src={url}
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          opacity: opacity / 100
        }}/>
    );
  } else return null;
};

export default Overlay;
