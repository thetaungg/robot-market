import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import { ReduxState } from '@/interfaces/redux';
import cartReducer from '@/redux/cart/cart.reducer';
import robotsReducer from '@/redux/robots/robots.reducer';

const rootReducer = (history: History) =>
    combineReducers<ReduxState>({
        router: connectRouter(history),
        robotsState: robotsReducer,
        cartState: cartReducer
    });

export default rootReducer;
