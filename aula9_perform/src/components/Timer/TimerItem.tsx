import React, { FunctionComponent, memo, useMemo } from 'react';
import ClockFormatter from "./Clock";

interface ITimerItem {
    id: number,
    timing: number,
    active: boolean 
    handleClickEvent: (id: number) => void
}

const style = {
    margin: "20px"
};

const TimerItem: FunctionComponent<ITimerItem> = ({ 
    id, 
    timing,  
    handleClickEvent 
}): JSX.Element => {

    // return useMemo(() => {
    
       return (
        <li style={style}>
            {/* Counter: {useMemo(() => ClockFormatter(timing), [timing])}  */}
            Counter: {ClockFormatter(timing)}
            <button onClick={() => handleClickEvent(id)}>
                Start
            </button>
        </li>
        );

    // }, [id, timing, handleClickEvent]);
}

export default memo(TimerItem);