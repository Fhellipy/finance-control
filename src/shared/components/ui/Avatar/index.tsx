import { styled } from "@lib/stitches";

export const Avatar = styled("img", {
  display: "inline-block",
  marginBottom: "10px",
  // base styles
  variants: {
    size: {
      sm: {
        width: "3em",
        height: "3em",
      },
      lg: {
        width: "4em",
        height: "4em",
      },
    },
    align: {
      center: {
        margin: "0 auto",
        marginBottom: "10px",
      },
    },
  },
});
