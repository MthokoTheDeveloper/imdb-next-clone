'use client'
import { useEffect } from "react"

export default function error(error, reset) {
    useEffect(()=>{
        console.log(error);
    },[error]);
  return (
    <div className="text-center">
        <h1>Something went wrong. Please try again later.</h1>
        <button className="hover:text-amber-600 border border-amber-600 px-3 py-1 rounded-md mt-2" onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
