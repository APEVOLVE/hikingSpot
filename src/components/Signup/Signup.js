import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccountsContext } from '../Accounts/AccountsContext';

const Signup = () => {

    const { switchToSignIn } = useContext(AccountsContext);

    return (
        <div className='formContainer'>
            <form>
                <input type="email" placeHolder="Email" />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
            </form>
            <span className="verticalMarginOne"></span>
            <button type="submit">Signup</button>
            <span className="verticalMarginTwo"></span>
            <Link className="mutedLink">Have an account? <Link className='boldLink' onClick={switchToSignIn}>Signin</Link></Link>
            <span className="verticalMarginTwo"></span>
            <Link className="boldLink">Become a hikingSpot driver</Link>
        </div>
    );
}

export default Signup;