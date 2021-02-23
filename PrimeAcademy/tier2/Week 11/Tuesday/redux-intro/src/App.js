import logo from './logo.svg';
import './App.css';
// import hook to use store state
import { useSelector, useDispatch } from 'react-redux';

function App() {
  
  // Give us access to Redux dispatch function
  const dispatch = useDispatch();

  const clickCount = useSelector((store) => {
    // return part of store we want to grab
    // this return value will be assigned to clickCount
    return store.clickCount;
  });
  
  const increaseCount = () => {
    // how to update redux store 'clickCount' is
    // dispatch - announcing our action
    dispatch({ // pass an object which is called an action
      // Telling Redux I want to increase the click count
      // Calls my reducer with this action
      type: 'INCREASE_CLICK_COUNT'
    });
  }

  const decreaseCount = () => {
    // how to update redux store 'clickCount' is
    // dispatch - announcing our action
    dispatch({ // pass an object which is called an action
      // Telling Redux I want to increase the click count
      // Calls my reducer with this action
      type: 'DECREASE_CLICK_COUNT'
    });
  }

  const elementList = useSelector((store) => {
    return store.elementList;
  })

  const addC = () => {
    dispatch({
      type: 'ADD_ELEMENT',
      payload: 'CHLORINONIUM' // payload is like data we are sending along with action
    })
  };

  return (
  <>
    <h1>Our First Redux App</h1>

    <h2>Button Clicker App / Periodic Table of Elements</h2>
    <div>You clicked that button {clickCount} times</div>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>

    <h3>Table of Elements</h3>
    <button onClick={addC}>MOAR CHLORINONIUM!!!</button>
    <ul>
      {elementList.map((element, index) => {
        return <li key={index}>{element}</li>
      })}
    </ul>
    
  </>
  );
}

export default App;
