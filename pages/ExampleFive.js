import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState, useEffect } from "react";


export default function ExampleFive() {

    //we want to setup a counter after every one second the number increase by 1 
    // we want to desiplay that number on screen as it increases
    //no button is needed

    const [count, setCount] = useState(0);

    //loads as soon as the page loads
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return () =>clearInterval(interval);
    }, [count])

    return(
        <>
            <Header/>
            <main>
                <div>
                    <h1>counter</h1>
                    <h2> 
                        {count}
                    </h2>
                </div>
            </main>
            <Footer/>
        </>
    )
}
