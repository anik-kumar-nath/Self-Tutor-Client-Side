import React from 'react';

const Blog = ({ blogsData }) => {
    const { id, Question, Answer } = blogsData;
    return (
        <div className='m-3 p-3 rounded bg-transparent container border border-5 border-success mx-auto shadow-lg bg-success rounded'>
            <h3>Q<strong>{id}</strong>. {Question}</h3>
            <p><strong>Answer:</strong> {Answer}</p>
        </div>
    );
};

export default Blog;