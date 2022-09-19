import { Display } from "@components/common/layouts/Display";
import { User } from "@dto/user";
import { useQuery } from "react-query";
import { P } from "./styles";

function Header() {
  return (
    <Display
      flex
      justify="end"
      align="center"
      css={{
        position: "fixed",
        top: "$0",
        height: "$12",
        right: "$0",
        width: "100%",
        zIndex: "$overlay",
        paddingRight: "$4",
        backgroundColor: "$primary",
        gap: "$1",
      }}
    >
      <P>Olá Fhellipy</P>
    </Display>
  );
}

export { Header };
