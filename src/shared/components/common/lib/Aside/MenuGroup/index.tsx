// import LinkGroup from "../LinkGroup";
import { IconContainer, LinkStyled, LiStyled } from "./../styles";
import { Tab } from "../tabs";
import { PStyled, UlMenu } from "./styles";
import { useAsideContext } from "../stores/AsideContext";
import { useLocation } from "react-router-dom";
import Icon from "@components/ui/Icon";

interface Props {
  title?: string | null;
  tabs: Tab[];
}

function MenuGroup({ title, tabs }: Props) {
  const [asideOpen, toggleAside] = useAsideContext();
  const location = useLocation();

  return (
    <LiStyled>
      {title ? <PStyled open={asideOpen}>{title}</PStyled> : null}
      <UlMenu>
        {tabs.map((tab, index) =>
          tab?.to ? (
            <LiStyled padding key={index}>
              <IconContainer
                actual={
                  location.pathname == tab.to ||
                  location.pathname.startsWith(tab.to + "/")
                }
              >
                <Icon icon={tab.icon} />
              </IconContainer>
              <LinkStyled
                aria-hidden={asideOpen == false}
                tabIndex={asideOpen ? 0 : -1}
                actual={
                  location.pathname == tab.to ||
                  location.pathname.startsWith(tab.to + "/")
                }
                onClick={toggleAside}
                to={tab.to}
              >
                {tab.title}
              </LinkStyled>
            </LiStyled>
          ) : (""
            // <LinkGroup
            //   key={index}
            //   title={tab.title}
            //   icon={tab.icon}
            //   subTabs={tab.subTabs ?? []}
            // />
          ),
        )}
      </UlMenu>
    </LiStyled>
  );
}

export default MenuGroup;
