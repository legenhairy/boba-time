import React from 'react';

const Signup = () => {
  

  const handleSubmit = async event => {
  	event.preventDefault();

  	console.log('this submit button has been pressed')
  }

  return (
  	<div className='sign-up'>
  	  <h2>Already have an account?</h2>	
  	  <span>Sign in with your email and password.</span>		
  	
  	  <form onClick={this.handleSubmit}>
  	  	<input name="email" type="email" required />
  	  	<label>Email</label>
  	  	<input name="password" type="password" required />
  	  	<label>Password</label>

  	  	<input type='submit' value='Submit Form' />
  	  </form>
  	</div>
  )
}

export default Signup;