import { ActionType, RobotsState } from 'interfaces/redux';
import { SET_ROBOTS } from './robots.action-types';

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
        default:
            return { ...state };
    }
};

export default robotsReducer;
