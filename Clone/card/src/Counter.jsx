import { useEffect, useState, useContext, useRef } from "react";
import { dataContext } from "./Home1";

function Counter(){

    const[count,setCount] = useState(0);

    const data = useContext(dataContext);

    let refCount = useRef(0);

    function inc(){

        //Update Function
        //setCount(preCount=>preCount+1);
        //setCount(preCount=>preCount+1);
        setCount(count+1);
        refCount.current ++;
        console.log(count);
        console.log(refCount.current);
        
    }

    useEffect(()=>{
        /* console.log(count);
        console.log(refCount); */
    });

    return(
        <>
        <h2>{data}</h2>
        <h2 className="m-5">{refCount.current}</h2>
        <button className="mx-4 btn btn-primary" onClick={inc}>Up</button>
        <button className="btn btn-secondary mx-4" onClick={()=>setCount(refCount.current)}>Update</button>
        </>
    );
}

export default Counter