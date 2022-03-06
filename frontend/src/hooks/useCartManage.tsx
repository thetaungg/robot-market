import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReduxState } from '@/interfaces/redux';
import { addToCart, CartItemArgs, removeFromCart } from '@/redux/cart/cart.actions';
import { remainingStockChange } from '@/redux/robots/robots.actions';

const useCartManage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: ReduxState) => state.cartState.cartItems);

    const onAddToCart = useCallback(
        (cartItem: CartItemArgs) => {
            const findItemInCart = cartItems.find(item => item.id === cartItem.id);

            if (findItemInCart) {
                dispatch(addToCart(cartItem));
            } else {
                if (cartItems.length < 5) {
                    dispatch(addToCart(cartItem));
                } else {
                    alert('You can only add 5 different robots to the cart');
                }
            }

            dispatch(remainingStockChange({ id: cartItem.id, isAddition: true }));
        },
        [cartItems, dispatch]
    );

    const onRemoveFromCart = useCallback(
        (cartItem: CartItemArgs) => {
            dispatch(removeFromCart(cartItem));
            dispatch(remainingStockChange({ id: cartItem.id, isAddition: false }));
        },
        [dispatch]
    );

    return {
        onAddToCart,
        onRemoveFromCart
    };
};

export default useCartManage;
