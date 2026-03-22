import type { ReactElement } from "react";

type buttonTypeProps={
    direction: string,
    action: ()=> void ,
        
}
function ButtonSlide(buttonTypeProps: buttonTypeProps): ReactElement{
    return (
        <div className="buttonSlide" onClick={buttonTypeProps.action}>
            {buttonTypeProps.direction==="next"? <i className="bi bi-arrow-right-short" /> : <i className="bi bi-arrow-left-short"/> }
        </div>
    )
}

export default ButtonSlide;