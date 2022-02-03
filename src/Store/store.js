
// import producer from "../Store/producer";
// const store = createStore(producer);
// export default store;

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import redicers from "./redicers";

const store = createStore(
  redicers,
  applyMiddleware(thunk)
);

export default store;
