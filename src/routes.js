import React from 'react';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
		},
		{
			path: '/login',
			main: () => <LoginPage />
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