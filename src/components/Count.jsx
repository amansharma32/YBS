" use client "
import React , {useState, useEffect} from 'react'

export default function () {

    const [count, setCount] = React.useState(0); 

const increment = () => setCount(count+1)
const decrement = () => setCount(count-1)


const [secon , setSec] = useState(0);

useEffect(()=> {

    const interval = setInterval(()=>{
        setSec(prev => prev+1);
    },1000)

    return ()=>clearInterval(interval);
    },[]);


  return (
    <>


    <div className="container absolute z-50 top-1/2 h-screen w-screen">
 <h1>count {count}</h1>
 <h2> timer {secon}</h2>
<button onClick={increment}> 
inc
</button>

<button onClick={decrement}>
des
</button>
    </div>
 

    </>
  )
}
