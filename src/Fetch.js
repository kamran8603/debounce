import React, { useEffect, useState } from 'react'

function Fetch() {
    const [data, setData]= useState([])

   function abc(){
       fetch("https://jsonplaceholder.typicode.com/comments")
       .then((res)=>res.json())
       .then((resp)=>{
        setData(resp)
        console.log(resp)
       })
   }
   useEffect(()=>{
    abc()
   },[])
  
  return (
    <div>
      
      
    </div>
  )
}

export default Fetch
