import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter)

  const increment_handler = () => {
    dispatch(counterActions.increment())
  }

  const decrement_handler = () => {
    dispatch(counterActions.decrement())
  }

  const incrementByFive_handler = () => {
    dispatch(counterActions.incrementBy5(5))
  }

  const decrementByFive_handler = () => {
    dispatch(counterActions.decrementBy5(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
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
