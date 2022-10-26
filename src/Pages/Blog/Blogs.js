import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
    const blogsData = useLoaderData();

    return (
        <div className=''>
            {
                blogsData.map((data, index) => <Blog blogsData={data}></Blog>)
            }
        </div>
    );
};

export default Blogs;