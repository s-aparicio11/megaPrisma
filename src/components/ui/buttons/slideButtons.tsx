import type { ReactElement } from "react";

type slideBottonProp={
    text: string,
    type: string
}

function SlideBotton(slideBottonProp: slideBottonProp): ReactElement {
    return <div className= {slideBottonProp.type}>
        {slideBottonProp.text}
    </div>
}

export default SlideBotton;