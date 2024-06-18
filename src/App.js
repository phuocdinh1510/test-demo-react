import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component{

  state = {
    name: 'Pham Phuoc Dinh',
    age: 20 ,
    address:'Binh Dinh'
  }

  HandleClickMe = (event) => {
    console.log("Click Me");
    
    this.setState({
      name: "Phuoc Dinh",
      age:  Math.floor((Math.random() * 100)+1)
    })
  }

  HandleOnMouseOver(event) {
    // console.log(event);
  }

  render(){
    return (
      <div>
        <h1> Hello my friend, I'm {this.state.name} I'm {this.state.age}</h1>
        <button onClick={this.HandleClickMe}>Click me</button>
        <button onMouseOver={this.HandleOnMouseOver}>Hover Me</button>
      <MyComponent></MyComponent>
    </div>
    );
  }
}

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Mới Tập code hehe
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
