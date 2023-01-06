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
                    <div className='card fl-left'>
                                <section className="date">
                                    <time datetime="23th feb">
                                        <span>23</span><span>feb</span>
                                    </time>
                                </section>
                                <section className="card-cont">
                                    
                                </section>
                            </div>

                            <div className='card fl-left'>
                                <section className="date">
                                    <time datetime="23th feb">
                                        <span>23</span><span>feb</span>
                                    </time>
                                </section>
                                <section className="card-cont">
                                    <small>dj music event</small>
                                    <h3>live in sydney</h3>
                                    <div className="even-date">
                                        <i className="fa fa-calendar"></i>
                                        <time>
                                            <span>wednesday 28 december 2014</span>
                                            <span>08:55pm to 12:00 am</span>
                                        </time>
                                    </div>
                                    <div className="even-info">
                                        <i className="fa fa-map-marker"></i>
                                        <p>
                                            nexen square for people australia, sydney
                                        </p>
                                    </div>
                                    <a href="#">tickets</a>
                                </section>
                            </div>

                            <div className='card fl-left'>
                                <section className="date">
                                    <time datetime="23th feb">
                                        <span>23</span><span>feb</span>
                                    </time>
                                </section>
                                <section className="card-cont">
                                    <small>dj music event</small>
                                    <h3>live in sydney</h3>
                                    <div className="even-date">
                                        <i className="fa fa-calendar"></i>
                                        <time>
                                            <span>wednesday 28 december 2014</span>
                                            <span>08:55pm to 12:00 am</span>
                                        </time>
                                    </div>
                                    <div className="even-info">
                                        <i className="fa fa-map-marker"></i>
                                        <p>
                                            nexen square for people australia, sydney
                                        </p>
                                    </div>
                                    <a href="#">tickets</a>
                                </section>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;