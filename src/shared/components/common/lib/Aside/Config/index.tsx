import Icon from "@components/ui/Icon";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useAsideContext } from "../stores/AsideContext";
import { useLocation } from "react-router-dom";
import { IconContainer } from "../styles";
import { ConfigContainer, Link } from "./styles";

function Config() {
  const [asideOpen, toggleAside] = useAsideContext();
  const location = useLocation();
  return (
    <ConfigContainer>
      <IconContainer actual={location.pathname == "/configuracoes"}>
        <Icon icon={faGear} />
      </IconContainer>
      <Link
        aria-hidden={asideOpen === false}
        tabIndex={asideOpen ? 0 : -1}
        onClick={toggleAside}
        to={"/configuracoes"}
        actual={location.pathname == "/configuracoes"}
      >
        Configurações
      </Link>
    </ConfigContainer>
  );
}

export default Config;
