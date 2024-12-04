import React, {useState} from 'react';
import * as style from './Counter.module.less';

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button className={style.button} onClick={increment}>Count: {count}</button>
        </div>
    );
};

export default Counter;