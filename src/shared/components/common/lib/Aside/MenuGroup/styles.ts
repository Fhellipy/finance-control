import { styled } from "@lib/stitches";

const UlMenu = styled("ul", {
  listStyle: "none",
  padding: "0px",
  margin: "0",
  width: "100%",
});

const PStyled = styled("p", {
  transition: "all 0.5s",
  marginVertical: "$4",
  paddingLeft: "4rem",
  textTransform: "capitalize",
  color: "$heading",
  variants: {
    open: {
      true: {
        paddingLeft: "1rem",
      },
    },
  },
});

export { UlMenu, PStyled };
