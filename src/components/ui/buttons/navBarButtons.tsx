import type {ReactElement} from "react"
import "./buttons.css"
type navButtonProps={
    text:string
}
function NavBarButton(navBarProps: navButtonProps): ReactElement{
    return <div className="navBarButton"> {navBarProps.text} </div>
}
export default NavBarButton