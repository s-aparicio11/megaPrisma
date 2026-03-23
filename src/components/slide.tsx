import type { ReactElement } from "react";
import { useState, useEffect} from "react";
import Badge from "./ui/slide/badge";
import "../App.css";
import "./slide.css";
import regresoClaseImg from "../assets/hero-stationery.jpg";
import aliadoImg from "../assets/promo-supplies.jpg";
import SlideBotton from "./ui/buttons/slideButtons";
import BusinessInfo from "./ui/slide/businessInfo";
import ButtonSlide from "./ui/buttons/buttonSlides";
const slides=[
    {   key: 1,
        icon: "bi bi-backpack",
        badge:"Regreso a clases",
        title: "Prepárate con los mejores útiles escolares",
        description: "Encuentra todo lo que necesitas para el nuevo año escolar: cuadernos, colores, mochilas y más con descuento especial.",
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
        description: "Papel, tóner, organizadores y todo el material que tu empresa necesita. Servicio de entrega y facturación incluido.",
        buttonText: "Solicitar Cotización",
        buttonTwo: "Ver Productos",
        imageURL: regresoClaseImg,
    },
]

function Slide(): ReactElement{
    const [slideIndex, setSlideIndex]= useState(0)
    const slide= slides[slideIndex]

    function handleNextSlide(){
        setSlideIndex((prevIndex)=> (prevIndex+1) % slides.length)
    }

    function handlePrevSlide(){
        setSlideIndex((prevIndex)=> (prevIndex-1 + slides.length) % slides.length)
    }

    useEffect(() => {
        const id = window.setInterval(() => {
            setSlideIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => window.clearInterval(id);
    }, [slideIndex, slides.length]);

    return(
        <div id="inicio" className="slide">
            <ButtonSlide direction="before" action={handlePrevSlide} />
            <div className="slideInner">
                <div className="slideInfo">
                    <div
                        key={slideIndex}
                        className="slideReveal slideRevealStack"
                    >
                        <Badge text={slide.badge} icon={slide.icon} />
                        <div className="slideTitle">{slide.title}</div>
                        <div className="slideContent">{slide.description}</div>
                        <div className="slideButtons">
                            <SlideBotton text={slide.buttonText} type="yellow" />
                            <SlideBotton text={slide.buttonTwo} type="transparent" />
                        </div>
                        <div className="businessInfoSlide">
                            <BusinessInfo numberString="2,000+" category="Productos" />
                            <BusinessInfo numberString="1,200+" category="Clientes" />
                            <BusinessInfo numberString="10" category="Años" />
                        </div>
                    </div>
                </div>
                <div className="slideMedia">
                    <div
                        key={slideIndex}
                        className="slideReveal slideRevealMedia"
                    >
                        <img
                            src={slide.imageURL}
                            alt={slide.title}
                            className="imgSlide"
                        />
                    </div>
                </div>
            </div>
            <ButtonSlide direction="next" action={handleNextSlide}/>
        </div>
    )

}

export default Slide;