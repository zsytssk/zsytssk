import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { forbiddenWordsMiddleware } from "./middlewares";
import rootReducer from "./reducers";

const storeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;
