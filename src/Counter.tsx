import React, {useState} from 'react';
import cls from './Counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            {counter}
            <button className={cls.button} onClick={() => setCounter(counter + 1)}>increment</button>
        </div>
    );
};

