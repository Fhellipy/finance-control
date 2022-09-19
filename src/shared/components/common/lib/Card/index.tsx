import { Display } from "@components/common/layouts/Display";
import { P, Span } from "./styles";
import { IconType } from "@commonTypes/icon";
import { createElement } from "react";

interface Props {
  title: string;
  icon?: IconType;
  value: string;
}

function Card(props: Props) {
  const { title, icon, value } = props;

  return (
    <Display
      flex
      justify="space-between"
      css={{
        width: "100%",
        height: "100%",
        background: "$primaryLight",
        flexDirection: "column",
        border: "0.1rem solid $primary",
        borderRadius: "0.5rem",
        padding: "0.5rem",
        boxShadow: "0px 0px 10px #A0A0A0",
      }}
    >
      <Display
        flex
        justify="space-between"
        align="center"
        css={{ gap: "0.5rem" }}
      >
        <P>{title}</P>
        <Span>{icon && createElement(icon, {})}</Span>
      </Display>

      <Display flex justify="center" css={{ textAlign: "center" }}>
        <P css={{ fontSize: "$2xl", fontWeight: "bold" }}>{value}</P>
      </Display>
    </Display>
  );
}

export { Card };
