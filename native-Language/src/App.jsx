import { useState } from 'react'
import './App.css'
import {LanguageProvider} from './Store'
import {Greeting} from './Greeting'
import {LanguageSelector} from './LanguageSelector'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Language Selector using Context</h1>

      
        <LanguageProvider>
        <LanguageSelector/>
        <Greeting/>
        </LanguageProvider>
      </div>
    </>
  )
}

export default App
