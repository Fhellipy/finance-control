import { styled } from "@lib/stitches";

const Tr = styled("tr", {
  width: "100%",
  display: "block",
  marginBottom: "0.625em",
  backgroundColor: "#f8f8f8",
  border: "1px solid $grayLight",
  padding: "0.35em",
  "&:last-child": {
    marginBottom: 0,
  },

  "@mm": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Td = styled("td", {
  width: "100%",
  display: "block",
  fontSize: ".9em",
  textAlign: "right",
  wordBreak: "break-all",
  borderBottom: "1px solid $grayLight",
  padding: "0.6em 0.3em 0.6em .1em",
  "&::before": {
    content: "attr(data-label)",
    float: "left",
    fontWeight: " bold",
    textTransform: "uppercase",
  },
  "&:last-child": {
    borderBottom: 0,
  },
  "@mm": {
    borderBottom: 0,
    padding: "0.625em",
    textAlign: "center",

    "&::before": {
      content: "",
    },
  },
});

const Span = styled("span", {
  display: "flex",
  width: "25%",
  height: "1.5rem",
  alignItems: "center",
  padding: "0 0.1rem",
  justifyContent: "space-between",
  "& svg": {
    fontSize: "$lg",
    flexShrink: 0,
  },
  "& svg:last-child": {
    cursor: "pointer",
  },
  "@mm": {
    width: "53%",
    "& svg": {
      fontSize: "$xl",
    },
  },
});

export { Tr, Td, Span };
