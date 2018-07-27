import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, Route } from "react-router";
import { HashRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import LessonsScreen from "../screens/LessonsScreen";
import LessonItemScreen from "../screens/LessonItemScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { Store, createStore } from "redux";
import { appReducer, IAppStore, AppActions } from "../actions/appReducer";

export default class App extends React.Component {
    private store: Store<IAppStore>;

    constructor(props) {
        super(props);

        this.store = createStore(appReducer);
    }

    public componentDidMount() {
        this.store.subscribe(() => this.forceUpdate());
    }

    public render() {
        const store = this.store.getState();

        return <HashRouter>
            <div>
                <div>
                    Updated at { store.updatedAt.toISOString() }
                </div>

                <Navbar />
                <Switch>
                    <Route exact path="/" component={ WelcomeScreen } />
                    <Route path="/lessons" component={ LessonsScreen } />
                    <Route path="/lesson/:lessonId" component={ LessonItemScreen } />
                    <Route render={ () => 404 } />
                </Switch>
            </div>
        </HashRouter>;
    }
}
