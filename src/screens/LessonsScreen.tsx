import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ILesson } from "../actions/appReducer";

export interface IPropsLessonsScreen {
    lessons: ILesson[];
}

export default class LessonsScreen extends React.Component<IPropsLessonsScreen> {
    public render() {
        return <div>
            <h1>
                Lessons
            </h1>
            <ul>
                <li><Link to="/lesson/1234">1234 (test)</Link></li>
                { this.renderList() }
            </ul>
        </div>;
    }

    private renderList() {
        return this.props.lessons.map(this.renderLesson);
    }

    private renderLesson(lesson: ILesson) {
        return <li>
            <Link to={`/lesson/${lesson.id}`}>{ lesson.name }</Link>
        </li>;
    }
}
