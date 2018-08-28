import React from 'react';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/contact',
        main: () => <ContactPage />
    },
    {
        main: () => <NotFoundPage />
    }
];

export default routes;