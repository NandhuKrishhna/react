import { useState } from "react"
const User = (props) =>{

    const {name} = props
    const [count , setCount] = useState(0)
    return (
        <div className="user-card">
             
            <h2>Count :{count}</h2>
            <button onClick={()=>{
              setCount(count+1)
            }}>Increase</button>

            <button onClick={()=>{
              if(count > 0){
                setCount(count-1)
              }
            }}>Decrease</button>
            <h2>Name : {name}</h2>
            <h2>Location :</h2>
            <h2>Contact :</h2>
        </div>
    )
}

export default User