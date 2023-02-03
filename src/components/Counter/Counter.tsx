import {useState} from "react";
import s from './Counter.module.scss'

import React from 'react';

export const Counter = () => {
    const [value, setValue] = useState(0)
    return (
        <div className={s.wrapper}>
            <h1>{value}</h1>
            <button className={s.btn} onClick={() => setValue(value => value + 1)}>increase</button>
        </div>
    );
};

