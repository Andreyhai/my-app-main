import React from 'react';
import {Route, Routes} from "react-router-dom";

import { 
    ERROR_ROUTE, 
    HOME_ROUTE, 
    LOGIN_ROUTE 
} from './utils/PATHS';

import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LoginPage from './pages/LoginPage/LoginPage';

const AppRouter = () => {

    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<HomePage />} />
            <Route path={ERROR_ROUTE} element={<ErrorPage />} />
            <Route path={LOGIN_ROUTE} element={<LoginPage />} />
        </Routes>
    );
};

export default AppRouter;