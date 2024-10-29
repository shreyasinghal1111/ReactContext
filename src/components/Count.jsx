import { useContext } from "react";
import { Context } from "../context/context";
const Count = () => {
  const {count,setCount}=useContext(Context);

  if(count===0 || count<0){
    setCount(0);
  }

  return (
    <div className="text-center items-center flex flex-col bg-black h-screen"> 
    <h1 className="text-5xl font-bold animate-bounce mb-3 mt-5 text-white">Context API</h1>
    <h1 className="text-2xl font-semibold text-blue-500"> Count : {count}</h1>
    <button 
    onClick={()=>setCount(count+1)}
    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-5 "
    >Increment</button>
    <button onClick={()=>setCount(count-1)}
    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-5"
    >Decrement</button>

      
    </div>
  )
}

export default Count
