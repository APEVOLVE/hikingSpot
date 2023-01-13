import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';

import { AccountsContext } from './AccountsContext';

const backDropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "28%",
        tranform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30
}

const Accounts = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playTransitionAnimation = () => {
        setExpanded(true);

        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    }

    const switchToSignUp = () => {
        playTransitionAnimation();

        setTimeout(() => {
            setActive("signup");
        }, 400)
    }

    const switchToSignIn = () => {
        playTransitionAnimation();

        setTimeout(() => {
            setActive("signin");
        }, 400)
    }

    const contextValue = { switchToSignUp, switchToSignIn };

    return (
        <AccountsContext.Provider value={contextValue}>
            <div className='accountsContainer'>
                <div className='container'>
                    <div className='topContainer'>
                        <motion.div className='backDrop' initial={false}
                            animate={isExpanded ? "expanded" : "collapsed"} variants={backDropVariants}
                            transition={expandingTransition} >

                        </motion.div>
                        {active === "signin" && (
                            <div className="header">
                                <h2>Welcome</h2>
                                <h2>Back</h2>
                                <h5>Sign in to continue</h5>
                            </div>
                        )}
                        {active === "signup" && (
                            <div className="header">
                                <h2>Create</h2>
                                <h2>Account</h2>
                                <h5>Sign up to start hiking</h5>
                            </div>
                        )}
                    </div>
                    <div className="innerContainer">
                        {active === "signin" && <Login />}
                        {active === "signup" && <Signup />}
                    </div>
                </div>
            </div>
        </AccountsContext.Provider>
    );
}

export default Accounts;