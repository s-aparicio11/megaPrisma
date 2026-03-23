import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import NavBar from "./navBar";
import Logo from "./ui/logo/logo";
import RightBar from "./rightBar";

function Header(): ReactElement {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("navMenuOpen", mobileMenuOpen);
        return () => document.body.classList.remove("navMenuOpen");
    }, [mobileMenuOpen]);

    return (
        <div className={`header ${mobileMenuOpen ? "header--menuOpen" : ""}`}>
            <Logo />
            <NavBar
                mobileOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            />
            <div className="headerActions">
                <RightBar />
                <button
                    type="button"
                    className="navMenuToggle"
                    aria-expanded={mobileMenuOpen}
                    aria-controls="nav-mobile"
                    aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    onClick={() => setMobileMenuOpen((open) => !open)}
                >
                    <span className="navMenuToggle-bar" />
                    <span className="navMenuToggle-bar" />
                    <span className="navMenuToggle-bar" />
                </button>
            </div>
        </div>
    );
}

export default Header;
