import React from "react";
//use props
const Greet = ({name , heroName}) => {
       return(
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}
// export const Greet là buộc phải đúng tên 
export default Greet