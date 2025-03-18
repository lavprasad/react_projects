import React, { useState } from "react";



// const Counter: React.FC = () => {
//     const [count, setCount] = useState<number>(0);
//     const increment = ()=> setCount(count + 1);
//     const decrement = ()=> setCount(count - 1);

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick= {increment}>Increment</button>
//             <button onClick= {decrement}>Decrement</button>
//         </div>
//     );
// }

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(count +1)
    const decrement = () => setCount(count -1)

    return(
        <>
        <h1>{count}</h1>
        <button onClick ={increment}>increment</button>
        <button onClick ={decrement}>decrement</button>
        </>
    )
}
export default Counter;