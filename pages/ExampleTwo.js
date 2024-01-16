import { useEffect } from "react"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function ExampleTwo(){
   
    /**  the square brackets [] ensures code only runs once on the page
     * 
     * code on pages will run two times. Once to render what we want and another is to render
     * strict mode to find any common bugs
     */
    useEffect(() => {
        console.log("run")
    }, [])
    
    
    return(
        <>
            <Header/>
            <main>
                <h1>Example 2</h1>
            </main>
            <Footer/>
        </>
    )
}

