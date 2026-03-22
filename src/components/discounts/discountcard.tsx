import type { ReactElement } from "react";
import DiscountButton from "../ui/buttons/discountButton";
import "./discount.css"
type discountProps= {
    badge: string,
    title: string,
    description: string,
    buttonText: string,
    imgSRC: string
}

function DiscountCard(discountProps: discountProps): ReactElement{
    return <div className="discountCard">
        <div className="discountInfo">
            < div className="discountBadge">{discountProps.badge}</div>
            <div className="discountTitle">{discountProps.title}</div>
            <div className="discountDesc">{discountProps.description}</div>
            <DiscountButton buttonText={discountProps.buttonText} />
        </div>
        <div>
            <img className="discountImg" src={discountProps.imgSRC} alt="discount picture" />
        </div>
    </div>
}

export default DiscountCard;