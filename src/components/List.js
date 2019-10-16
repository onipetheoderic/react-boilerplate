import React from "react";
import { connect } from "react-redux";

import {getData} from "../actions"

/*REmember with this function we can request for a specific aspect of the store
here we are getting the article array alone in the store and referencing it to 
article key, remember the store is nothing but an object
*/
const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

/*ConnectedList is the component that would recieve the props as parameters*/
const List = connect(mapStateToProps)(ConnectedList);
export default List;