import {
  IconDefinition,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export interface SubTab {
  title: string;
  to: string;
}

export interface Tab {
  title: string;
  icon: IconDefinition;
  to?: string;
  subTabs?: SubTab[];
}

const tabsProps: Record<string, Tab[]> = {
  _: [
    {
      title: "Pagina Inicial",
      icon: faHome,
      to: "/",
    },
  ],
};

export default tabsProps;
