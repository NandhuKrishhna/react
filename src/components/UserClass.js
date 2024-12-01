
import React from "react"
class UserClass extends React.Component{

  constructor(props){
   super(props)
   console.log(props)

   this.state = {
    count : 0,
    count2 : 0

   }
  //  console.log(this.props.name,"Child constructor")
  }

  componentDidMount(){
    // console.log(this.props.name,"Child component did mount")
  }
  render() {
    const { userInfo } = this.props;

    // debugger; 
    return (
      <div className="user-card">
        <img src={userInfo.image} alt="User" />
        <h2>{userInfo.firstName} {userInfo.lastName}</h2>
        <p>Age: {userInfo.age}</p>
        <p>BirthData : {userInfo.birthDate}</p>
        <p>Gender : {userInfo.gender}</p>
        <p>Phone: {userInfo.phone}</p>
        <p></p>
        {/* Render other user details */}
      </div>
    );
  }
}
export default UserClass
