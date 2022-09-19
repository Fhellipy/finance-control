import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useAsideContext } from "./stores/AsideContext";
import MenuGroup from "./MenuGroup";
import {
  AsideContainer,
  AsideStyled,
  MarkIconContainer,
  MarkIconStyled,
  NavStyled,
} from "./styles";
import tabsProps from "./tabs";
import Config from "./Config";
import { Display } from "@components/common/layouts/Display";

function Aside() {
  const [asideOpen, toggleAside] = useAsideContext();

  function toggleAsideForNotOpen() {
    if (!asideOpen) {
      toggleAside();
    }
  }

  return (
    <AsideContainer>
      <Display
        none={!asideOpen}
        onClick={toggleAside}
        css={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "$overlay",
        }}
      />
      <AsideStyled
        role="menu"
        id="aside"
        open={asideOpen}
        vertical={{
          "@mg": true,
        }}
        onClick={toggleAsideForNotOpen}
      >
        <MarkIconContainer
          aria-label="alternate aside menu"
          aria-controls="aside"
          role="menubutton"
          as="button"
          open={asideOpen}
          vertical={{
            "@mg": true,
          }}
          onClick={(ev) => {
            ev.stopPropagation();
            toggleAside();
          }}
        >
          <MarkIconStyled icon={faAngleRight} />
        </MarkIconContainer>
        <NavStyled
          vertical={{
            "@mg": true,
          }}
        >
          {Object.entries(tabsProps).map(([key, tabs]) => {
            return (
              <MenuGroup
                key={key}
                title={key.startsWith("_") ? null : key}
                tabs={tabs}
              />
            );
          })}
        </NavStyled>
        <Config />
        <br />
      </AsideStyled>
    </AsideContainer>
  );
}

export default Aside;
