import { createStore, applyMiddleware, compose } from "redux";
import {rootReducer} from "../reducers/index";
import thunk from "redux-thunk";


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer,
	storeEnhancers(applyMiddleware(thunk)));
/*createStore takes a reducer as the first argument
the most important concept here is that the state in redux comes from the reducers
*/

export default store;

/*The second principle of Redux says the only way to change the state is by sending a signal
 to the store.This signal is an action. 
 “Dispatching an action” is the process of sending out a signal.*/


 /*Now how do you change an Immutable state, You wont, the resulting state is the copy
 of the state plus the new data*/

 /*Redux actions are nothing more than javascript object*/