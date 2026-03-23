import type { ReactElement } from "react";
import ContactForm from "./contactForm";
import ContactCard from "./contactCard";
import "./contact.css"

const contactInfo=[
    {
        key: 1,
        icon: "bi bi-telephone",
        title: "Teléfono",
        content: "+57 322 397-8591",
        extraContent: "Lun-vie, 8am-6pm"
    },
    {
        key:2,
        icon: "bi bi-envelope",
        title: "Correo",
        content: "ventas@megaprisma.com",
        extraContent: "Respuesta en 24h"
    },
    {
        key:3,
        icon: "bi bi-geo-alt",
        title: "Ubicación",
        content: "Chia, Cundinamarca",
        extraContent: "Zona Industrial"
    }

]

function Contact(): ReactElement{
    return (
        <div id="contacto" className="contactSection">
                <div className="contactDesc">
                    <div className="contactTitle">CONTACTO</div>
                    <div className="contactQuest">¿Tienes preguntas? Escríbenos</div>
                </div>
                <div className="contactFormCards">              
                    <ContactForm />
                    <div className="contactCards">
                        {
                            contactInfo.map((info)=>{
                                return(
                                    <ContactCard
                                        key={info.key}
                                        icon={info.icon}
                                        title={info.title}
                                        content={info.content}
                                        extraContent={info.extraContent}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
        </div>
    )
}
export default Contact;