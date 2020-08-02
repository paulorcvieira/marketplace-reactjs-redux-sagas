import { Types } from '../actions'

const INITIAL_STATE = {
  action: null,
  listToUpdate: null,
  productToUpdate: {},
}

export default function form(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.START_ADD_REQUEST:
      return {
        ...state,
        action: 'new',
        listToUpdate: action.list,
      }
    case Types.FINISH_ADD_SUCCESS:
      return {
        action: null,
        listToUpdate: null,
        productToUpdate: {},
      }
    case Types.START_UPDATE_REQUEST:
      return {
        action: 'update',
        listToUpdate: action.list,
        productToUpdate: action.product,
      }
    case Types.FINISH_UPDATE_SUCCESS:
      return {
        action: null,
        listToUpdate: null,
        productToUpdate: {},
      }
    default:
      return state
  }
}