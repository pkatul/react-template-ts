import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import counter from '@containers/Home/reducer';

export default (history: History<any>) =>
	combineReducers({
		router: connectRouter(history),
		counter
	});
