import React from 'react';

const Titlesection = (props) => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold'>{props.title}</h1>
                <p className='p-2'>{props.description}</p>
            </div>
        </div>
    );
};

export default Titlesection;