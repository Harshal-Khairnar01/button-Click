
import { useState } from "react";
import "./index.css";

export default function App(){
  const [Click, setClick] = useState(true);
  return(
    <>
    <div className="main-container">
     <div className="sub-cont">
      <button onClick={()=>setClick(!Click)}>Click</button>
      <h1>
         {Click?"Harshal":"Khairnar"}
      </h1>
     
     </div>
    </div>
    </>
  )
}