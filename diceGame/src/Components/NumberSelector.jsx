import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({setError, error, selectedNumber, setselectedNumber}) => {

    const arrNumber = [1,2,3,4,5,6];
    const numberSelectorHandler =(value)=>{
        setselectedNumber(value)
        setError("")
    }

  return (
    <NumberSelectorcontainer>
        <p className='error'>{error}</p>
   
        <div className='flex'>
        {
            arrNumber.map((value,i) => 
                <Box 
            isSelected={value===selectedNumber} 
            key ={i} 
            onClick={()=>numberSelectorHandler(value)}>{value}
            </Box>
            )
        }
    </div>
    <p>Select Number</p>
        
    </NumberSelectorcontainer>
  )
}

export default NumberSelector

const NumberSelectorcontainer=styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700px;
}
.error{

    color: red;
}


`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    font-size: 24px;
    font-weight: 700;
    place-items: center;
    background-color: ${(props)=>props.isSelected ? "black" : "white" };
    color: ${(props)=>props.isSelected ? "white" : "black" };
    

`