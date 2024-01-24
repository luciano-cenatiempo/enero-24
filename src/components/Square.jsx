
export const Square = ({children, updateSquare , index}) =>{
    const handleClick = () =>{
      updateSquare(index);
    }

    return(
      <dic className = "casillero" onClick={handleClick} >
        {   
          children
        }
      </dic>
    )
  }
