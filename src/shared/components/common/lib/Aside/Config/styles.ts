import { styled } from "@lib/stitches";
import { LinkStyled } from "../styles";

const ConfigContainer = styled("span", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  verticalAlign: "center",
  overflow: "hidden",
  whiteSpace: "nowrap",
  padding: "$0 $3",
  gap: "$2",
  zIndex: 1,
});

const Link = styled(LinkStyled, {
  display: "inline",
});

export { ConfigContainer, Link };
