import Icon from "@components/ui/Icon";
import { styled } from "@lib/stitches";
import { Link } from "react-router-dom";

Link.toString = () => "Link";
const LinkStyled = styled(Link, {
  color: "$gray",
  paddingRight: "100%",
  paddingVertical: "$4",
  variants: {
    actual: {
      true: {
        color: "$gray",
      },
    },
  },
});

const IconContainer = styled("span", {
  display: "inline-flex",
  justifyContent: "center",
  backgroundColor: "transparent",
  border: "none",
  width: "$10",
  transition: "$width",
  variants: {
    actual: {
      true: {
        [`& > ${Icon} `]: {
          color: "$gray",
        },
      },
    },
  },
});

const AsideContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  transition: "all 0.5s",
  ["&::after"]: {
    content: "",
    width: "$10",
    height: "100%",
  },
});

const AsideStyled = styled("aside", {
  $$asideWidth: "$space$64",
  zIndex: "$modal",
  position: "fixed",
  backgroundColor: "$bg",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  top: "$12",
  transition: "$height",
  width: "100%",
  height: "$10",
  outline: "0.1rem solid $gray",
  variants: {
    vertical: {
      true: {
        top: 0,
        transition: "$width",
        width: "$10",
        height: "100%",
        alignItems: "flex-start",
        outline: "0.1rem solid $gray",
      },
    },
    open: {
      true: {
        top: "$10",
        width: "100%",
        height: "calc(100vh - $10)",
      },
    },
  },
  compoundVariants: [
    {
      vertical: true,
      open: true,
      css: {
        width: "$$asideWidth",
        [`${IconContainer}`]: {
          width: "$10",
        },
      },
    },
  ],
});

const NavStyled = styled("nav", {
  whiteSpace: "nowrap",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "baseline",
  flex: 1,
  overflowX: "hidden",
  variants: {
    vertical: {
      true: {
        overflowY: "auto",
      },
    },
  },
});

const LiStyled = styled("li", {
  listStyle: "none",
  variants: {
    padding: {
      true: {
        paddingVertical: "$4",
      },
    },
  },
});

const MarkIconStyled = styled(Icon, {
  transform: "rotateZ(0deg)",
  fontSize: "$xl",
  transition: "$transform",
});

const MarkIconContainer = styled(Icon, {
  backgroundColor: "transparent",
  height: "$10",
  border: "none",
  paddingRight: "$4",
  transition: "$width",
  width: "100%",
  textAlign: "center",
  [`> ${MarkIconStyled}`]: {
    transform: "rotateZ(90deg)",
  },
  variants: {
    vertical: {
      true: {
        width: "$10",
        textAlign: "end",
        [`> ${MarkIconStyled}`]: {
          transform: "rotateZ(0deg)",
        },
      },
    },
    open: {
      true: {
        [`> ${MarkIconStyled}`]: {
          transform: "rotateZ(-90deg)",
        },
      },
    },
  },
  compoundVariants: [
    {
      vertical: true,
      open: true,
      css: {
        width: "100%",
        [`> ${MarkIconStyled}`]: {
          transform: "rotateZ(180deg)",
        },
      },
    },
  ],
});

export {
  AsideContainer,
  AsideStyled,
  NavStyled,
  LinkStyled,
  LiStyled,
  IconContainer,
  MarkIconStyled,
  MarkIconContainer,
};
