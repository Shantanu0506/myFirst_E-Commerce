import { useState } from "react";
import { useMemo } from "react";

    const ExpensiveComp = () => {
        const sum1 = () => {
            console.log("Calculation suum :");
            let s = 0;
            for (let i = 0; i < 58969459; i++) {
                s = s + 1;
            }
            console.log(s);
            return s;
        }

        const res = useMemo(() => {
            return sum1()
        }, [])


        //const res = sum1(); // withou using useMemo hook 

        return (
            <>
                <h5>Total : {res}</h5>
            </>
        );
    }

    export const UseMemo = () => {
        const [cnt, setCnt] = useState(0);
        return (
            <> 
            <p>ExpensiveComp</p>
            <ExpensiveComp/>
            <p>Parent Component</p>
            <button onClick={()=>setCnt(cnt+1)}>Counter</button>
            <h5>Counter : {cnt}</h5>

            </>
        );
    }