import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blogs from '../Pages/Blog/Blogs';
import Checkout from '../Pages/Checkout/Checkout';
import CourseDetails from '../Pages/Courses/CourseDetails/CourseDetails';
import Courses from '../Pages/Courses/Courses';
import ErrorRoute from '../Pages/ErrorRoute/ErrorRoute';
import Faq from '../Pages/Faq/Faq';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/LogingWithEmail/Register';
import PrivateRoute from './PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://assignment-10-edu-data-aknathweb.vercel.app/course/${params.id}`),
                element: <CourseDetails></CourseDetails>,
                errorElement: <ErrorRoute></ErrorRoute>
            },
            {
                path: '/',
                element: <Courses></Courses>,
                errorElement: <ErrorRoute></ErrorRoute>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                errorElement: <ErrorRoute></ErrorRoute>
            },
            {
                path: '/faq',
                element: <Faq></Faq>,
                errorElement: <ErrorRoute></ErrorRoute>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>,
                errorElement: <ErrorRoute></ErrorRoute>
            },
            {
                path: '/login',
                element: <Login></Login>,
                errorElement: <ErrorRoute></ErrorRoute>
            },
            {
                path: '/register',
                element: <Register></Register>,
                errorElement: <ErrorRoute></ErrorRoute>
            },
            {
                path: '*',
                element: <ErrorRoute></ErrorRoute>
            }
        ])
    }
]);