import { useState } from "react"

export const useActivation=()=>{
    const [isActive,setIsActive]=useState<boolean>(false)
    return{isActive,setIsActive}
}