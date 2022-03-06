import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Spinner from '@/components/Spinner/Spinner';
import { ROUTES } from '@/utils/constants';

import { CheckoutPageContainer, HomePageContainer, PageNotFoundContainer } from './routes';

const AppRouter = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route path={ROUTES.HOME} exact component={HomePageContainer} />
                <Route path={ROUTES.CHECKOUT} exact component={CheckoutPageContainer} />

                <Route component={PageNotFoundContainer} />
            </Switch>
        </Suspense>
    );
};

export default AppRouter;
