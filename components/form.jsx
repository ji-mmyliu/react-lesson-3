import * as React from "react";
import ReactDOM from "react-dom";

export function Form() {
    const [value, setValue] = React.useState("");

    function handleChange(ev) {
        console.log(ev.target.value);
    }

    return (
        <input onChange={handleChange}></input>
    );
}
