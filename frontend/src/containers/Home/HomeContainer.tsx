import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRobots } from '@/redux/robots/robots.actions';
import * as styles from './HomeContainerStyles';
import { ReduxState } from '@/interfaces/redux';

const HomeContainer = () => {
    const dispatch = useDispatch();
    const robots = useSelector((state: ReduxState) => state.robotsState.filteredRobots);

    useEffect(() => {
        dispatch(fetchRobots());
    }, [dispatch]);

    return (
        <div css={styles.container}>
            <h1>Robots</h1>
            <div css={styles.robotsContainer}>
                {robots.map((robot, i) => (
                    <div key={i}>
                        <h2>{robot.name}</h2>
                        <p>{robot.material}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeContainer;
