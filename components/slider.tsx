import { blackA, violet } from "@radix-ui/colors"
import * as RadixSlider from "@radix-ui/react-slider"
import { styled } from "@stitches/react"

type Props = {
  id?: string
  value: number[]
  onValueChange: (value: number[]) => void
  onValueCommit?: (value: number[]) => void
}

export default function Slider({
  id,
  value,
  onValueChange,
  onValueCommit
}: Props) {
  return (
    <SliderRoot
      id={id}
      value={value}
      onValueChange={onValueChange}
      onValueCommit={onValueCommit}
      aria-label="Opacity">
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </SliderRoot>
  )
}

const SliderRoot = styled(RadixSlider.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: "auto",
  height: 20
})

const SliderTrack = styled(RadixSlider.Track, {
  backgroundColor: blackA.blackA10,
  position: "relative",
  flexGrow: 1,
  borderRadius: "9999px",
  height: 3,
  cursor: "pointer"
})

const SliderRange = styled(RadixSlider.Range, {
  position: "absolute",
  backgroundColor: "white",
  borderRadius: "9999px",
  height: "100%"
})

const SliderThumb = styled(RadixSlider.Thumb, {
  display: "block",
  width: 20,
  height: 20,
  backgroundColor: "white",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  borderRadius: 10,
  cursor: "grab",
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { outline: "none", boxShadow: `0 0 0 5px ${blackA.blackA8}` }
})
