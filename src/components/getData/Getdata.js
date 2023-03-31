import React, { useEffect, useState } from 'react';

import './Getdata.css';

export const Getdata = () => {
    const [arr, setArr] = useState([]);
    const [sum, setSum] = useState(0);
    /// request to URL
    /*   const handelRequest = async () => {
        try {
            const response = await fetch(
                'http://autodemolizioneautore.it/SVC/dummyGET'
            );
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json();
            setArr((prev) => (prev = data));
        } catch (error) {
            return alert(error);
        }
    }; */

    const handelRequest = () => {
        const array = [];
        for (let i = 0; i < 50; i++) {
            array.push(Math.floor(Math.random() * 100));
        }
        setArr((prev) => (prev = array));
    };

    useEffect(() => {
        setSum((prev) => (prev = arr.reduce((acc, cur) => acc + cur, 0)));
    }, [arr]);

    return (
        <div className='request'>
            <button className='btn' onClick={() => handelRequest()}>
                Get numbers
            </button>
            <h2>Numbers</h2>
            <table>
                <tbody>
                    <tr className='content'>
                        {arr.map((num, id) => (
                            <td key={id}>{num}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <div className='total'>total sum : {sum}</div>
        </div>
    );
};
