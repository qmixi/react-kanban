import { combineReducers } from 'redux'
import tasks from './tasks'

const reducers = combineReducers({
	tasks
})
//
// var reducers = (state, action) => {
// 	return state;
// }

export default reducers;