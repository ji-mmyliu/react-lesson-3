import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { Form } from "./components/form";
import { MyList } from "./components/list";
import { Parent } from "./components/moving-up";

function App() {
    return (
        <BrowserRouter>
            {/* Displayed on every route */}
            <Link to="/form">Form</Link><br />
            <Link to="/list">List</Link><br />
            <a href="/parent" onClick={(ev) => {
                const nav = useNavigate();
                ev.preventDefault();
                nav("/parent");
            }}>Parent</a><br />

            <Routes>
                <Route path="/form" element={<Form />} />
                <Route path="/list" element={<MyList />} />
                <Route path="/parent" element={<Parent />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
