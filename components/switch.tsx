import { blackA, grassDarkA } from "@radix-ui/colors"
import * as RadixSwitch from "@radix-ui/react-switch"
import { styled } from "@stitches/react"

type Props = {
  id?: string
} & React.ComponentProps<typeof RadixSwitch.Root>

export default function Switch({
  id,
  checked,
  onCheckedChange,
  ...restProps
}: Props) {
  return (
    <SwitchRoot
      id={id}
      checked={checked}
      onCheckedChange={onCheckedChange}
      {...restProps}>
      <SwitchThumb />
    </SwitchRoot>
  )
}

const SwitchRoot = styled(RadixSwitch.Root, {
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

const SwitchThumb = styled(RadixSwitch.Thumb, {
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
