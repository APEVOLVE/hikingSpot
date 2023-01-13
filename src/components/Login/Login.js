import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccountsContext } from '../Accounts/AccountsContext';

const Login = () => {

    const { switchToSignUp } = useContext(AccountsContext);

    return (
        <div className='formContainer'>
            <form>
                <input type="email" placeHolder="Email" />
                <input type="password" placeholder='Password' />
            </form>
            <span className="verticalMargin"></span>
            <Link className="mutedLink">Forgot your password?</Link>
            <span className="verticalMarginOne"></span>
            <button type="submit">Signin</button>
            <span className="verticalMarginTwo"></span>
            <Link className="mutedLink">Don't have an account?<Link className='boldLink' onClick={switchToSignUp}>Signup</Link></Link>
            <span className="verticalMarginTwo"></span>
            <Link className="boldLink">Become a hikingSpot driver</Link>
        </div>
    );
};

export default Login;