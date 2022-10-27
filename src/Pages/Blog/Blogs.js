import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogsData, setblogsData] = useState([]);
    useEffect(() => {
        fetch('BlogData.json')
            .then(response => response.json())
            .then(result => setblogsData(result))
    }, []);
    return (
        <div className=''>
            {
                blogsData.map((data, index) => <Blog blogsData={data}></Blog>)
            }
        </div>
    );
};

export default Blogs;