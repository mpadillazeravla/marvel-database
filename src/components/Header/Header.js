import { useState } from "react"
import {Menu} from "semantic-ui-react"
import {useNavigate, useLocation} from "react-router"
import "./Header.scss"

export default function Header() {
    const currentPath = useLocation();
    // el finalcurrentpath es el currentpath que cogemos con uselocation
    // y le quitamos el / , es decir, si es "/SERIES" que se quede como "SERIES" para asi tener la palabra
    const finalCurrentPath = currentPath.pathname.replace("/" , "")

    // le decimos que el estado inicial del item activo es el path que tenemos activo
    // con esto hacemos que se quede como activo aunque recarguemos pagina
    const [activeItem, setActiveItem] = useState(finalCurrentPath);

    // el navigate es para que nos lleve a esa pagina
    const history = useNavigate();


    const handleItemClick = (e , {name}) => {
        setActiveItem(name)
        history(name);
        // console.log(e)
        // console.log(name)
        // console.log("Click en funcion")
    }

    return (
        <div className="header-menu">
        <Menu secondary>
            {/* activeItem lo ponemos activo cuando cliquemos para que el nombre se ponga como ACTIVO */}
            <Menu.Item name="inicio" active={activeItem === "inicio"} onClick={handleItemClick}/>
            <Menu.Item name="series" active={activeItem === "series"} onClick={handleItemClick}/>
            <Menu.Item name="comics" active={activeItem === "comics"} onClick={handleItemClick}/>
        </Menu>
        </div>
    )
};
