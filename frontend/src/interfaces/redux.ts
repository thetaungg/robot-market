import { RouterState } from 'connected-react-router';

export interface ReduxState {
    router: RouterState;
    robotsState: RobotsState;
    cartState: CartState;
}

export type DispatchType = (action: ActionType) => ActionType;

export interface ActionType {
    type: string;
    payload?: any;
}

export type FilterMaterial = 'all' | RobotMaterial;

export type RobotMaterial =
    | 'Soft'
    | 'Plastic'
    | 'Fresh'
    | 'Steel'
    | 'Rubber'
    | 'Wooden'
    | 'Granite'
    | 'Concrete'
    | 'Cotton'
    | 'Metal'
    | 'Frozen';

export interface Robot {
    id: string;
    name: string;
    price: string;
    material: RobotMaterial;
    stock: number;
    remainingStock: number;
    image: string;
    createdAt: string;
}

export interface CartItem {
    id: string;
    name: string;
    total: number;
    stock: number;
    price: string;
    image: string;
}

export interface RobotsState {
    robots: Robot[];
    filteredRobots: Robot[];
}

export interface CartState {
    cartItems: CartItem[];
}
