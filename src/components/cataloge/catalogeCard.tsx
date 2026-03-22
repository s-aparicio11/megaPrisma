import type { CSSProperties, ReactElement } from "react";

export type IconVariant = "blue" | "yellow";

type catalogeCardProps={
    icon: string,
    itemName: string,
    numeroProductos: string,
    color: IconVariant,
}

const iconVariantStyle: Record<IconVariant, CSSProperties> = {
    blue: { backgroundColor: "#E5EBFE", color: "blue" },
    yellow: { backgroundColor: "#FCEDD8", color: "#F2A53D" },
};

function CatalogeCard(catalogeCardProp: catalogeCardProps): ReactElement{
    const iconStyle = iconVariantStyle[catalogeCardProp.color];
    return(
        <div className="catalogeCard">
            <div className="iconContainer" style={iconStyle}><i className={catalogeCardProp.icon}/></div>
            <div className="itemsName">{catalogeCardProp.itemName}</div>
            <div className="numProducts">{catalogeCardProp.numeroProductos}</div>
        </div>)
}

export default CatalogeCard;