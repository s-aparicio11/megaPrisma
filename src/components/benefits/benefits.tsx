import type { ReactElement } from "react";
import BenefitCard from "./benefitCards";
import "./benefits.css"
const benefitsInfo=[
    {
        key: 1,
        icon: "bi bi-truck",
        title: "Envío rápido",
        description:"Despacho en 24-48 horas a todo el pais con seguimiento en tiempo real"
    },
    {
        key: 2,
        icon: "bi bi-shield",
        title: "Calidad garantizada",
        description: "Trabajamos con las mejores marcas del mercado. Garantía en cada compra"
    },
    {
        key: 3,
        icon: "bi bi-clock",
        title: "Atención oportuna",
        description: "Respuesta inmediata a tus consultas. Asesorías personalizadas para tu negocio."
    },
    {
        key: 4,
        icon: "bi bi-headset",
        title: "Soporte 24/7",
        description: "Equipo dedicado disponible para resolver tus dudas cuando lo necesites"
    },
]

function Benefits(): ReactElement{
    return(
        <div className="benefits">
            <div>
                <div className="titleBenefit">¿POR QUE ELEGIRNOS?</div>
                <div className="megaPrismBen">
                    Beneficios de comprar en
                    <br />
                    Megaprisma
                </div>
            </div>
            <div className="benefitCards">
                {
                    benefitsInfo.map((benefit)=>{
                        return(
                            <BenefitCard icon={benefit.icon} 
                                        title= {benefit.title} 
                                        description={benefit.description}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Benefits; 