import store from "./store/index";
import { addArticle, addLoginDetails } from "./actions/index";

/*this is to be able to access the store from the console, we will import it in src/index.js*/
/*you can type the following commands in the console: store.getState()*/
window.store = store;
window.addArticle = addArticle;
window.addLoginDetails = addLoginDetails


/*Commands you can type on the console:

To know if something has been done to the store, we can subscribe to it from the console
store.subscribe(()=> console.log("Sometning just happened"))

store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )


after dispatching the action we can check if it has been added by doing the store.getState()
*/

/*redux, the most important method you will work with is react-redux connect, it connects the 
react component to the redux store
*/

/*The fundermental things to know is 
mapStateToProps: connects a part of the redux state to the props of the react component,
by doing so, a connected react component would have access to the part of the store it needs

mapDispatchToProps: connects redux actions to react props, so that react props can dispatch a 
redux action
*/