import type { ReactElement } from "react";
import "./buttons.css";

type navButtonProps = {
    text: string;
    href: string;
};

function NavBarButton(props: navButtonProps): ReactElement {
    return (
        <a className="navBarButton" href={props.href}>
            {props.text}
        </a>
    );
}
export default NavBarButton