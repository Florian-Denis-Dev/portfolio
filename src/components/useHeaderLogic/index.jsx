import { useContext, useState, useEffect } from "react";
import { ThemeContext } from '../../theme/ThemeContext';
import { useLocation } from "react-router-dom";
import logo from "../../assets/fd-blue.png";
import logo2 from "../../assets/fd-colour.png";
import logo3 from "../../assets/fd-sand.png";
import menu1 from '../../assets/menu-on-light.png';
import menu2 from '../../assets/menu-off-light.png';
import menu3 from '../../assets/menu-stop-light.png';
import menuD1 from '../../assets/menu-on-dark.png';
import menuD2 from '../../assets/menu-off-dark.png';
import menuD3 from '../../assets/menu-stop-dark.png'

export function useHeaderLogic() {
    const { theme, toggleTheme } = useContext(ThemeContext); 
    const location = useLocation();
    const [logoSrc, setLogoSrc] = useState(logo);
    const [menuSrc, setMenuSrc] = useState(theme === 'light' ? menu2 : menuD2);
    const [logoHovered, setLogoHovered] = useState(false);
    const isMenuPage = location.pathname === "/menu";

    useEffect(() => {
        if (theme === 'dark') {
            if (isMenuPage) {
                setMenuSrc(menuD1);
            } else {
                setMenuSrc(menuD2);
            }
        } else {
            if (isMenuPage) {
                setMenuSrc(menu1);
            } else {
                setMenuSrc(menu2);
            }
        }
    }, [theme, isMenuPage]);

    useEffect(() => {
        setLogoSrc(logoHovered ? logo2 : theme === 'light' ? logo : logo3);
    }, [theme, logoHovered]);

    const handleMenuHover = () => {
        if (theme === 'dark') {
            setMenuSrc(isMenuPage ? menuD3 : menuD1);
        } else {
            setMenuSrc(isMenuPage ? menu3 : menu1);
        }
    }

    const handleMenuOut = () => {
        if (theme === 'dark') {
            setMenuSrc(isMenuPage ? menuD1 : menuD2);
        } else {
            setMenuSrc(isMenuPage ? menu1 : menu2);
        }
    }

    return { theme, toggleTheme, logoSrc, setLogoHovered, menuSrc, handleMenuHover, handleMenuOut };
}
