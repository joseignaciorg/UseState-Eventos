import { useState } from 'react';
import Button from '../button/Button';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<h1>{counter}</h1>
			<Button text='Sumar' handleclick={() => sumar(counter, setCounter)} />
			<Button text='Restar' handleclick={() => restar(counter, setCounter)} />
			<Button text='Resetar' handleclick={() => resetear(setCounter)} />
		</>
	);
};
const sumar = (counter, setCounter) => {
	setCounter(counter + 1);
};
const restar = (counter, setCounter) => {
	setCounter(counter - 1);
};
const resetear = setCounter => {
	setCounter(0);
};

export default Counter;
