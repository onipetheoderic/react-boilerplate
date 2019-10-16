import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addLoginDetails } from "../actions/";

/*We are creating this form to store it to the redux store*/
/*remember the add article takes a payload of data
addArticle : article=> dispatch(addArticle(article))
We are using a custom variable to reference another custom function
 which dispatches the action for us
*/
function mapDispatchToProps(dispatch) {
  return {
    addLoginDetails: loginDetail => dispatch(addLoginDetails(loginDetail))
  };
}

class ConnectedLoginForm extends Component {
  constructor() {
    super();
    this.state = {
    };
  
  }
  /*this is a good dynamic way of setting the state of an html file
so we are saying event.target.id "which has been set to title:"
is set to event.target.value, means the input value

The reason we are using ids to reference state name is because we dont want to create
multiple functions for each input field. we want to use a single onChange method
  */
  handleChange=(event)=> {
    /*this is to create a dynamic variable*/
    console.log("the id",event.target.id)
    console.log("the value", event.target.value)
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit=(event)=> {
    event.preventDefault();
    const {username, password} = this.state
    /*since we would be passing the entire state object*/

    // console.log("This is from the loginForm: ", title)
    const id = uuidv1();
    this.props.addLoginDetails({ username, password, id });
    
    // this.setState({ title: "" });
  }



  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
          
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            
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


const LoginForm = connect(null, mapDispatchToProps)(ConnectedLoginForm);
export default LoginForm;