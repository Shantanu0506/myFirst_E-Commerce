import { useState } from "react";
import Count from "./Count";

function ReactMemo() {
    const [cnt, setCnt] = useState(0);
    return (
        <>
            <h3>Increement</h3>
            <p>It is react.memo() function!</p>
            <h3>{cnt}</h3>

            <button onClick={() => setCnt(cnt + 1)}>Increement➕➕</button>
            <hr></hr>
            <Count />
        </>
    );
}
export default ReactMemo;