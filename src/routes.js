import React from 'react';
import HomePape from './pages/HomePage/HomePape';
import NotFound from './pages/NotFound/NotFound';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <HomePape/>
    },
    {
        path: '/product-list',
        exact: false,
        component: () => <ProductListPage/>
    },
    {
        path: '/product/add',
        exact: false,
        component: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        component: ({match}) => <ProductActionPage match={match} />
    },
    {
        path: '',
        exact: false,
        component: () => <NotFound/>
    },
];

export default routes;
