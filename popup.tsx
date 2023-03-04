import Slider from "@components/slider";
import Switch from "@components/switch";
import { blackA, mauveDark, mauveDarkA, violetDark } from "@radix-ui/colors";
import * as Label from "@radix-ui/react-label";
import { globalCss, styled } from "@stitches/react";
import { KeyboardEvent, KeyboardEventHandler, useState } from "react";
import Logo from "react:~/assets/phantasm-logo.svg";

function IndexPopup() {
  const [opacity, setOpacity] = useState<number[]>([50]);
  const [url, setUrl] = useState<string>("");
  const [isOn, setIsOn] = useState<boolean>(true);

  globalStyles();

  async function handleValueCommit(value: number[]) {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    await chrome.tabs.sendMessage(tab.id, {
      opacity: value
    });
  }

  async function handleCheckedChange(checked: boolean) {
    setIsOn(checked);

    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    await chrome.tabs.sendMessage(tab.id, {
      isOn: checked
    });
  }

  async function handleEnter(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key == "Enter") {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
      });

      await chrome.tabs.sendMessage(tab.id, {
        url
      });
    }
  }

  return (
    <>
      <Body>
        <InputGroup>
          <LabelRoot htmlFor="path">Path</LabelRoot>
          <Input
            id="path"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="http://localhost:3000/"
            onKeyUp={handleEnter}
          />
        </InputGroup>
        <InputGroup>
          <LabelRoot htmlFor="opacity">Opacity</LabelRoot>
          <Slider
            id="opacity"
            value={opacity}
            onValueChange={(value) => setOpacity(value)}
            onValueCommit={handleValueCommit}
          />
          <small style={{ color: mauveDarkA.mauveA9 }}>
            Opacity: {opacity}%
          </small>
        </InputGroup>
        <p style={{ color: "white" }}>{String(isOn)}</p>
      </Body>
      <Footer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Switch checked={isOn} onCheckedChange={handleCheckedChange} />
      </Footer>
    </>
  );
}

const globalStyles = globalCss({
  body: { margin: 0, padding: 0 }
});

const Body = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  padding: 16,
  paddingBottom: 24,
  backgroundColor: mauveDark.mauve2
});

const LabelRoot = styled(Label.Root, {
  fontSize: 15,
  fontWeight: 500,
  lineHeight: "35px",
  color: mauveDarkA.mauveA11
});

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
});

const InputGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 4
});

const LogoContainer = styled("div", {
  width: "80px",
  display: "inline-block"
});

const Footer = styled("div", {
  background: violetDark.violet5,
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 16px"
});

export default IndexPopup;
