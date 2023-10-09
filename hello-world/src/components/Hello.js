import React from "react";

// dùng JSX
const Hello = () =>{
    // return(
    //     <div>
    //         <h1>Hello Vishwas</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
         {id: 'hello', className:'dummyClass'},
         React.createElement('h1', null, 'Hello Vishwas'))
}
export default Hello