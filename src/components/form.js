import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/";

/*We are creating this form to store it to the redux store*/
/*remember the add article takes a payload of data
addArticle : article=> dispatch(addArticle(article))
We are using a custom function to reference another custom function
 which dispatches the action for us
*/
function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  /*this is a good dynamic way of setting the state of an html file
so we are saying event.target.id "which has been set to title:"
is set to event.target.value, means the input value

The reason we are using ids to reference state name is because we dont want to create
multiple functions for each input field. we want to use a single onChange method
  */
  handleChange=(event)=> {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit=(event)=> {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    /*after adding it to the db, we want the title field to be empty*/
    this.setState({ title: "" });
  }



  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}


const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;