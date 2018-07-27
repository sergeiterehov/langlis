import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default (params) => {
    return <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lessons">Lessons</Link></li>
    </ul>;
};
