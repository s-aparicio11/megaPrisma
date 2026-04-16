import type { ReactElement } from "react";

type FooterBottomProps = {
    text: string;
    href: string;
    className?: string;
    onNavigate?: () => void;
};

function FooterBottom(props: FooterBottomProps): ReactElement {
    const classNames = ["footerBottomLink", props.className].filter(Boolean).join(" ");

    return (
        <a
            className={classNames}
            href={props.href}
            onClick={() => props.onNavigate?.()}
        >
            {props.text}
        </a>
    )
}

export default FooterBottom;