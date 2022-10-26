import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Courses from '../Pages/Courses/Courses';
import Faq from '../Pages/Faq/Faq';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/LogingWithEmail/Register';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ])
    },
    {
        path: '*',
        element: <div><h1>route not found</h1></div>
    }
]);