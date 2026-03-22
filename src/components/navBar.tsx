import type { ReactElement } from "react"
import NavBarButton from "./ui/buttons/navBarButtons"

type NavOption = {
    key: number
    label: string
    href: string
}

const options: NavOption[] = [
    { key: 1, label: "Inicio", href: "#inicio" },
    { key: 2, label: "Catálogo", href: "#catalogo" },
    { key: 3, label: "Beneficios", href: "#beneficios" },
    { key: 4, label: "Promociones", href: "#promociones" },
    { key: 5, label: "Contacto", href: "#contacto" },
]

function NavBar(): ReactElement{
    return(
        <div className="navBar">
            {options.map((option) => (
                <NavBarButton key={option.key} text={option.label} href={option.href} />
            ))}
        </div>
    )
}
export default NavBar