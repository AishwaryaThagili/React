import {useEffect} from 'react'

export const HookUseEffectProps = (props) => {
    useEffect(()=>{
     console.log("useEffect called");
    },[props.count])
  
}


