import { useState } from 'react'
import './App.css'

function NameList() {

   const [List, setList] = useState(['Jack', 'John']);
   const [name, setname] = useState('');
   
   function OnAddName(){
    setList([...List,name])
    setname('')
   }

   return(
    <div>
      <ul>
        {List.map((name)=>(
          <li key={name}> {name}</li>

        ))}
      </ul>
      <input type='text' value={name} onChange={(e) => (setname(e.target.value))}></input>
      <button onClick={OnAddName}>Add Name</button>
    </div>
   )


}

function Counter() {
  const [count, setcount] = useState(0);

  function addOne (){

    setcount(count+1)
  }
  return (
    <div className='App'>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
}



function App(){
  return (
    <div>
    <Counter/>
    <NameList/>
  </div>
  )
}

export default App;
