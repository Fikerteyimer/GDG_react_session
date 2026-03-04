function UserGreeting(props){
  if(props.isLoggedIn){
    return <h2 className="welcome-message">welcome {props.name}</h2>
  }else{
    return <h2 className="login-message">please login {props.name}</h2>
  }
}
export default UserGreeting