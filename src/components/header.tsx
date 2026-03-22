import type { ReactElement } from "react";
import NavBar from "./navBar";
import Logo from "./ui/logo/logo";
import RightBar from "./rightBar";

function Header(): ReactElement{
    return( <div className="header">
        <Logo />
        <NavBar/>
        <RightBar/>

    </div>)
}
export default Header;