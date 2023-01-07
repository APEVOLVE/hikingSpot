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
                            <span>Person(s)</span>
                            <ion-icon name="people-sharp"></ion-icon>
                        </div>
                        <div className="inputBx">
                            <input type="text" required="required" />
                            <span>Select Date</span>
                            <ion-icon name="calendar-sharp"></ion-icon>
                        </div>
                    </div>
                    <div className='trips'>
                        <div className="trip">
                            <div className="card card-top">
                                <div className="source">
                                    <div className="code">JHB</div>
                                    <div className="city">Johannesburg</div>
                                </div>
                                <div className='flight-median'><ion-icon name="car"></ion-icon></div>
                                <div className="destination">
                                    <div className="code">PLK</div>
                                    <div className="city">Polokwane</div>
                                </div>
                            </div>
                            <div className='median'></div>
                            <div className="card card-bottom">
                                <div className="card-row">
                                    <div className='card-item'>
                                        <span className='label'>Date</span>
                                        <p className='content'>14 Feb 2023</p>
                                    </div>
                                    <div className='card-item'>
                                        <span className='label'>Pickup</span>
                                        <p className='content'>13:00-14:00</p>
                                    </div>
                                    <div className='card-item'>
                                        <span className='label'>Seats</span>
                                        <p className='content'>4</p>
                                    </div>
                                    <div className='card-item'>
                                        <span className='label'>Price</span>
                                        <p className='content'>R550</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trip">
                            <div className="card card-top">
                                <div className="source">
                                    <div className="code">JHB</div>
                                    <div className="city">Johannesburg</div>
                                </div>
                                <div className='flight-median'><ion-icon name="car"></ion-icon></div>
                                <div className="destination">
                                    <div className="code">PLK</div>
                                    <div className="city">Polokwane</div>
                                </div>
                            </div>
                            <div className='median'></div>
                            <div className="card card-bottom">
                                <div className="card-row">
                                    <div className='card-item'>
                                        <span className='label'>Date</span>
                                        <p className='content'>14 Feb 2023</p>
                                    </div>
                                    <div className='card-item'>
                                        <span className='label'>Pickup</span>
                                        <p className='content'>13:00-14:00</p>
                                    </div>
                                    <div className='card-item'>
                                        <span className='label'>Seats</span>
                                        <p className='content'>4</p>
                                    </div>
                                    <div className='card-item'>
                                        <span className='label'>Price</span>
                                        <p className='content'>R550</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trip">
                            <div className="card card-top">
                                <div className="source">
                                    <div className="code">JHB</div>
                                    <div className="city">Johannesburg</div>
                                </div>
                                <div className='flight-median'><ion-icon name="car"></ion-icon></div>
                                <div className="destination">
                                    <div className="code">PLK</div>
                                    <div className="city">Polokwane</div>
                                </div>
                            </div>
                            <div className='median'></div>
                            <div className="card card-bottom">
                                <div className="card-row">
                                    <div className='card-item'>
                                        <span className='label'>Date</span>
                                        <p className='content'>14 Feb 2023</p>
                                    </div>
                                    <div className='card-item'>
                                        <span className='label'>Pickup</span>
                                        <p className='content'>13:00-14:00</p>
                                    </div>
                                    <div className='card-item'>
                                        <span className='label'>Seats</span>
                                        <p className='content'>4</p>
                                    </div>
                                    <div className='card-item'>
                                        <span className='label'>Price</span>
                                        <p className='content'>R550</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trip">
                            <div className="card card-top">
                                <div className="source">
                                    <div className="code">JHB</div>
                                    <div className="city">Johannesburg</div>
                                </div>
                                <div className='flight-median'><ion-icon name="car"></ion-icon></div>
                                <div className="destination">
                                    <div className="code">PLK</div>
                                    <div className="city">Polokwane</div>
                                </div>
                            </div>
                            <div className='median'></div>
                            <div className="card card-bottom">
                                <div className="card-row">
                                    <div className='card-item'>
                                        <span className='label'>Date</span>
                                        <p className='content'>14 Feb 2023</p>
                                    </div>
                                    <div className='card-item'>
                                        <span className='label'>Pickup</span>
                                        <p className='content'>13:00-14:00</p>
                                    </div>
                                    <div className='card-item'>
                                        <span className='label'>Seats</span>
                                        <p className='content'>4</p>
                                    </div>
                                    <div className='card-item'>
                                        <span className='label'>Price</span>
                                        <p className='content'>R550</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;