import type { ReactElement } from "react";

function FloatingButton():ReactElement{
    return (
        <a href="https://wa.me/+573223978591" target="_blank" className="floatingButton">
              <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp"
                    width="30"
                />
        </a>
    )
}

export default FloatingButton;