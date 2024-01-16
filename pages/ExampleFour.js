import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"

export default function ExampleFour() {
    
//var [text,setText] = useState("");
//number is a variable on the left side that is used to display or grab value from the useState
//setNumber is used to update the useState

    const [number, setNumber] = useState(0); //starts at 0

    const [color, setColor] = useState("gray"); //starts at grey

    const [trigger, setTrigger] = useState(false); //boolean true/false, default @ false

    const HandleChange = () => {
        if(number > 2){
            setColor("orange");
        }
        console.log(number);
    }
 
    useEffect(() => {
        var interval;

        if(trigger){ //trigger is boolean by default
            interval = setInterval(() => {
                HandleChange();
                setTrigger(false);
            }, 3000) //after 3 seconds then it will do the conosole log
        }

        console.log(number);
        console.log(trigger);

        return () => clearInterval(interval); //clearing the interval so it doesnt get into a loop
    }, [trigger])

    return(
        <>
            <Header/>
            <main>
                <button onClick={() => {
                    setNumber(number + 1);
                    setTrigger(true);
                }}>
                    AddNumber
                </button>
                <h1 style={{color: color}}>Changing the text color</h1>

                {
                    number > 1 && <div style={{
                        backgroundColor:`${color}`,
                        lineHeight: 10, 
                        }}>
                            box
                        </div>
                }
            </main>
            <Footer/>
        </>
    )
}

//When we click on the button it will change the flag the trigger to true and +1 number
//Trigger
//When the number is > 1 it will apply the colour
//If colour is > 1, it's grey, if > 2, then it'll be orange