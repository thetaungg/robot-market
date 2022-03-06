import BackgroundImage from '@/assets/images/background.png';
import Cart from '@/components/Cart/Cart';
import CardsContainer from '@/containers/Home/components/CardsContainer/CardsContainer';
import Header from '@/containers/Home/components/Header/Header';

import * as styles from './HomePageContainerStyles';

const HomePageContainer = () => {
    return (
        <div css={styles.container(BackgroundImage)}>
            <Header />
            <Cart />
            <CardsContainer />
        </div>
    );
};

export default HomePageContainer;
