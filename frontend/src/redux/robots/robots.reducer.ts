import { ActionType, Robot, RobotsState } from 'interfaces/redux';

import { FILTER_ROBOTS, REMAINING_STOCK_CHANGE, SET_ROBOTS } from './robots.action-types';

const initialState: RobotsState = {
    robots: [],
    filteredRobots: []
};

const robotsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_ROBOTS:
            return {
                ...state,
                robots: action.payload,
                filteredRobots: action.payload
            };
        case FILTER_ROBOTS:
            return {
                ...state,
                filteredRobots: filterRobots(
                    state.robots,
                    action.payload.searchText,
                    action.payload.filter
                )
            };
        case REMAINING_STOCK_CHANGE:
            return {
                ...state,
                robots: remainingStockChange(
                    state.robots,
                    action.payload.id,
                    action.payload.isAddition
                ),
                filteredRobots: remainingStockChange(
                    state.robots,
                    action.payload.id,
                    action.payload.isAddition
                )
            };
        default:
            return { ...state };
    }
};

const filterRobots = (robots: Robot[], searchText: string, filter: string) => {
    return robots.filter(
        robot =>
            robot.name.toLowerCase().includes(searchText.toLowerCase()) &&
            (filter === 'all' || robot.material === filter)
    );
};

const remainingStockChange = (robots: Robot[], id: string, isAddition: boolean) => {
    return robots.map(robot => {
        if (robot.id === id) {
            return {
                ...robot,
                remainingStock: isAddition ? robot.remainingStock - 1 : robot.remainingStock + 1
            };
        }
        return robot;
    });
};
export default robotsReducer;
