import { globalCss } from "@lib/stitches";

const useGlobalStyle = globalCss({
  body: {
    color: "$font",
    backgroundColor: "$bg",
    fontFamily: "$text",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  "html, #root": {
    height: "100vh",
  },
});

export { useGlobalStyle };
