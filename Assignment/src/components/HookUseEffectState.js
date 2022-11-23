import React,{useState} from 'react';
import {useEffect} from 'react';

//for the use of props
// import {HookUseEffectProps} from './HookUseEffectProps';

export const HookUseEffectState = () => {
    const [Count,setCount] = useState(0);
    const [Data,setData] = useState(0);
    // useEffect(()=>{
    //     console.log("UseEffect Called")
    // },[Count,Data])
    useEffect(()=>{
        console.log("UseEffect Called")
    },[Count])

    
    
  return (
    <div>
    
    <h1>{Count}</h1>
      <button onClick={()=>setCount(Count+1)}>Click Count</button>
      <h1>{Data}</h1>
      <button onClick={()=>setData(Data+1)}>Click Data</button>
    </div>
  )
}