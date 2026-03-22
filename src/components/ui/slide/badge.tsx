import type { ReactElement } from "react";
import "./badge.css"
type badgeProp={
    text: string,
    icon: string
}
function Badge(badgeProp: badgeProp): ReactElement{
    return <div className="badge">
        <i className={badgeProp.icon} />
        <div>{badgeProp.text}</div>
    </div>
}
export default Badge;