import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { ReactComponent as CartIcon } from '@/assets/icons/shopping-cart.svg';
import CartItemComponent from '@/components/CartItem/CartItem';
import TextWithLabel from '@/components/TextWithLabel/TextWithLabel';
import { CartItem } from '@/interfaces/redux';
import { formatCurrency } from '@/utils/index';

import * as styles from './CartStyles';

const Cart: FC = () => {
    const history = useHistory();
    const cartItems = useSelector((state: any) => state.cartState.cartItems);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const onToggleVisibility = () => {
        setIsContentVisible(!isContentVisible);
    };

    const totalPrice = (): number =>
        cartItems.reduce((acc: number, item: CartItem) => acc + +item.price * item.total, 0);

    const totalRobots = () => {
        let total = 0;
        cartItems.forEach((item: CartItem) => {
            total += item.total;
        });
        return total;
    };

    const onCheckoutClick = () => history.push('/checkout');

    return (
        <div css={styles.cart}>
            <button css={styles.button} onClick={onToggleVisibility}>
                <CartIcon />
                <span css={styles.totalItems}>{totalRobots()}</span>
            </button>

            <div css={styles.cartContents(isContentVisible)}>
                <div css={styles.itemsContainer}>
                    {cartItems.length ? (
                        cartItems.map((item: CartItem) => {
                            return <CartItemComponent key={item.id} {...item} />;
                        })
                    ) : (
                        <div css={styles.messageContainer}>
                            <p>Your cart is empty</p>
                        </div>
                    )}
                </div>
                {!!cartItems.length && (
                    <div css={styles.footer}>
                        <div css={styles.footerTextsContainer}>
                            <TextWithLabel
                                css={styles.totalPrice}
                                label='Total price'
                                text={formatCurrency(totalPrice())}
                            />
                            <TextWithLabel
                                css={styles.totalRobots}
                                label='Total items'
                                text={`${totalRobots()}`}
                            />
                        </div>
                        <button css={styles.checkoutButton} onClick={onCheckoutClick}>
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
