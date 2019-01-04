import React from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";
import Posts from "./Posts.jsx";
import Loading from "./Loading.jsx";
import Button from "./Buttom.jsx";

const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Button />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Loading />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Posts</h2>
            <Posts />
        </div>
    </div>
);
export default App;