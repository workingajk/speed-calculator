import React, { useState } from 'react'

function Cat() {
    const url = 'https://catfact.ninja/facts'

    let [facts, setFacts] = useState([])
    const getFact = async ()=>{
        try{let res = await fetch(url)
        let obj = await res.json()
        console.log(obj);
        console.log(obj.data.map(item=>item.fact));
            let arr = obj.data.map(item=>item.fact)
            console.log(arr);
            
         setFacts(arr)
    }
        
        // setFacts()

        catch(err){
            console.log(err);
            
        }
    }
  return (
    <>
    <button onClick={getFact} className='bg-green-200 py-1 px-3'> Get Cat Fact</button>
    <div>
        {facts.length>0? 
        {facts.map((fact, index) => (
                <p key={index}>{fact}</p>
            ))}
         : 
         "click for facts"
         }
    </div>
    </>
  )
}

export default Cat