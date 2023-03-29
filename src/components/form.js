import React, { useState } from 'react';
import './form.css';

export const Form = () => {
    const [arr, setArr] = useState([]);
    const [id, setId] = useState();
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
            id: id,
            code: message,
        };

        fetch('https://autodemolizioneautore.it/SVC/dummyPOST', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(obj),
        });
    };

    const handelRequest = () => {
        const array = [];
        for (let i = 0; i < 50; i++) {
            array.push(Math.floor(Math.random() * 100));
        }
        setArr((prev) => [...prev, ...array]);
    };

    const sum = arr.reduce((acc, cur) => acc + cur, 0);

    return (
        <div className='container'>
            <form className='my_form' onSubmit={handleSubmit}>
                <h3> Enter your id:</h3>

                <input type='number' name='id' onChange={handleChangeId} />

                <h3> Enter your message:</h3>

                <input
                    put
                    type='text'
                    name='message'
                    onChange={handleChangeMessage}
                />

                <button className='btn' type='submint'>
                    click
                </button>
            </form>
            <div>
                <button className='btn' onClick={() => handelRequest()}>
                    get
                </button>
                <div className='request'>
                    {arr.map((num, id) => (
                        <span>{num} </span>
                    ))}
                    <div className='total'>total sum : {sum}</div>
                </div>
            </div>
        </div>
    );
};
