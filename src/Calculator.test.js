// src/Calculator.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './Calculator';

describe('Calculator', () => {
    test('renders Calculator component', () => {
        render(<Calculator />);
        expect(screen.getByText(/result/i)).toBeInTheDocument();
    });

    test('adds 1 + 2 to equal 3', () => {
        render(<Calculator />);
        fireEvent.change(screen.getByTestId('number1'), { target: { value: '1' } });
        fireEvent.change(screen.getByTestId('number2'), { target: { value: '2' } });
        fireEvent.click(screen.getByText('Add'));
        expect(screen.getByText(/result: 3/i)).toBeInTheDocument();
    });

    test('subtracts 5 - 2 to equal 3', () => {
        render(<Calculator />);
        fireEvent.change(screen.getByTestId('number1'), { target: { value: '5' } });
        fireEvent.change(screen.getByTestId('number2'), { target: { value: '2' } });
        fireEvent.click(screen.getByText('Subtract'));
        expect(screen.getByText(/result: 3/i)).toBeInTheDocument();
    });

    test('divides 10 / 2 to equal 5', () => {
        render(<Calculator />);
        fireEvent.change(screen.getByTestId('number1'), { target: { value: '10' } });
        fireEvent.change(screen.getByTestId('number2'), { target: { value: '2' } });
        fireEvent.click(screen.getByText('Divide'));
        expect(screen.getByText(/result: 5/i)).toBeInTheDocument();
    });

    test('division by zero shows error message', () => {
        render(<Calculator />);
        fireEvent.change(screen.getByTestId('number1'), { target: { value: '5' } });
        fireEvent.change(screen.getByTestId('number2'), { target: { value: '0' } });
        fireEvent.click(screen.getByText('Divide'));
        expect(screen.getByText(/cannot divide by zero/i)).toBeInTheDocument();
    });
});
