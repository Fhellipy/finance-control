import { styled } from "@lib/stitches";

const Display = styled("div", {
  width: "100%",

  variants: {
    block: {
      true: {
        display: "block",
      },
    },
    flex: {
      true: {
        display: "flex",
      },
    },
    grid: {
      true: {
        display: "grid",
      },
    },
    flow: {
      true: {
        display: "flow",
      },
      root: {
        display: "flow-root",
      },
    },
    contents: {
      true: {
        display: "contents",
      },
    },
    inline: {
      true: {
        display: "inline",
      },
    },
    table: {
      true: {
        display: "table",
      },
    },
    initial: {
      true: {
        display: "initial",
      },
    },
    inherit: {
      true: {
        display: "inherit",
      },
    },
    none: {
      true: {
        display: "none",
      },
    },
    wrap: {
      true: {
        flexWrap: "wrap",
      },
      reverse: {
        flexWrap: "wrap-reverse",
      },
    },
    column: {
      true: {},
    },
    row: {
      true: {},
    },
    justify: {
      start: {
        justifyContent: "start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "end",
      },
      "space-around": {
        justifyContent: "space-around",
      },
      "space-between": {
        justifyContent: "space-between",
      },
      "space-evenly": {
        justifyContent: "space-evenly",
      },
    },
    align: {
      start: {
        alignItems: "start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "end",
      },
    },
  },
});

export { Display };
