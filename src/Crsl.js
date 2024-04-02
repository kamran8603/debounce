import React, { useState } from 'react'
const slides =[
    "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
    "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNjM2LWltYWdlLTAxLXJtNTAzXzMtbDBqOXFrNnEucG5n.png",
    "https://www.shutterstock.com/image-photo/studio-portrait-tabby-cat-standing-600nw-2269387785.jpg"
]

function Crsl() {
    const [data, setData] = useState(0)
    function next(){
        setData((prev)=>(prev +1)% slides.lenght);
    }
    function prevv(){
        setData((prev)=>(prev -1 +slides.length)% slides.length);
    }
  return (
    <div>
        <img style={{height:"400px", width:"400px"}} src={slides[data]} />
        <button onClick={next} >prev</button>
        <button onClick={prevv}>next</button>
        
      
    </div>
  )
}

export default Crsl
