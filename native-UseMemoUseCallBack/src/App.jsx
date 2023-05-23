import { useState, useMemo, useCallback } from 'react'


function SortedList({List, sortFunc}){

  console.log("SortedList rendered"); //this will render every time a button is clicked as the functional component gets rerenderd

  const sortedList = useMemo(() => {
    console.log("running sort"); //this doesn't run even if we click count many times because of useMemo
    return [...List].sort(sortFunc)},
     [List,sortFunc]);

  return(
    <div> {sortedList.join(" , ")} </div>
  )

}

function App() {



  // useMemo example

  const [numbers] = useState([10,20,30]);

  const total = useMemo( () => numbers.reduce( (acc,n)=> acc+n, 0), [numbers])

  const [names] = useState(["venkata", "satya", "siva"]);

  const sortedNames = useMemo(() => [...names].sort(),[names]); //here sorted names gets executed only when there is a change in names array


  const [count1, setcount1] = useState(0);
  const[count2, setcount2] = useState(0);

  const countTotal = useMemo(()  => count1+count2, [count1,count2]); // this is a bad use of useMemo as it deals with scalers

  const sortFunc = useCallback( (a,b) => a.localeCompare(b), []); // function that compares two strings and sorts them

  // implement useCallback only when you dont want reference to be changed or when you are sending calcuated data or function on to a nested component where you dont know the implementation
  // do not implement useCallback on simple html elements for onChange or onClick
  // useCallback can be used in custom hoooks so that the created function will not break the code
  

  return (
    <div> 
      <button onClick={() => setcount1(count1+1)}> {count1}</button>
      <button onClick={() => setcount2(count2+1)}> {count2}</button>
      <div>Total: {countTotal}</div>

      <div>Names: {names.join(" , ")}</div>

      {/* <div>Sorted Names: {sortedNames.join(" , ")}</div>   */}

      <SortedList List={names} sortFunc={sortFunc}/>
      
      </div>
    
  )
}

export default App
