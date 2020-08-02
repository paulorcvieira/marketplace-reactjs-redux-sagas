import { combineReducers } from 'redux'

import list from './list/reducers'
import form from './form/reducers'

export default combineReducers({
  list,
  form,
})