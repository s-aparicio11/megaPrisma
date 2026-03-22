import type { ReactElement } from "react";
import "./input.css";

type inputProps = {
    type: string;
    name: string;
    placeholder: string;

    rows?: number;
};

function Input(props: inputProps): ReactElement {
    if (props.type === "textarea") {
        return (
            <textarea
                className="inputContact"
                name={props.name}
                placeholder={props.placeholder}
                rows={props.rows ?? 4}
                required
            />
        );
    }

    return (
        <input
            className="inputContact"
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            required
        />
    );
}

export default Input;