import type { ReactElement } from "react";
import Badge from "./ui/slide/badge";
import "../App.css";
import regresoClaseImg from "../assets/hero-stationery.jpg";
import aliadoImg from "../assets/hero-stationery.jpg";
import SlideBotton from "./ui/buttons/slideButtons";
import BusinessInfo from "./ui/slide/businessInfo";
const slides=[
    {   key: 1,
        icon: "bi bi-backpack",
        badge:"Regreso a clases",
        title: "Prepárate con los mejores útiles escolares",
        description: "Encuentra todo lo que necesitas para el nuevo año escolar: cuadernos, colores, mochilas y más con descuento especial",
        buttonText: "Ver ofertas",
        buttonTwo: "Ver Catálogo",
        imageURL: regresoClaseImg,
    },
    {   key: 2,
        icon: "bi bi-paperclip",
        badge:"Tu aliado en papelería",
        title: "Todo lo que necesitabas para crear, estudiar y trabajar",
        description: "Lápices, marcadores, cuadernos, impresiones, mucho más. Calidad premium a los mejores precios para tu oficina o escuela.",
        buttonText: "Ver Catálogo",
        buttonTwo: "Contáctanos",
        imageURL: aliadoImg,
    },
    {   key: 3,
        icon: "bi bi-building",
        badge:"Suministro de oficina",
        title: "Equipa tu oficina con productos de calidad profesional",
        description: "Papel, tóner, organizadores y todo el material que tu empresa necesita. Servicio de entrega y facturación incluido",
        buttonText: "Solicitar Cotización",
        buttonTwo: "Ver Productos",
        imageURL: "",
    },
]

function Slide(): ReactElement{
    return(
        <div className="slide">
            <div className= "slideInfo">
                <Badge text={slides[0].badge} icon={slides[0].icon}/>
                <div className="slideTitle">{slides[0].title}</div>
                <div className="slideContent">{slides[0].description}</div>
                <div className="slideButtons">
                < SlideBotton text= {slides[0].buttonText}  type="yellow"/>
                <SlideBotton text={slides[0].buttonTwo} type="transparent"/>
                </div>
                <div className="businessInfoSlide">
                    <BusinessInfo numberString="5,000+" category="Productos"/>
                    <BusinessInfo numberString="1,200+" category="Clientes"/>
                    <BusinessInfo numberString="15" category="Años" />
                </div>
            </div>
            <div>
                <img src={slides[0].imageURL} alt={slides[0].title} className="imgSlide" />
            </div>

        </div>
    )

}

export default Slide;