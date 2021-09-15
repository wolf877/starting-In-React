import { useState } from "react"

export function Button(){
    
        const [counter, setCounter] = useState(0)

        function incrementCounter(){
            setCounter(counter + 1)
        }
        
        
        return (
        <button onClick={incrementCounter}>
            {counter}
        </button>
        )
}