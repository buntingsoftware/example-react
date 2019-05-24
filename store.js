import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const exampleInitialState = {
  itemsInCart: [],
  cartQuantity: 0
}

export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  CLEAR_CART: "CLEAR_CART",
  CLEAR_CART_QUANTITY: "CLEAR_CART_QUANTITY",
  INCREMENT_CART_QUANTITY: "INCREMENT_CART_QUANTITY"
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return Object.assign({}, state, {
        itemsInCart: [ ...state.itemsInCart, { ...action.product} ]
      })
    case actionTypes.CLEAR_CART:
      return Object.assign({}, state, {
        itemsInCart: []
      })
    case actionTypes.CLEAR_CART_QUANTITY:
      return Object.assign({}, state, {
        cartQuantity: 0
      })
    case actionTypes.INCREMENT_CART_QUANTITY:
      return Object.assign({}, state, {
        cartQuantity: state.cartQuantity + 1
      })
    default:
      return state
  }
}

export const addToCart = (product) => {
  return { type: actionTypes.ADD_TO_CART, product }
}

export const clearCart = () => {
  return { type: actionTypes.CLEAR_CART }
}

export const clearCartQuantity = () => {
  return { type: actionTypes.CLEAR_CART_QUANTITY }
}

export const incrementCartQuantity = () => {
  return { type: actionTypes.INCREMENT_CART_QUANTITY }
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
