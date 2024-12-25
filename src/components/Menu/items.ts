import { IconType } from "react-icons";
import { IoArchiveOutline, IoHomeOutline, IoSettingsOutline } from "react-icons/io5";

type MenuItem = {
    link: string;
    label: string;
    Icon: IconType;
};

const MenuItems: MenuItem[] = [
    { link: "/home", label: "Home", Icon: IoHomeOutline },
    { link: "/history", label: "Salvos", Icon: IoArchiveOutline },
    { link: "/settings", label: "Configurações", Icon: IoSettingsOutline },
];

export default MenuItems;
