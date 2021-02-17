import "./App.css";
import Navbar from "./components/partials/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SavedPage from "./components/pages/SavedPage";
import SearchPage from "./components/pages/SearchPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route
                        exact
                        path={["/", "/search"]}
                        component={SearchPage}
                    />
                    <Route path="/saved" component={SavedPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
