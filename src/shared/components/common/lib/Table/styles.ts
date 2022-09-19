import { styled } from "@lib/stitches";

const Table = styled("table", {
  width: "85%",
  background: "$white",
  border: "0.1rem solid #ccc",
  borderRadius: "0.5rem",
  padding: "0.3rem 0.1rem 0.3rem 0.3rem",
  margin: 0,
  "@mm": {
    padding: "0.5rem",
    width: "75%",
    border: "1px solid $grayLight",
    borderCollapse: "collapse",
    tableLayout: "fixed",
  },
  "@t": {
    width: "65%",
  },
  "@dp": {
    width: "50%",
  },
});

const Caption = styled("caption", {
  fontSize: "1.2em",
  margin: "0.5em 0 0.3em",
  "@mm": {
    margin: "0.5em 0 0.75em",
    fontSize: "1.3em",
  },
});

const Thead = styled("thead", {
  clip: "rect(0 0 0 0)",
  border: "none",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  alignItems: "center",
  width: "1px",

  "@mm": {
    position: "relative",
    margin: 0,
  },
});

const Tr = styled("tr", {
  borderBottom: "3px solid $grayLight",
  display: "block",
  marginBottom: "0.625em",
  backgroundColor: "#f8f8f8",
  border: "1px solid $grayLight",
  padding: "0.35em",

  "@mm": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Th = styled("th", {
  width: "100%",
  padding: "0.625em",
  textAlign: "center",
  fontSize: "0.9em",
  textTransform: "uppercase",
  wordBreak: "break-all",
});

const Tbody = styled("tbody", {
  width: "100%",
  height: "100%",
  margin: "0 1rem",
});

export { Table, Caption, Thead, Tr, Th, Tbody };
