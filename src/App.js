import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import './styles/App.css';

import { getTrips } from './actions/trips';

import Trips from './components/Trips/Trips';
import Accounts from './components/Accounts/Accounts';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrips());
    }, [dispatch]);

    const menuToggleClick = event => {
        let menuToggle = document.querySelector('.menuToggle');
        let navigation = document.querySelector('.navigation');

        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    }

    return (
        <BrowserRouter>
            <div>
                <header>
                    <NavLink className="logo" to="/">hikingSpot</NavLink>
                    <div className="group">
                        <ul className="navigation" onClick={menuToggleClick}>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="reviews">Reviews</NavLink></li>
                            <li><NavLink to="about">About</NavLink></li>
                            <li><NavLink to="contact">Contact</NavLink></li>
                        </ul>
                        <ul className="action">
                            <li><NavLink to="accounts"><ion-icon name="person-outline"></ion-icon></NavLink></li>
                            <div className="menuToggle" onClick={menuToggleClick}>
                                <ion-icon name="menu-outline"></ion-icon>
                                <ion-icon name="close-outline"></ion-icon>
                            </div>
                        </ul>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<Trips />}></Route>
                    <Route path="hikingSpot" element={<Trips />}></Route>
                    <Route path="accounts" element={<Accounts />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;