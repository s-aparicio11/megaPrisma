import type { ReactElement } from "react";

type slideBottonProp={
    text: string,
    type: string,
    href: string
}

function SlideBotton(slideBottonProp: slideBottonProp): ReactElement {
    return <a href={slideBottonProp.href} className={slideBottonProp.type}>
        {slideBottonProp.text}
    </a>
}

export default SlideBotton;