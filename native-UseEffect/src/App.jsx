import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Timer(){
  const [time,setTime] = useState(0);

  useEffect( () => {
    const interval = setInterval(() => {
      setTime((t) =>{
        return t + 1
      });
      return clearInterval(interval)
    },1000)
  },[]);

  return(
    <div>{time}</div>
  )
}

function NameList() {

  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  },[]);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const selectedNameChange = (name) => {
    fetch(`${name}.json`)
    .then( (response) => response.json())
    .then((data) => setSelectedNameDetails(data));
  }

  return (
    <div>

{names.map((name) => (
          <button onClick={() =>selectedNameChange(name)}>{name}</button>
        ))}
        {JSON.stringify(selectedNameDetails)}
    </div>
  )
}

function App(){
  return(
    <div>
    <Timer/>
    <NameList/>
    </div>
  )
}

export default App
