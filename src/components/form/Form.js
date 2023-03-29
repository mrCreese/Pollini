import React, { useState } from 'react';

import './form.css';

export const Form = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleChangeId = (event) => {
        const num = event.target.value;

        setId((prev) => (prev = num));
    };

    const handleChangeMessage = (event) => {
        const string = event.target.value;

        setMessage((prev) => (prev = string));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let obj = {
            id: Number(id),
            code: message,
        };
        if (id && message) {
            fetch('https://autodemolizioneautore.it/SVC/dummyPOST', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(obj),
            });
            setMessage('');
            setId('');
            alert('Post submit');
        } else {
            alert('Incorect id or message');
        }
    };

    return (
        <div>
            <form className='my_form' onSubmit={handleSubmit}>
                <h3> Enter your id:</h3>

                <input
                    type='number'
                    name='id'
                    value={id}
                    onChange={handleChangeId}
                />

                <h3> Enter your message:</h3>

                <input
                    type='text'
                    name='message'
                    value={message}
                    onChange={handleChangeMessage}
                />

                <button className='btn' type='submint'>
                    click
                </button>
            </form>
        </div>
    );
};
