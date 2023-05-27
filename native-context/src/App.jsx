
import './App.css'
import {createContext, useContext} from 'react'

// Parent Component
const Parent = () => {
  return <Child/>;
};



// Child Component
const Child = () => {
  return <Grandchild/>;
};

// Grand Child Component
const Grandchild = () => {
  const contextName= useContext(NameContext);
  return <p>{contextName}</p>;
};

const NameContext = createContext("");
const App = () => {
  const name = "John";

  return (
    <div>
      <h1>Context Example</h1>
       {/* Provide the name value to the context */}

      <NameContext.Provider value = {name}>
      <Parent/>
      </NameContext.Provider>
    </div>
  );
};

export default App
