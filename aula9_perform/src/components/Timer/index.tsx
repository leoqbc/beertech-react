import React, { useCallback, useEffect, useMemo, useState } from 'react';
import TimerItem from './TimerItem';

type Counter = {
    value: number;
    active: boolean;
}

function TimerList() {

    const [counters, setCounter] = useState<Counter[]>([]);

    const handleClick = useCallback((id: number) => {
        setCounter((prevState: Counter[]) => {
            const state = [...prevState];

            // inversão de boolean !true > false
            state[id].active = !state[id].active;

            return state;
        });
    }, []);

    useEffect(()=> {
        setCounter([
            {
                value: 0,
                active: false
            },
            {
                value: 0,
                active: false
            },
            {
                value: 0,
                active: false
            },
            {
                value: 0,
                active: false
            }
        ]);
    }, []);

    useEffect(() => {
        const idInterval = setInterval(() => {
            // prevState resolve estado que fica travado
            // na primeira chamada
            setCounter((prevState: Counter[]) => {
                let newState: Counter[] = prevState;
                
                prevState.forEach((counter: Counter, index: number) => { 
                    if (counter.active) {
                        counter.value++;
                        newState[index] = counter;
                        newState = [...newState];
                    }
                });
                return newState;
            });
        }, 1000);
        return () => clearInterval(idInterval)
    }, []);
    
    return useMemo(() => {
        console.log("--- chamou Lista ---");
        return (
            <ul>
                {counters.map((counter, index) => (
                    <TimerItem 
                        key={index} 
                        id={index} 
                        active={counter.active} 
                        timing={counter.value} 
                        handleClickEvent={handleClick} 
                    />)
                )}
            </ul>
        )}, [counters, handleClick]);
}

export default TimerList;