import { styled } from "@lib/stitches";

const Tr = styled("tr", {
  display: "block",
  marginBottom: "0.625em",
  backgroundColor: "#f8f8f8",
  border: "1px solid $grayLight",
  padding: "0.35em",
  height: "100%",

  "@mm": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Td = styled("td", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: ".9em",
  wordBreak: "break-all",
  textAlign: "center",
  padding: "0.6em 0.3em 0.6em .1em",
  "@mg": {
    fontSize: "$lg",
  },
});

export { Tr, Td };
