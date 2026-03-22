import type { ReactElement } from "react";

type contactCardProps={
    icon: string,
    title: string,
    content: string,
    extraContent: string

}
function ContactCard(contactCardProps: contactCardProps): ReactElement{
    return(
        <div className="contactCard">
            <div className="contactIcon"><i className={contactCardProps.icon}/></div>
            <div className="contactCardContent">
                <div className="contactCardTitle">{contactCardProps.title}</div>
                <div className="contactCardDesc">{contactCardProps.content}</div>
                <div className="contactExtra">{contactCardProps.extraContent}</div>
            </div>
        </div>
    )
}

export default ContactCard;