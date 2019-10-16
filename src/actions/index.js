import {ADD_ARTICLE, ADD_LOGIN_DETAILS} from '../action_types'

/*Action only returns the action type and the payload data*/
export function addArticle(payload){
  return { type: ADD_ARTICLE, payload }
};

export function addLoginDetails(payload){
	return { type: ADD_LOGIN_DETAILS, payload}
}

export function getData() {
  return function(dispatch) {//we use this outer function to return the inner function
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}