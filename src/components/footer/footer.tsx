import type { ReactElement } from "react";
import { useState } from "react";
import FooterBottom from "../ui/buttons/footerButton";
import "./footer.css";

type FooterOption = {
    key: number;
    label: string;
    href: string;
};

const options: FooterOption[] = [
    { key: 1, label: "Inicio", href: "#inicio" },
    { key: 2, label: "Catálogo", href: "#catalogo" },
    { key: 3, label: "Beneficios", href: "#beneficios" },
    { key: 4, label: "Promociones", href: "#promociones" },
    { key: 5, label: "Contacto", href: "#contacto" },
];

function Footer(): ReactElement {
    const [mobileOpen, setMobileOpen] = useState(false);
    var currentYear: number= new Date().getFullYear()
    return (
        <footer className="footerMenu">
            <div className="footerTop">
                <button
                    type="button"
                    className="footerMenuToggle"
                    onClick={() => setMobileOpen((open) => !open)}
                    aria-expanded={mobileOpen}
                    aria-controls="footer-links"
                >
                    Menú
                    <i className={`bi ${mobileOpen ? "bi-chevron-up" : "bi-chevron-down"}`} />
                </button>
            </div>
            <nav
                id="footer-links"
                className={`footerLinks ${mobileOpen ? "footerLinks--open" : ""}`}
                aria-label="Footer"
            >
                {options.map((option) => (
                    <FooterBottom
                        key={option.key}
                        text={option.label}
                        href={option.href}
                        onNavigate={() => setMobileOpen(false)}
                    />
                ))}
            </nav>
            <hr className="footerDivider" />
            <div className="copywright">© {currentYear} Megaprisma.</div>
        </footer>

    );
}

export default Footer;