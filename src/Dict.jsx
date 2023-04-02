import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import Card from './Card'
import dictLogo from "/src/assets/d2.png"
import searchLogo from "/src/assets/s2.png"
import { useAuth0 } from "@auth0/auth0-react";


const Dict = () => {
    const [word,setWord] = useState('')
    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();

    const {isLoading,isError,data,refetch,error} = useQuery(['meanings'],()=>
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res=> res.json()),
    {enabled:false}
    )
  return (
    <div>
     <header>
        <h1>
      <b>W</b>andel's <b>D</b>ictionary
        </h1>
        <img src={dictLogo} alt="dict" className='logo' />

        {isAuthenticated ? <button className='log-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>:<button className='log-btn' onClick={() => loginWithRedirect()}>Log In</button>}
        
     </header>

     {user && (
      <div>
        <h2 className='uname'>HI! "{user.name}"</h2>
        <div className="upic-div">
        <img className='upic' src={user.picture} alt={user.name} />
        </div>
        <div className="inp-container">
        <input type="text" value={word} placeholder='Search to Know'
        onChange={(e)=>{setWord(e.target.value)}}
        />
        <img src={searchLogo} alt="logo" className='logo' onClick={refetch} />
     </div>
      </div>
    ) }

     

     {/* {isLoading && (<h1 className='msg'> Loading....</h1> )} */}
     {isError && ( <h1 className='msg'>{error.message}</h1>) }
     {data && !data[0] && (<h2 className='not-found'>No Definitions Found,pls Enter Meaningful words</h2>)}

     <div className="card">
      {!data && (
      <>
      <h2>Search to Empower yourself with knowledge.</h2>
      <h2 className='quote'> "knowledge Is Divine"</h2>
      {!user && ( <h2 className='log-prompt'>Log-in to Search.</h2>)}
       </>
       )}

     {data && !isError && data[0] && (
        <Card obj={data[0]} />
        ) 
      }

    
    {/* {user && console.log(user)} */}

     </div>
    </div>
  )
}

export default Dict