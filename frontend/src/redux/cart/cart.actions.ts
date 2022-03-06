import { ADD_TO_CART, REMOVE_FROM_CART } from '@/redux/cart/cart.action-types';

export interface CartItemArgs {
    id: string;
    name: string;
    image: string;
    stock: number;
    price: string;
}

export const addToCart = (cartItem: CartItemArgs) => ({
    type: ADD_TO_CART,
    payload: cartItem
});

export const removeFromCart = (cartItem: CartItemArgs) => ({
    type: REMOVE_FROM_CART,
    payload: cartItem
});
