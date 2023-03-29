import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import Card from './Card'
    

const Dict = () => {
    const [word,setWord] = useState('')

    const {isLoading,isError,data,refetch} = useQuery(['meanings'],()=>
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res=> res.json()),
    {enabled:false}
    )
  return (
    <div>
     <header>
        <h1>
      <b>W</b>andel's <b>D</b>ictionary
        </h1>
        <img src="/src/assets/d2.png" alt="dict" className='logo' />
     </header>
     <div className="inp-container">
        <input type="text" value={word} placeholder='Search to Know'
        onChange={(e)=>{setWord(e.target.value)}}
        />
        <img src="/src/assets/s2.png" alt="logo" className='logo' onClick={refetch} />
     </div>

     {/* {isLoading && (<h1 className='msg'> Loading....</h1> )} */}
     {isError && ( <h1 className='msg'>Error</h1>) }
     {data && console.log(data[0])}

     <div className="card">
      {!data && <h2>Search to Empower yourself with knowledge.
        "knowledge Is Divine"</h2>}
     {data && (
        <Card obj={data[0]} />
        ) 
      }
        
     </div>
    </div>
  )
}

export default Dict