import OpacitySlider from "@components/opacity-slider"
import { blackA, mauveDark, mauveDarkA } from "@radix-ui/colors"
import * as Label from "@radix-ui/react-label"
import { globalCss, styled } from "@stitches/react"
import { useState } from "react"

function IndexPopup() {
  const [opacity, setOpacity] = useState([50])
  const [url, setUrl] = useState("")

  globalStyles()

  async function handleValueCommit(value) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    await chrome.tabs.sendMessage(tab.id, {
      opacity: value
    })
  }

  return (
    <Panel>
      <InputGroup>
        <LabelRoot htmlFor="url">Overlay URL</LabelRoot>
        <Input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="localhost:3000"
        />
      </InputGroup>
      <InputGroup>
        <LabelRoot htmlFor="url">Overlay Opacity</LabelRoot>
        <OpacitySlider
          value={opacity}
          onValueChange={(value) => setOpacity(value)}
          onValueCommit={handleValueCommit}
        />
        <p style={{ color: mauveDarkA.mauveA9 }}>Opacity: {opacity}%</p>
      </InputGroup>
    </Panel>
  )
}

const globalStyles = globalCss({
  body: { margin: 0, padding: 0 }
})

const Panel = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  padding: 16,
  backgroundColor: mauveDark.mauve2
})

const LabelRoot = styled(Label.Root, {
  fontSize: 15,
  fontWeight: 500,
  lineHeight: "35px",
  color: mauveDarkA.mauveA11
})

const Input = styled("input", {
  all: "unset",
  width: 200,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: "white",
  backgroundColor: mauveDarkA.mauveA3,
  "&:focus": { boxShadow: `0 0 0 2px ${blackA.blackA10}` }
})

const InputGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 4
})

export default IndexPopup
