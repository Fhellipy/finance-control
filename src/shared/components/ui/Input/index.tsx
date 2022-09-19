import { styled } from "@lib/stitches";

export const Input = styled("input", {
  variants: {
    size: {
      sm: {
        fontSize: "13px",
        height: "25px",
        padding: "0 10px",
      },
      lg: {
        fontSize: "15px",
        height: "35px",
        padding: "0 15px",
      },
    },
  },
});
