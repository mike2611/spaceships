import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import misionsReducer from './missions/missionsReducer';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  misionsReducer,
  rocketsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
