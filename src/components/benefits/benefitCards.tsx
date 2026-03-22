import type { ReactElement } from "react";
type benefitProps={
    icon: string,
    title:string,
    description:string

}

function BenefitCard(benefitProps: benefitProps): ReactElement{
    return (
        <div className="benefitCard">
            <div className="iconBenefit"><i className={benefitProps.icon}/></div>
            <div className="benefitName">{benefitProps.title}</div>
            <div className="benefitDesc">{benefitProps.description}</div>
        </div>
    )
}

export default BenefitCard;