import { SET_ROBOTS } from './robots.action-types';
import { DispatchType, Robot } from '@/interfaces/redux';
import axios, { endPoints } from 'utils/api';

export const setRobots = (robots: Robot) => ({
    type: SET_ROBOTS,
    payload: robots
});

export const fetchRobots = () => {
    return async (dispatch: DispatchType) => {
        try {
            const { data } = await axios.get(endPoints.fetchRobots);

            dispatch(
                setRobots(
                    data?.data
                        ? data.data.map((robot: Robot) => ({
                              id: robot.name.toLowerCase().split(' ').join('_'),
                              ...robot
                          }))
                        : []
                )
            );
        } catch (e) {
            console.log(e);
        }
    };
};
