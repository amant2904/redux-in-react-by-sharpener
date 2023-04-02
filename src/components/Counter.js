import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => { };
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const increment_handler = () => {
    dispatch({ type: "increment" })
  }

  const decrement_handler = () => {
    dispatch({ type: "decrement" })
  }

  const incrementByFive_handler = () => {
    dispatch({ type: "incrementByFive" })
  }

  const decrementByFive_handler = () => {
    dispatch({ type: "decrementByFive" })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increment_handler}>Increment</button>
        <button onClick={decrement_handler}>Decrement</button>
        <button onClick={incrementByFive_handler}>Increment By 5</button>
        <button onClick={decrementByFive_handler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
