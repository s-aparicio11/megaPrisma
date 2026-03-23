import type { ReactElement } from "react";
import "./buttons.css";

type navButtonProps = {
    text: string;
    href: string;
    className?: string;
    onNavigate?: () => void;
};

function NavBarButton(props: navButtonProps): ReactElement {
    const classNames = ["navBarButton", props.className].filter(Boolean).join(" ");
    return (
        <a
            className={classNames}
            href={props.href}
            onClick={() => props.onNavigate?.()}
        >
            {props.text}
        </a>
    );
}
export default NavBarButton