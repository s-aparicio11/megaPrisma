import type { ReactElement } from "react";
import megaPrismaLogo from "../../../assets/megaPrisma.png";
import "./logo.css";
function Logo(): ReactElement{
    return <img className="logo" src={megaPrismaLogo} alt="Mega Prisma Color"/>
}
export default Logo;