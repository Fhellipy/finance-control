import { styled } from "@lib/stitches";

export const Box = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "15px",

  variants: {
    align: {
      center: {
        alignItems: "center",
      },
      left: {
        alignItems: "flex-start",
      },
      right: {
        alignItems: "flex-end",
      },
    },
    border: {
      none: {
        border: "none",
      },
      solid: {
        border: "solid 1px #e6e6e6",
      },
    },
  },
});
