import axios, { endPoints } from 'utils/api';

import { DispatchType, FilterMaterial, Robot } from '@/interfaces/redux';
import { formatDate } from '@/utils/index';

import { FILTER_ROBOTS, REMAINING_STOCK_CHANGE, SET_ROBOTS } from './robots.action-types';

export const setRobots = (robots: Robot[]) => ({
    type: SET_ROBOTS,
    payload: robots
});

export const filterRobots = (searchText: string, filter: FilterMaterial) => ({
    type: FILTER_ROBOTS,
    payload: { searchText, filter }
});

export const remainingStockChange = ({ id, isAddition }: { id: string; isAddition: boolean }) => ({
    type: REMAINING_STOCK_CHANGE,
    payload: { id, isAddition }
});

export const fetchRobots = () => {
    return async (dispatch: DispatchType) => {
        try {
            const { data } = await axios.get(endPoints.fetchRobots);

            dispatch(
                setRobots(
                    data?.data
                        ? data.data.map((robot: Robot) => ({
                              ...robot,
                              id: robot.name.toLowerCase().split(' ').join('-'),
                              remainingStock: robot.stock,
                              createdAt: formatDate(robot.createdAt)
                          }))
                        : []
                )
            );
        } catch (e) {
            window.alert('An error occurred while fetching robots');
            console.log(e);
        }
    };
};
