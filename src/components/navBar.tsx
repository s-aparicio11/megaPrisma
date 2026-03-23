import type { ReactElement } from "react";
import { useEffect } from "react";
import NavBarButton from "./ui/buttons/navBarButtons";

type NavOption = {
    key: number;
    label: string;
    href: string;
};

const options: NavOption[] = [
    { key: 1, label: "Inicio", href: "#inicio" },
    { key: 2, label: "Catálogo", href: "#catalogo" },
    { key: 3, label: "Beneficios", href: "#beneficios" },
    { key: 4, label: "Promociones", href: "#promociones" },
    { key: 5, label: "Contacto", href: "#contacto" },
];

type NavBarProps = {
    mobileOpen: boolean;
    onClose: () => void;
};

function NavBar({ mobileOpen, onClose }: NavBarProps): ReactElement {
    useEffect(() => {
        if (!mobileOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [mobileOpen, onClose]);

    return (
        <>
            <nav className="navBar" aria-label="Principal">
                {options.map((option) => (
                    <NavBarButton key={option.key} text={option.label} href={option.href} />
                ))}
            </nav>

            <div
                className={`navBackdrop ${mobileOpen ? "navBackdrop--visible" : ""}`}
                aria-hidden={!mobileOpen}
                onClick={onClose}
            />

            <div
                id="nav-mobile"
                className={`navMobile ${mobileOpen ? "navMobile--open" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label="Menú"
                aria-hidden={!mobileOpen}
                inert={!mobileOpen}
            >
                <div className="navMobileHeader">
                    <span className="navMobileTitle">Menú</span>
                    <button
                        type="button"
                        className="navMobileClose"
                        aria-label="Cerrar menú"
                        onClick={onClose}
                    >
                        <i className="bi bi-x-lg" aria-hidden />
                    </button>
                </div>
                <div className="navMobileLinks">
                    {options.map((option) => (
                        <NavBarButton
                            key={option.key}
                            text={option.label}
                            href={option.href}
                            className="navMobileLink"
                            onNavigate={onClose}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default NavBar;
