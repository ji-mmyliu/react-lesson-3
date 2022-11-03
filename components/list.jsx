import * as React from "react";

export function MyList() {
    const myArray = [1, 2, 3, 4, 5];
    return (
        <ul>
            {
                myArray.map((val) => {
                    return <li key={val}>{val}</li>
                })
            }
        </ul>
    );
}