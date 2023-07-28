import React, {useEffect, useRef, useState, useContext} from 'react';
import { ThemeContext } from '../../App';
import {CustomHook} from './customHook';

function Main() {
    const [count, setCount] = useState(0);
    const refValue = useRef(0);
    const { customHookCount, incrementCustomHookCount } = CustomHook();
    useEffect(() => {
        fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            .then(json => console.log(json));
        
        return () => {
            //Cleanup activity
            setCount(0);
        };
    }, []);

    useEffect(() => {
        if (count === 2) console.log(`Count: ${count}`);
    }, [count]);

    const incrementCount = () => {
        setCount(count + 1);
        refValue.current = refValue.current + 1;
        incrementCustomHookCount();
    }

    const useExampleContext = () => React.useContext(ThemeContext);

    return (
      <>
            <div>UseEffect Count: {count}</div>
            <div>Ref Count: {refValue.current}</div>
            <div>Custom Hook Count: {customHookCount}</div>
            <button onClick={incrementCount}>Increment Count </button>
            <button style={{backgroundColor: `${useExampleContext()}`}}>Context change</button>
      </>
  )
}

export default Main;