import type { ReactElement } from "react";
import CatalogeCard, { type IconVariant } from "./catalogeCard";
import "./cataloge.css";

type CatalogeItem = {
    key: number;
    icon: string;
    itemName: string;
    numeroProductos: string;
    color: IconVariant;
};

const catalogeInfo: CatalogeItem[] = [
    {
        key: 1,
        icon: "bi bi-pencil",
        itemName: "Lápices y Bolígrafos",
        numeroProductos: "320+ productos",
        color: "blue"
    },
    {
        key: 2,
        icon: "bi bi-palette-fill",
        itemName: "Marcadores y Colores",
        numeroProductos: "480+ productos",
        color: "yellow"
    },
    {
        key: 3,
        icon: "bi bi-book",
        itemName: "Cuadernos y Agendas",
        numeroProductos: "250+ productos",
        color: "blue"
    },
    {
        key: 4,
        icon: "bi bi-printer",
        itemName: "Impresión y Papelería",
        numeroProductos: "180+ productos",
        color: "yellow"
    },
    {
        key: 5,
        icon: "bi bi-scissors",
        itemName: "Oficina y Escolar",
        numeroProductos: "600+ productos",
        color: "blue"
    },
    {
        key: 6,
        icon: "bi bi-box",
        itemName: "Empaques y Cintas",
        numeroProductos: "150+ productos",
        color: "yellow"
    },

]

function Cataloge(): ReactElement{
    return(
        <div id="catalogo" className="cataloge">
            <div>
                <div className="titleCataloge">Catálogo</div>
                <div className="infoCataloge">Explora nuestras categorías</div>
                <div className="descCataloge">Más de 5,000 productos de las mejores marcas para equipar tu oficina, escuela o  negocio</div>
            </div>
            <div className="catalogeCards">
                {catalogeInfo.map((item)=>{
                    return (
                        <CatalogeCard
                            key={item.key}
                            icon={item.icon}
                            itemName={item.itemName}
                            numeroProductos={item.numeroProductos}
                            color={item.color}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Cataloge;