import { lazy } from 'react';

export const HomePageContainer = lazy(() => import('@/containers/Home/HomePageContainer'));

export const CheckoutPageContainer = lazy(
    () => import('@/containers/Checkout/CheckoutPageContainer')
);

export const PageNotFoundContainer = lazy(
    () => import('containers/PageNotFound/PageNotFoundContainer')
);
