import { Display } from "@components/common/layouts/Display";
import { P } from "./styles";

function Footer() {
  //Ano atual
  const year = new Date().getFullYear();

  return (
    <Display
      flex
      justify="end"
      align="center"
      css={{
        height: "$12",
        bottom: "$0",
        right: "$0",
        width: "100%",
        position: "fixed",
        paddingRight: "$4",
        zIndex: "$overlay",
        backgroundColor: "$primary",
        gap: "$1",
      }}
    >
      <P>{year}</P>
    </Display>
  );
}

export { Footer };
