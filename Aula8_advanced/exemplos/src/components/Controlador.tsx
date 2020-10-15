import React, { useContext } from 'react';
import { ConterContext } from '../App';
import CounterActions from '../CounterActions';

const Controlador = () => {
    const [dispatch] = useContext(ConterContext);

    const handleIncrement = () => {
        dispatch({
            type: CounterActions.COUNTER_INCREMENT,
            payload: {
                quantity: 1
            }
        });
    }

    const handleDecrement = () => {
        dispatch({
            type: CounterActions.COUNTER_DECREMENT,
            payload: {
                quantity: 1
            }
        });
    }

    return (
        <div>
            <button onClick={handleIncrement}> + </button>
            <button onClick={handleDecrement}> - </button>
        </div>
    );
}

export default Controlador;