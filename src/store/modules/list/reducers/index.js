import { createSelector } from 'reselect'
import { v1 as uuidv1 } from 'uuid';
import { Types } from '../actions'

const INITIAL_STATE = {
  list: null,
  items: [],
}

export default function list(state = INITIAL_STATE, action ) {
  switch(action.type) {
    case Types.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        list: action.list,
      }
    case Types.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.productId)
      }
    case Types.TOGGLE_PRODUCT_REQUEST:
      return {
        ...state,
        items: toggleItem(state.items, action.productId)
      }
    case Types.UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        list: action.list,
        items: updateProduct(state.items, action.product),
      }
    case Types.ADD_NEW_LIST_REQUEST:
      return {
        ...INITIAL_STATE, date: getDate()
      }
    case Types.GET_IMAGE_SUCCESS:
    case Types.GET_IMAGE_FAILURE:
      return {
        ...state,
        items: [
          ...state.items,
            {
              ...action.product,
              total: getItemTotal(action.product),
              id: uuidv1(),
              checked: false,
              img: action.img,
            }
        ]
      }
    default:
      return state
  }
}

// Helpers
function getItemTotal(product) {
  return product.price * product.quantity
}

function getDate() {
  const date = new Date()
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
  return date.toLocaleDateString('pt-BR', options)
}

function updateProduct(items, product) {
  // search item to modify
  const index = items.findIndex(item => item.id === product.id)
  return [
    ...items.slice(0, index), // all items before modify item
    { ...product, total: getItemTotal(product) }, // items update
    ...items.slice(index + 1) // all items after modify item
  ]
}

function toggleItem(items, productId) {
  const index = items.findIndex(item => item.id === productId)
  return [
    ...items.slice(0, index),
    { ...items[index], checked: !items[index].checked },
    ...items.slice(index + 1)
  ]
}

// Selectors
export const getListTotal = createSelector (
  state => state.list.items,
  items => items.reduce((total, item) => total + item.total, 0),
)

export const getOpenedItems = createSelector (
  state => state.list.items,
  items => items.filter(item => !item.checked).length
)

export const getClosedItems = createSelector (
  state => state.list.items,
  items => items.filter(item => item.checked).length
)