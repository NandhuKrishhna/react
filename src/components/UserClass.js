import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // console.log(" CHild constructore is called");
    super(props);
    this.state = {
        userInfo : {
            name : "DUmmy",
            location : "Kerala"
        }
    }
  }
   async componentDidMount(){
    // console.log(this.props.name +'CHild component did Mount');
    //Api call
   const data = await fetch("https://api.github.com/users/NandhuKrishhna")
   const json =  await  data.json();
   console.log(json);
     this.setState({
        userInfo : json
     })
  }
  render() {
      const { login , location } = this.state.userInfo
      
    //   console.log(name,'render is called');
    return (
      <div className="user-card">

        
        <h2>Name : {login}</h2>
        <h2>Location :{location || "kerala"}</h2>
        <h2>Contact :</h2>
      </div>
    );
  }
}

export default UserClass;
