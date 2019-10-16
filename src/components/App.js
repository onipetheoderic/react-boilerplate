import React from "react";
import List from "./List";
import Form from './form';
import LoginForm from './loginForm';
import Posts from './Posts';

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
    <h2>All Posts</h2>
    <Posts />

    <h2>Articles</h2>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
     <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <LoginForm />
    </div>
      <List />
    </div>
  </div>
);
export default App;