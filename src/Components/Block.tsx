 import React from "react"
  
 type BLockprop={
    value:"X" | "O" | null;
    onClick?:()=>void
 }

 export const Block:React.FC<BLockprop> =(props)=>{
    return(
        <div className="h-[100px] w-[100px] border-2 border-solid border-purple-700">
            <div onClick={props.onClick} className=" text-white text-xl font-bold flex items-center justify-center h-full">{props.value}</div>
        </div>
    )
 }