import type { ReactElement } from "react";
import "./buttons.css";

type buttonProp={
    buttonText: string
}
function DiscountButton(buttonProp: buttonProp): ReactElement{
    return <div className="discountButton">
        {buttonProp.buttonText}
    </div>
}
export default DiscountButton;