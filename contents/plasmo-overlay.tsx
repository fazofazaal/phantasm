import cssText from "data-text:~/contents/plasmo-overlay.css"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://plasmo.com"],
  all_frames: true,
  css: ["font.css"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <>
      {/* <span
        className="hw-top"
        style={{
          padding: 12,
          width: "100vw",
          height: "100vh",
          opacity: 0.5
        }}>
        HELLO WORLD TOP
      </span> */}
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        // width="300"
        // height="200"
        style={{
          padding: 12,
          width: "100vw",
          height: "100vh",
          opacity: 0.5
        }}
        src="http://localhost:3000/"></iframe>
    </>
  )
}

export default PlasmoOverlay
