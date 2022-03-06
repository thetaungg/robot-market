import { ActionType, CartItem, CartState } from 'interfaces/redux';

import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from './cart.action-types';

const initialState: CartState = {
    cartItems: []
};

const cartReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case UPDATE_CART:
            return {
                ...state,
                cartItems: action.payload
            };
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload.id)
            };
        default:
            return { ...state };
    }
};

const addItemToCart = (cartItems: CartItem[], item: CartItem): CartItem[] => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, total: cartItem.total + 1 } : cartItem
        );
    }
    return [...cartItems, { ...item, total: 1 }];
};

const removeItemFromCart = (cartItems: CartItem[], itemToRemoveId: string): CartItem[] => {
    let newCartItems = cartItems.filter(item =>
        item.id === itemToRemoveId ? item.total > 1 : true
    );

    if (newCartItems.length === cartItems.length) {
        newCartItems = newCartItems.map(item =>
            item.id === itemToRemoveId ? { ...item, total: item.total - 1 } : item
        );
    }
    return newCartItems;
};

export default cartReducer;
