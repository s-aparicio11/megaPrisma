import type { ReactElement } from "react";
import "./businessInfo.css"

type businessInfoProps={
    numberString: string,
    category: string
}

function BusinessInfo(businessInfoProps: businessInfoProps): ReactElement{
    return(
        <div className="businessInfo">
            <div className="numbers">{businessInfoProps.numberString}</div>
            <div className="businessCategory">{businessInfoProps.category}</div>
        </div>
    )
}

export default BusinessInfo;