import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@/containers/Home/components/Card/Card';
import { ReduxState } from '@/interfaces/redux';
import { fetchRobots } from '@/redux/robots/robots.actions';

import * as styles from './CardsContainerStyles';

const CardsContainer = () => {
    const dispatch = useDispatch();
    const robots = useSelector((state: ReduxState) => state.robotsState.filteredRobots);

    useEffect(() => {
        dispatch(fetchRobots());
    }, [dispatch]);

    return (
        <div css={styles.container}>
            {robots && robots.map(robot => <Card key={robot.id} {...robot} />)}
        </div>
    );
};

export default CardsContainer;
