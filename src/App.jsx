import { useState } from 'react'
import './App.css'
import { Square } from './components/Square';

function App() {
  
  const fraseString = 'LA PATRIA NO SE VENDE'
  const arrayFrase = Array.from(fraseString);

  const [frase, setfrase] = useState(Array(21).fill(null))

  const updateSquare = (index) => {

    console.log('indice: ', index)
    const fraseUpdated = [...frase]
    fraseUpdated[index] = frase[index] ? null : arrayFrase[index];
    console.log("frase actualizada")
    console.log(fraseUpdated[index])
    setfrase(fraseUpdated)
  }


  return (

    <main>
      {
        frase.map((letra,index)=>{
          return(
            
            <Square
              key = {index}
              index={index}
              updateSquare={updateSquare}
              
            >
              {letra}
            </Square>
          )
        })
      }

    </main>
    
  )
}

export default App
