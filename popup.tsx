import OpacitySlider from "@components/opacity-slider"
import {
  blackA,
  grassDarkA,
  mauveDark,
  mauveDarkA,
  violetDark
} from "@radix-ui/colors"
import * as Label from "@radix-ui/react-label"
import * as Switch from "@radix-ui/react-switch"
import { globalCss, styled } from "@stitches/react"
import { useState } from "react"
import Logo from "react:~/assets/phantasm-logo.svg"

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
    <>
      <Body>
        <InputGroup>
          <LabelRoot htmlFor="url">Path</LabelRoot>
          <Input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="localhost:3000"
          />
        </InputGroup>
        <InputGroup>
          <LabelRoot htmlFor="url">Opacity</LabelRoot>
          <OpacitySlider
            value={opacity}
            onValueChange={(value) => setOpacity(value)}
            onValueCommit={handleValueCommit}
          />
          <small style={{ color: mauveDarkA.mauveA9 }}>
            Opacity: {opacity}%
          </small>
        </InputGroup>
      </Body>
      <Footer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <SwitchRoot id="airplane-mode">
          <SwitchThumb />
        </SwitchRoot>
      </Footer>
    </>
  )
}

const globalStyles = globalCss({
  body: { margin: 0, padding: 0 }
})

const Body = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  padding: 16,
  paddingBottom: 24,
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

const LogoContainer = styled("div", {
  width: "80px",
  display: "inline-block"
})

const Footer = styled("div", {
  background: violetDark.violet5,
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 16px"
})

const SwitchRoot = styled(Switch.Root, {
  all: "unset",
  width: 42,
  height: 25,
  backgroundColor: blackA.blackA9,
  borderRadius: "9999px",
  position: "relative",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  cursor: "pointer",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "&:focus": { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: `${grassDarkA.grassA9}` }
})

const SwitchThumb = styled(Switch.Thumb, {
  display: "block",
  width: 21,
  height: 21,
  backgroundColor: "white",
  borderRadius: "9999px",
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(19px)" }
})

export default IndexPopup
