import React, { useContext } from 'react';
import { MyContext } from './context';

const MyComponent = () => {
  const { myState, setMyState } = useContext(MyContext);

  return (
    <div>
      <p>{myState}</p>
      <button onClick={() => setMyState('Context API is awesome!')}>
        Update Context
      </button>
    </div>
  );
};

export default MyComponent;