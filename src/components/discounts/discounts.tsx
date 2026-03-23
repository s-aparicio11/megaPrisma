import type { ReactElement } from "react";
import discountImage from "../../assets/hero-stationery.jpg"
import DiscountCard from "./discountcard";
import "./discount.css"

const discountsInfo=[
    {   
        key:1,
        badge : "🔥 Temporada Escolar",
        title: "Hasta 30% de descuento en útiles escolares",
        description: "Prepárate para la temporada escolar con los mejores precios en cuadernos, colores, mochilas y todo lo que necesitas. Promoción valida hasta agotar existencias.",
        buttonText: "Aprovecha ahora →",
        img: discountImage
    }
]

function Discounts(): ReactElement{
    return <div id="promociones" className="discountSection">
        {discountsInfo.map((info)=>{
            return(
                <DiscountCard
                    key={info.key}
                    badge={info.badge}
                    title={info.title}
                    description={info.description}
                    buttonText={info.buttonText}
                    imgSRC={info.img}
                />
            )
        })}
    </div>
}

export default Discounts;