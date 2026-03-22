import type { ReactElement } from "react";
function RightBar(): ReactElement{
    return(
        <div className="rightBar">
            <i className="bi bi-search"/>
            <i className="bi bi-cart2"/>
        </div>
    )
}

export default RightBar;