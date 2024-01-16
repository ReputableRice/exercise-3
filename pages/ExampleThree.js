import { useEffect } from "react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ExampleThree(){
    
    const [number, setNumber] = useState(0)

    const colors = ["red","orange","yellow","green","blue","violet"]

    useEffect(() => {
        //code in here to reset the array @ 6
        //length of array, colors.length, if/else
        // 6 < colors.length 6 - 1 = 5
        if(number >= colors.length) {
            setNumber(0);
            //console.log("Changing number value " + colors[0]);
        } else {
            //console.log("Changing number value " + colors[number])
        }

        console.log("Changing number value: " + colors[number])
    }, [number])

  
    
    return(
        <>
            <Header/>
            <main>
                <h1>Example 3</h1>
                <button 
                style={{backgroundColor: colors[number]}}
                onClick={() => setNumber(number + 1)}
                > Increment </button>
                {number}
            </main>
            <Footer/>
        </>
    )
}