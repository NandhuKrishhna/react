import User from "./User"
import UserClass from "./UserClass"
import {Component} from "react"

class About extends Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor callled");
    }
    componentDidMount(){
        console.log("Parent component did Monut");
    }
    render(){
        console.log("parent render");
        return(
            <div>
                <h1>THis is About Page</h1>
                <h2>THis is a technical task</h2>
                <UserClass name={"Nandhu "}/>
            </div>
        )
    }
} 


export default About