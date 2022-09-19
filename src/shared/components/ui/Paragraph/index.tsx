import { styled } from "@lib/stitches";

export const Paragraph = styled("p", {
  display: "flex",
  fontWeight: "bold",
  color: "#000",
  paddingLeft: "5px",
  paddingRight: "5px",

  variants: {
    size: {
      sm: {
        fontSize: "15px",
      },
      lg: {
        fontSize: "20px",
      },
    },
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
    justify: {
      center: {
        justifyContent: "center",
      },
      spaceBetween: {
        justifyContent: "space-between",
      },
    },
  },
});
