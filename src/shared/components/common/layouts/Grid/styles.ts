import { styled } from "@lib/stitches";

const GridStyled = styled("div", {
  display: "grid",
  height: "100%",
  
  variants: {
    gap: {
      true: {
        gap: "$2",
        padding: "$2",
      },
    },
  },
  defaultVariants: {
    gap: true,
  },
});

const CellGridStyled = styled("div", {
  variants: {
    background: {
      true: {
        background: "$slate1",
        borderWidth: "$medium",
        borderColor: "$slate7",
        borderStyle: "solid",
        borderRadius: "$sm",
        padding: "$2",
      },
    },
  },
});

export { GridStyled, CellGridStyled };
