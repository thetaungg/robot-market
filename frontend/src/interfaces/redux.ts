import { RouterState } from 'connected-react-router';

export interface ReduxState {
    router: RouterState;
    robotsState: RobotsState;
}

export type DispatchType = (action: ActionType) => ActionType;

export interface ActionType {
    type: string;
    payload?: any;
}

export interface Robot {
    name: string;
    price: string;
    material: string;
    stock: number;
    image: string;
    createdAt: string;
}

export interface RobotsState {
    robots: Robot[];
    filteredRobots: Robot[];
}
