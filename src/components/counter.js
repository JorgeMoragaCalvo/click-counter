import React from 'react';
import '../stylesheets/counter.css'

function Counter({ clickNumbers }) {
    return (
        <div className='counter'>
            {clickNumbers}
        </div>
    );
}

export default Counter;