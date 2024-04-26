import React from 'react'

const Sinup = () => {
  return (
    <div>
        <div className="form-box-register">
<h2>Registration</h2>git 

<form action="#">
    <div className="input-box">
        <span className="icon">
            <img  alt="" className='input-image' height={25} width={25} />
        </span>
        <input type="text" required />
        <label>Username</label>
    </div>
    <div className="input-box">
        <span className="icon">
            <img s alt="" className='input-image' height={25} width={25} />
        </span>
        <input type="email" required />
        <label>Email</label>
    </div>
    <div className="input-box">
        <span className="icon">
            <img  alt="" className='input-image' height={25} width={25} />
        </span>
        <input type="password" required />
        <label>Password</label>
    </div>
    <div className="conditions">
        <label><input type="checkbox" />
           I agree to all the terms & conditions </label>
        
    </div>
    <button type="submit" className="btn">Login</button>
    <div className="login-register">
        <p>Already have an account?<a href="#" className="login-link" >Log in</a></p> 
    </div>
</form>
</div>

    </div>
  )
}

export default Sinup