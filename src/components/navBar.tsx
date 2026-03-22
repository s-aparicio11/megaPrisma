import type { ReactElement } from "react"
import NavBarButton from "./ui/buttons/navBarButtons"

type NavOption = {
    key: number
    label: string
    url: string
}

const options: NavOption[] = [
    { key: 1, label: "Inicio", url: "" },
    { key: 2, label: "Catalógo", url: "" },
    { key: 3, label: "Beneficio", url: "" },
    { key: 4, label: "Promociones", url: "" },
    { key: 5, label: "Contacto", url: "" },
]

function NavBar(): ReactElement{
    return(
        <div className="navBar">
            {options.map((option) => (
                <NavBarButton key={option.key} text={option.label} />
            ))}
        </div>
    )
}
export default NavBar