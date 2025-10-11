import { createBrowserRouter } from 'react-router-dom';

import IndexPage from '@/pages/index';
import BasketPage from '../pages/customer/basket';
import DefaultLayout from '../layouts/default';
import TermsPage from '../pages/terms';
import PrivacyPage from '../pages/privacy';
import BrowseRestaurantsPage from '../pages/customer/browse';
import NotFoundPage from '../pages/404';
import CreateRestaurantPage from '../pages/restaurant/create';
import ProtectedRoute from './protectedroute';
import ManageRestaurantPage from '@/pages/restaurant/manage';

const router = createBrowserRouter([
  { index: true, Component: IndexPage },
  {
    path: 'c',
    Component: DefaultLayout,
    children: [
      { index: true, Component: BrowseRestaurantsPage },
      { path: 'basket', Component: BasketPage },
      { path: 'terms', Component: TermsPage },
      { path: 'privacy', Component: PrivacyPage },
    ],
  },
  {
    Component: ProtectedRoute,
    children: [
      {
        path: 'r',
        Component: DefaultLayout,
        children: [
          { index: true, Component: ManageRestaurantPage },
          { path: 'new', Component: CreateRestaurantPage },
        ],
      },
    ],
  },
  { path: '*', Component: NotFoundPage },
]);

export default router;
