import { useEffect } from "react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"


export default function ExampleOne(){
    
    const [number, setNumber] = useState(0)

    /**
     * This will cause an infinite loop so it is best to not do this
     * Incase your code break
     * code on pages will run two times. Once to render what we want and another is to render
     * strict mode to find any common bugs
     */
    useEffect(() => {
        console.log(number)
    })
    
    return(
        <>
            <Header/>
            <main>
                <h1> Example 1</h1>
                <div>Infinit Loop</div>
                {number}
            </main>
            <Footer/>
        </>
    )
}