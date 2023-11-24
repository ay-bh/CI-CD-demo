// src/Calculator.js
import React, { useState } from 'react';
import { add, subtract, divide } from './functions';

function Calculator() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(null);

    const handleCalculation = (operation) => {
        try {
            let res;
            switch (operation) {
                case 'add':
                    res = add(number1, number2);
                    break;
                case 'subtract':
                    res = subtract(number1, number2);
                    break;
                case 'divide':
                    res = divide(number1, number2);
                    break;
                default:
                    res = null;
            }
            setResult(res);
        } catch (error) {
            setResult(error.message);
        }
    };

    return (
        <div>
            <input 
                data-testid="number1"
                type="number" 
                value={number1} 
                onChange={(e) => setNumber1(parseFloat(e.target.value))} 
            />
            <input 
                data-testid="number2"
                type="number" 
                value={number2} 
                onChange={(e) => setNumber2(parseFloat(e.target.value))} 
            />
            <button onClick={() => handleCalculation('add')}>Add</button>
            <button onClick={() => handleCalculation('subtract')}>Subtract</button>
            <button onClick={() => handleCalculation('divide')}>Divide</button>
            <p>Result: {result}</p>
        </div>
    );
}

export default Calculator;
