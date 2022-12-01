import React from 'react';

import './styles/App.css';

const App = () => {

    const menuToggleClick = event => {
        let menuToggle = document.querySelector('.menuToggle');
        let navigation = document.querySelector('.navigation');

        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    }

    return (
        <div>
            <header>
                <a href="#" className="logo">hikingSpot</a>
                <div className="group">
                    <ul className="navigation" onClick={menuToggleClick}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul className="action">
                        <li><a href="#"><ion-icon name="person-outline"></ion-icon></a></li>
                        <div className="menuToggle" onClick={menuToggleClick}>
                            <ion-icon name="menu-outline"></ion-icon>
                            <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </ul>
                </div>
            </header>
            <div className='banner'>
                <div className='bg'>
                    <div className="searchBox">
                        <div className="inputBx">
                            <input type="text" required="required" />
                            <span>Departure</span>
                            <ion-icon name="location-sharp"></ion-icon>
                        </div>
                        <div className="inputBx">
                            <input type="text" required="required" />
                            <span>Destination</span>
                            <ion-icon name="paper-plane"></ion-icon>
                        </div>
                        <div className="inputBx">
                            <input type="text" required="required" />
                            <span>1 Adult</span>
                            <ion-icon name="people-sharp"></ion-icon>
                        </div>
                        <div className="inputBx">
                            <input type="text" required="required" />
                            <span>Select Date</span>
                            <ion-icon name="calendar-sharp"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;