import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import robotsReducer from './robots/robots.reducer';
import { History } from 'history';
import { ReduxState } from '@/interfaces/redux';

const rootReducer = (history: History) =>
    combineReducers<ReduxState>({
        router: connectRouter(history),
        robotsState: robotsReducer
    });

export default rootReducer;
