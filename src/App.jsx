import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const App = () => {
  const message = useSelector(state => state.message)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Hello {message}</h1>
      <button
        onClick={() =>
          dispatch({ type: 'CHANGE_GREETING', payload: 'Uranus' })
        }>
        Say hi to uranus!
      </button>
    </>
  );
};

export default App;
