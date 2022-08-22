import './App.css';
import React, { memo, useReducer } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

export const TotalCost=React.createContext();

const initials=[]

const reducer2=(currState,action)=>{
  switch (action.type) {
    case 'add-into-initials':
      return [...currState,{id:action.id,cost:action.price,items:action.items}]
    case 'remove-from-initials':
      return currState.filter(val => val.id!==action.id)
    
    case 'before-increase':
      return currState.filter(val => val.id!==action.id)
    case 'increase':
      return [...currState,{id:action.id,cost:action.price,items:action.items}]

    case 'before-decrease':
      return currState.filter(val => val.id!==action.id)
    case 'decrease':
      return [...currState,{id:action.id,cost:action.price,items:action.items}]
    case 'clear':
      return [];
    
  }
}


function App() {

  const [cost2,dispatch2]=useReducer(reducer2,initials);
  return (
    <div>
      <TotalCost.Provider value={{costState2:cost2,costDispatch2:dispatch2}}>
        <Navbar/>
        <Footer/>
      </TotalCost.Provider>
    </div>
  );
}

export default memo(App);
