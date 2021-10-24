import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContexts from "./Firebase/Contexts/AuthContexts";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";

function App() {
    return (
        <div className="App">
            <AuthContexts>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        {/* Private Route here  */}
                        <PrivateRoute exact path="/profile">
                            <Profile />
                        </PrivateRoute>
                    </Switch>
                </Router>
            </AuthContexts>
        </div>
    );
}

export default App;
