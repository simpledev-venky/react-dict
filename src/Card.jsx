import React from 'react'

const Card = ({obj}) => {
    
    const {phonetic,word,meanings,phonetics} = obj
    const randomNum = ()=>{
    const num = Math.floor(Math.random()*1000)
    return num
    }
  return (
    <div>
<h2 className='center'>{word}</h2>
<h2 className='center'>{phonetic}</h2>
<h2 className='center'> <b>Parts of Speech :</b>{meanings[0].partOfSpeech}</h2>

{phonetics.length ? <audio controls><source src={phonetics[0].audio}></source></audio>:''}

{meanings[0].definitions.length == 1 ?<h2><b>Meaning-1 :</b> {meanings[0].definitions[0].definition }
</h2>:''}
{meanings[0].definitions.length == 2 ?<h2><b>Meaning-2 :</b>{meanings[0].definitions[1].definition }
</h2>:''}

{meanings[0].synonyms.length ?<h2><b>synonyms :</b> {meanings[0].synonyms.map(s=><p key={`${s}${randomNum}`}>{s}</p>)}</h2>:''}

{meanings[0].antonyms.length ?<h2><b>antonyms:</b> {meanings[0].antonyms.map(a=><p key={`${a}${randomNum}`}>{a}</p>)}</h2>:''}

    </div>

  )
}

export default Card