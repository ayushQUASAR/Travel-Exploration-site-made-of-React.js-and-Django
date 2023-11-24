import React from 'react'
import "../src/style/auth.css"
import { Icon } from '@iconify/react';

 function Login  ({set})  {
    return (

        <>  
         <div className="log-wrapper"></div>
          <div className="main-box">
            <div className='bg-box'>
                <div className="layer-box">

                    <div>SAFAR</div>
                </div>
            </div>
            <div className="right-box">
              <div className="cross-btn" onClick={set}>
              <Icon icon="icon-park-outline:red-cross" color="#e49b45"  width="50" />
              </div>
                <div className="auth-box">
                    <h2>Sign In</h2>
                    <h4>Sign in to your account</h4>
                    <div className="sign-option">
                        <div className="op"><Icon height="19" icon="flat-color-icons:google" /> <div>SignIn with Google</div></div>
                        <div className="op opright"><Icon height="19" icon="jam:apple" color="silver" /><div>SignIn with Apple</div></div>
                    </div>
                    <div className="details">
                        <div className="email">
                            <h3>Email address</h3>
                            <div className='inputf'>
                            <input type="email" name="email" id="" />
                            </div>
                           
                            <h3>Password</h3>
                            <div className="inputf">
                            <input type="password" name="password" id="" />
                            </div>
                            <h3 style={{color:' #346BD4'}}>Forgot password?</h3>
                            <button className="auths-btn">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Login;