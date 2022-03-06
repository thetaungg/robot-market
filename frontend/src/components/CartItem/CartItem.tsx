import { FC } from 'react';

import { ReactComponent as MinusIcon } from '@/assets/icons/minus.svg';
import { ReactComponent as PlusIcon } from '@/assets/icons/plus.svg';
import useCartManage from '@/hooks/useCartManage';
import { formatCurrency } from '@/utils/index';

import * as styles from './CartItemStyles';

interface CartItemProps {
    id: string;
    name: string;
    image: string;
    price: string;
    stock: number;
    total: number;
}

const CartItem: FC<CartItemProps> = props => {
    const { id, name, image, stock, total, price } = props;
    const { onAddToCart, onRemoveFromCart } = useCartManage();

    const handleAddToCart = () => {
        onAddToCart({ id, name, image, stock, price });
    };

    const handleRemoveFromCart = () => {
        onRemoveFromCart({ id, name, image, stock, price });
    };

    return (
        <div css={styles.container}>
            <div css={styles.imageContainer}>
                <img src={image} alt={name} />
            </div>
            <div css={styles.infoContainer}>
                <div css={styles.row}>
                    <span css={styles.name}>{name}</span>
                </div>
                <div css={styles.row}>
                    <span css={styles.price}>{formatCurrency(+price)}</span>
                    <div css={styles.buttonsContainer}>
                        <button
                            css={styles.button}
                            title='Remove item'
                            onClick={handleRemoveFromCart}
                            disabled={total === 0}>
                            <MinusIcon />
                        </button>
                        <span css={styles.total}>{total}</span>
                        <button
                            css={styles.button}
                            title={total !== stock ? 'Add more item' : 'Out of stock'}
                            onClick={handleAddToCart}
                            disabled={total === stock}>
                            <PlusIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
