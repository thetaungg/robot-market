import FilterGroup from '@/containers/Home/components/FilterGroup/FilterGroup';

import * as styles from './HeaderStyles';

const Header = () => {
    return (
        <div css={styles.header}>
            <h1 css={styles.heading}>Robo Market</h1>
            <FilterGroup />
        </div>
    );
};

export default Header;
