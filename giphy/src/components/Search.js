import React, { useState } from 'react';

function Search(props) {
    const [input, handleChange] = useState('');

    const submit = (e) => {
        e.preventDefault();

        props.handleSubmit(input);
    }

    return (
        <form
            style={{
                textAlign: 'center',
                margin: '20px 0',
            }}
            onSubmit={submit}
        >
            <input
                style={{
                    height: '41px',
                    borderRadius: '10px',
                    width: '50%',
                    border: '1px solid'
                }}
                onChange={(e) => handleChange(e.target.value)}
            />
        </form>
    )
}

export default Search;