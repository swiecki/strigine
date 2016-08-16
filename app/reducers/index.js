import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
	form: formReducer,
  counter,
  routing
});

export default rootReducer;
