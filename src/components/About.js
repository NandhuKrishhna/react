import { Component } from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends Component{
    constructor(props){
        super(props)
        // console.log("Parent Constructor")
     this.state = {
        userInfo : {
            image : "Default",
            firstName  : "Default",
            lastName : "Default",
            age : "Default",
            birthDate : "Default",
            gender : "Default",
            phone : "Default"
        }
     }
    }

   async componentDidMount(){
        // console.log(" Parent component Did Mount")
        const data = await fetch('https://dummyjson.com/users/2')
        const json = await data.json()
        // console.log(json)
        this.setState({userInfo : json})
        // console.log(this.state.userInfo)
    }
    
    render(){
        
        // console.log(this.state.userInfo)
        return (
            <div className="about-card">
                <h1>This is about page</h1>
                 <UserClass userInfo={this.state.userInfo}/>
           
            </div>
        )
    }
}


export default About

/*
Parent constructor
Parent render
  First constructor
  first render
  sencond con
  second render

  first com did mount
  second com did mount
  parent com did mount
*/