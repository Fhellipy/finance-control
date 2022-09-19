import { styled } from "@lib/stitches";

export const Form = styled("form", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  variants: {
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
