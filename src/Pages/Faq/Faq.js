import React from 'react';
import { Accordion } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Faq = () => {
    const faqData = useLoaderData();
    return (
        <div className='container'>
            <h1 className='text-center text-success mb-3 fw-bolder'>React.js interview frequently asked questions</h1>
            {
                faqData.map((data, index) =>
                    <div className='m-3' key={index}>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey={data.id - 1}>
                                <Accordion.Header>{data.Q}</Accordion.Header>
                                <Accordion.Body>
                                    {data.A}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>)
            }

        </div>
    );
};

export default Faq;