import { styled } from "@lib/stitches";

export const Button = styled("button", {
  // base styles
  display: "block",
  border: "none",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",

  variants: {
    size: {
      sm: {
        fontSize: "13px",
        height: "25px",
        paddingRight: "10px",
        paddingLeft: "10px",
      },
      lg: {
        fontSize: "15px",
        height: "35px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
    bg: {
      primary: {
        backgroundColor: "$primary",
        "&:hover": {
          backgroundColor: "$primaryLight",
        },
      },
      secondary: {
        backgroundColor: "$secondary",
        "&:hover": {
          backgroundColor: "$secondaryLight",
        },
      },
      danger: {
        backgroundColor: "$danger",
        "&:hover": {
          backgroundColor: "$dangerLight",
        },
      },
      success: {
        backgroundColor: "$success",
        "&:hover": {
          backgroundColor: "$successLight",
        },
      },
    },
  },
});
