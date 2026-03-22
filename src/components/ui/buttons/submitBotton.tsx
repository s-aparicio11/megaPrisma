import type { ReactElement } from "react";

type submitProps={
    buttonText: string
}
function SubmitButton(submitProps: submitProps): ReactElement{
    return <button type="submit" className="discountButton">{submitProps.buttonText}</button>
}
export default SubmitButton;