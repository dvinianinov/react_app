import React from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MappingPage from "./MappingPage.jsx";
import Form from "./Form.jsx";

const App = () => (
    <Router>
        <div>
            <Route exact path='/' component={MappingPage}/>
            <Route path='/form' component={Form}/>
            <Route component={() => <Redirect to='/'/>}/>
        </div>
    </Router>
);

export default App;