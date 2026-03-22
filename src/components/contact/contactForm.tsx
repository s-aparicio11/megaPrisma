import type { ReactElement } from "react";
import Input from "../ui/inputs/input";

import SubmitButton from "../ui/buttons/submitBotton";

function ContactForm(): ReactElement{
    return <form className="contactForm">
        <div className="formPersonal">
            <div>
                <div> Nombre </div>
                <Input type="text" name="Nombre" placeholder="Tu nombre"/>
            </div>
            <div>
                <div>Correo</div>
                <Input type="text" name="correo" placeholder="tu@correo.com" />
            </div>
        </div>
        <div>
            <div>Mensaje</div>
            <Input type= "textarea" name="Mensaje" placeholder="¿En que te podemos ayudar?"/>
        </div>
        <SubmitButton buttonText="Enviar Mensaje" />
    </form>
}

export default ContactForm;