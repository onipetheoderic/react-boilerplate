import {ADD_ARTICLE, DATA_LOADED, ADD_LOGIN_DETAILS} from '../action_types'

const initialState = {
	articles: [],
	remoteArticles: [],
	loginDetails: {}
}

/*the concept here is like passing an array you want to work
 on and the data you want to add to it in one function and you now return the new function*/


/*action type is what we use in knowing which action we want to run*/
/*since the action comes with a type and a fucking payload we use the type to identify the
action and the perform the necessary logic with the fucking payload*/

export function rootReducer(state=initialState, action){
	if (action.type === ADD_ARTICLE) {
	    return Object.assign({}, state, {
	      articles: state.articles.concat(action.payload)
	    });
  	}
  	if (action.type === DATA_LOADED) {
	    return Object.assign({}, state, {
	      remoteArticles: state.remoteArticles.concat(action.payload)
	    });
  	}
  	if (action.type === ADD_LOGIN_DETAILS){
      console.log("this is from the reducer function of login", action.payload)
      let copyOfObject = {}
      for(var i in action.payload){
        copyOfObject[i] = action.payload[i]
      }      
  		return Object.assign({}, state, {
  			loginDetails: copyOfObject
  		})
  	}
	return state;
}

/*
There are two key points for avoiding mutations in Redux:

    Using concat(), slice(), and …spread for arrays
    Using Object.assign() and …spread for objects
*/

/*The most important library is
    getState for accessing the current state of the application
    dispatch for dispatching an action
    subscribe for listening on state changes
*/