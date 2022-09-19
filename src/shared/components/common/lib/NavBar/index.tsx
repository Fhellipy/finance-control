import { styled } from "@lib/stitches";

export const Navbar = styled("nav", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  backgroundColor: "white",
  borderBottom: "1px solid #e6e6e6",
  // base styles
  variants: {
    size: {
      sm: {
        width: "100%",
        height: "50px",
      },
      lg: {
        width: "100%",
        height: "60px",
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
