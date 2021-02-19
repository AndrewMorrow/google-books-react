import "./App.css";
import Navbar from "./components/partials/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedPage from "./components/pages/SavedPage";
import SearchPage from "./components/pages/SearchPage";
import { CssBaseline } from "@material-ui/core";

function App() {
    return (
        <Router>
            <CssBaseline>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={SearchPage} />
                        <Route path="/saved" component={SavedPage} />
                    </Switch>
                </div>
            </CssBaseline>
        </Router>
    );
}

export default App;
