import AsideProvider from "./stores/AsideContext";
import MenuProvider from "./stores/MenuContext";
import AsideComponent from "./Aside";

function Aside() {
  return (
    <AsideProvider>
      <MenuProvider>
        <AsideComponent />
      </MenuProvider>
    </AsideProvider>
  );
}

export { Aside };
