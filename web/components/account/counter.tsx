'use client';

/* Core */
import { useState } from 'react';

/* Instruments */
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
  selectLoading,
} from '@/store';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const loading = useSelector(selectLoading);
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div>
      <div className="w-full h-full bg-red-500">
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <span>{loading}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(Number(e.target.value ?? 0))}
        />
        <button
          onClick={() =>
            dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
          }
        >
          Add Amount
        </button>
        <button onClick={() => dispatch(incrementAsync(incrementAmount))}>
          Add Async
        </button>
        <button onClick={() => dispatch(incrementIfOddAsync(incrementAmount))}>
          Add If Odd
        </button>
      </div>
    </div>
  );
};
