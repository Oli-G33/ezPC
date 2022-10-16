export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(c => c._id !== action.payload._id)
      };
    case 'CHANGE_CART_QTY':
      return {
        ...state,
        cart: state.cart.filter(c =>
          c._id === action.payload._id ? (c.qty = action.payload.qty) : c.qty
        )
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY_PRICE':
      return { ...state, sort: action.payload };
    case 'FILTER_BY_STOCK':
      return { ...state, byStock: !state.byStock };
    case 'FILTER_BY_STOCK':
      return { ...state, byStock: !state.byStock };
    case 'FILTER_BY_STOCK':
      return { ...state, byStock: !state.byStock };
    default:
      return state;
  }
};
