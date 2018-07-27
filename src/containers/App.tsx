import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, Route } from "react-router";
import { HashRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import LessonsScreen from "../screens/LessonsScreen";
import LessonItemScreen from "../screens/LessonItemScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { Store, createStore } from "redux";
import { appReducer, IAppStore, AppActionTypes, IAppStoreAction } from "../actions/appReducer";

export default class App extends React.Component {
    private store: Store<IAppStore, IAppStoreAction>;

    constructor(props) {
        super(props);

        this.store = createStore(appReducer);

        this.store.dispatch({
            type: AppActionTypes.AddLeassons,
            lessons: [
                {
                    id: "1337",
                    name: "Test lesson",
                    author: "Tester",
                    createdAt: new Date(),
                    numberWords: 123,
                },
            ],
        });
    }

    public componentDidMount() {
        this.store.subscribe(() => this.forceUpdate());
    }

    public render() {
        const appState = this.store.getState();

        return <HashRouter>
            <div>
                <div>
                    Updated at { appState.updatedAt.toISOString() }
                </div>

                <Navbar />
                <Switch>
                    <Route exact path="/" component={ WelcomeScreen } />
                    <Route path="/lessons" render={ this.renderLeassonsScree } />
                    <Route path="/lesson/:lessonId" component={ LessonItemScreen } />
                    <Route render={ () => 404 } />
                </Switch>
            </div>
        </HashRouter>;
    }

    private renderLeassonsScree = () => {
        return <LessonsScreen lessons={ this.store.getState().lessons } />;
    }
}
