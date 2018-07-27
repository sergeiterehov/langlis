import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default class LessonsScreen extends React.Component {
    public render() {
        return <div>
            <h1>
                Lessons
            </h1>
            <ul>
                <li><Link to="/lesson/1234">1234 (test)</Link></li>
            </ul>
        </div>;
    }
}
