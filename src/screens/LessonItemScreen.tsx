import * as React from "react";
import * as ReactDOM from "react-dom";
import { match } from "react-router";
import { Link } from "react-router-dom";

interface IRouteMatch {
    lessonId: string;
}

export interface IPropsLessonItemScreen {
    match: match<IRouteMatch>;
}

export default class LessonItemScreen extends React.Component<IPropsLessonItemScreen> {
    public render() {
        console.log(this.props);
        return <div>
            <h1>
                Lesson { this.props.match.params.lessonId }
            </h1>

            <div>
                <Link to="/lessons">All lessons</Link>
            </div>
        </div>;
    }
}
