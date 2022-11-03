import * as React from "react";
import ReactDOM from "react-dom";
import { Form } from "./components/form";
import { MyList } from "./components/list";
import { Parent } from "./components/moving-up";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyList />);
