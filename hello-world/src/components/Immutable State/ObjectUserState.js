import React, {useState} from 'react'

const initState = {
    fname: 'Bruce',
    lname: 'Wayne'
}
const ObjectUserState = () => {
    const [person, setPerrson] = useState(initState)

    const changeName =  () =>{
        // person.fname ='Clark'
        // person.lname ='Kent'
        // setPerrson(person)

        const newPerson = {...person}
        newPerson.fname='Clark'
        newPerson.lname='Kent'
        setPerrson(newPerson)
    }

    console.log('ObjectUserState Render')
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUserState
