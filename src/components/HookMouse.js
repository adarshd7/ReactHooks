import { render } from "@testing-library/react"
import React, {useEffect, useState} from "react"

function HookMouse(){

    const[x,setX] = useState(0)
    const[y,setY] = useState(0)

    const logmouse = (e)=>{

        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener('mousemove',logmouse)
    },[])
    
        return (
                <div>
                    <h1>
                        x-{x}
                    </h1>
                    <h1>
                        y-{y}
                    </h1>
                </div>
        );
    


}

export default HookMouse