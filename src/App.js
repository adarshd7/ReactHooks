import React from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">

      <UserContext.Provider value={'Adarsh'}>
        <ChannelContext.Provider value={'codeevolve'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
     {/*<ClassCounter/>*/}

     {/*<HookCounter/>*/}
     {/*<HookCounterTwo/>*/}
     {/*<HookCounterThree/>*/}
     {/*<HookCounterFour/>*/}
    
     <DataFetching/>
     <ClassCounterOne/>
     <HookCounterOne/>
     <HookMouse/>
    </div>
  );
}

export default App
