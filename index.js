const redux = require("redux");
const create_store = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED";

//action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

// initial state
const initialState = {
  numOfCakes: 10,
};

//reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

//store

const store = create_store(reducer);
console.log("InitialState = " + store.getState());
const unsub = store.subscribe(() => console.log(store.getState()));
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsub();
