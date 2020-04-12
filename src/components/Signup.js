import React from "react";
// import "./Signup.css";

class Signup extends React.Component {
  state = {
    userName: "",
    email: "",
    password: "",
    password2: "",
    message:'',
    message2:''

  };
  inputHandle = e => {
 
        this.setState({
          [e.target.id]:e.target.value
        })
     
  };
  submitHandle = async (e) => { 
    e.preventDefault()
    const password = this.state.password
    const password2 = this.state.password2
    const msg ='password does not match'
    const msg2 ='profile created'

if (password !== password2) {
this.setState({
  message:msg
})
  return console.log(msg);
  
}

this.setState({
  message:''
})
await fetch('http://localhost:5000/users/signup',{
  method:'post',
  body:JSON.stringify(this.state),
  headers:{"Content-Type":"application/json"}
})
.then(user => user.json())//remember this returns so the next then() can work
.then(json => {
  this.setState({
    message2:msg2
  })
  console.log(json)
  this.setState({
    userName: "",
    email: "",
    password: "",
    password2: "",
    message:'',
    message2:''
  })
}).catch(err => {
  console.error(err)
});

  };

  render() {
    return (
      <div className="Signup">
        <p>Fill in your details to signup</p>
    <p>{this.state.message}</p>
    <p>{this.state.message2}</p>


        <form onSubmit={this.submitHandle}>
          <div className='formInputs'>
          <label htmlFor="userName">userName:</label>

            <input
            placeholder='userName'
              type="text"
              id="userName"
              name="userName"
              value={this.state.userName}
              onChange={this.inputHandle}
            />

            <label htmlFor="email">Email:</label>

            <input
            placeholder='Email'
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.inputHandle}
            />
            <label htmlFor="password">Password:</label>
            <input
            placeholder='Password'
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.inputHandle}
            />

            <label htmlFor="password2">Password2:</label>
            <input
            placeholder='Password'
              type="password"
              id="password2"
              name="password2"
              value={this.state.password2}
              onChange={this.inputHandle}
            />


           
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
