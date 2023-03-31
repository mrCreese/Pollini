import React, { useState } from 'react';

export const Form = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
        console.log(inputs);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (inputs.id && inputs.message) {
            await fetch('https://autodemolizioneautore.it/SVC/dummyPOST', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    message: inputs.message,
                    id: Math.trunc(Number(inputs.id)),
                }),
            })
                .then((response) => response.json())
                .catch((err) => {
                    alert(err.message);
                });

            setInputs((prev) => (prev = {}));
            alert('Post submit');
        } else {
            alert('Incorect id or message');
        }
    };

    return (
        <form className='my_form' onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input
                    type='text'
                    name='message'
                    value={inputs.message || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Enter your age:
                <input
                    type='number'
                    name='id'
                    value={inputs.id || ''}
                    onChange={handleChange}
                />
            </label>
            <input className='btn' type='submit' value='Submit' />
        </form>
    );
};
