import { FC } from 'react';

import { ReactComponent as CartIcon } from '@/assets/icons/shopping-cart.svg';
import TextWithLabel from '@/components/TextWithLabel/TextWithLabel';
import useCartManage from '@/hooks/useCartManage';
import { Robot } from '@/interfaces/redux';
import { formatCurrency } from '@/utils/index';

import * as styles from './CardStyles';

interface CardProps extends Robot {}

const Card: FC<CardProps> = props => {
    const { id, name, material, image, price, stock, remainingStock, createdAt } = props;
    const { onAddToCart } = useCartManage();

    const handleAddToCart = () => {
        onAddToCart({ id, name, image, stock, price });
    };

    return (
        <div css={styles.card}>
            <div css={styles.image}>
                <img src={image} alt={name} />
            </div>
            <div css={styles.infoContainer}>
                <div css={styles.row}>
                    <span css={styles.name}>{name}</span>
                    <span css={styles.price}>{formatCurrency(+price)}</span>
                </div>
                <div css={styles.row}>
                    <TextWithLabel css={styles.material} label='Material' text={material} />
                    <TextWithLabel css={styles.date} label='Created At' text={createdAt} />
                </div>
                <div css={styles.row}>
                    <TextWithLabel
                        css={styles.stock}
                        label='Stocks'
                        labelPosition='bottom'
                        text={`${remainingStock}`}
                    />

                    <button
                        css={styles.button}
                        onClick={handleAddToCart}
                        title={remainingStock === 0 ? 'Out of stock' : ''}
                        disabled={remainingStock === 0}>
                        <div css={styles.cartContainer}>
                            <CartIcon />
                        </div>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
