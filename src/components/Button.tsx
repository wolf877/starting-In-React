// import { useState } from "react"
import { ButtonHTMLAttributes } from "react"
import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps){
    
        // const [counter, setCounter] = useState(0)

        // function incrementCounter(){
        //     setCounter(counter + 1)
        // }
        
        
        return (
        // <button onClick={incrementCounter}>
        <button className="button" {...props}>
            
        </button>
        )
}