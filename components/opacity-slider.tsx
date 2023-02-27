import { blackA, violet } from "@radix-ui/colors"
import * as Slider from "@radix-ui/react-slider"
import { styled } from "@stitches/react"

type Props = {
  value: number[]
  onValueChange: (value: number[]) => void
  onValueCommit?: (value: number[]) => void
}

export default function OpacitySlider({
  value,
  onValueChange,
  onValueCommit
}: Props) {
  return (
    <SliderRoot
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

const SliderRoot = styled(Slider.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: "auto",
  height: 20
})

const SliderTrack = styled(Slider.Track, {
  backgroundColor: blackA.blackA10,
  position: "relative",
  flexGrow: 1,
  borderRadius: "9999px",
  height: 3,
  cursor: "pointer"
})

const SliderRange = styled(Slider.Range, {
  position: "absolute",
  backgroundColor: "white",
  borderRadius: "9999px",
  height: "100%"
})

const SliderThumb = styled(Slider.Thumb, {
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
