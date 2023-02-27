import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

const Overlay = () => {
  const [opacity, setOpacity] = useState(50)

  useEffect(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (sender.id !== chrome.runtime.id) {
        return
      }

      if (request.opacity) {
        console.log("received message", request)
        setOpacity(request.opacity)
      }
    })
    return () => {
      chrome.runtime.onMessage.removeListener(() => {
        console.log("removed listener")
      })
    }
  }, [])

  return (
    <iframe
      src="http://localhost:3000/"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
        opacity: opacity / 100
      }}></iframe>
  )
}

export default Overlay
