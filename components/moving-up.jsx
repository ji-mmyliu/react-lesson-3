import * as React from "react";

export function Parent() {
    const [value, setValue] = React.useState("");
    return (
        <Child value={value} setValue={setValue}></Child>
    );
}

function Child(props) {
    props.setValue("My new value!");

    return (
        <p>Hee hee i stole my parent's state. It's: {props.value}</p>
    )
}