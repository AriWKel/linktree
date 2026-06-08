import blue_button_light from './assets/blue_button_light.svg'
import blue_button_dark from './assets/blue_button_dark.svg'
import purple_button_light from './assets/purple_button_light.svg'
import purple_button_dark from './assets/purple_button_dark.svg'
import dark_button from './assets/dark_button.svg'
import light_button from './assets/light_button.svg'
import picture_light from './assets/picture_light.svg'
import picture_dark from './assets/picture_dark.svg'
import './App.css'
import { React, useEffect } from 'react'

//retrieves light/dark mode from local storage
let mode = localStorage.getItem('mode')

function checkMode(){
    if (mode === 'dark'){
        darkMode()
    } else {
        lightMode()
    }
}

function darkMode(){
    document.body.classList.add('dark_mode')
    localStorage.setItem('mode', 'dark')
}

function lightMode(){
    document.body.classList.remove('dark_mode')
    localStorage.setItem('mode', 'light')
}

function App() {

    //calls checkMode when element is loaded i.e. whenever page is loaded
    useEffect (() => {
        checkMode();
    }, []);

    return (
        <body>
            <div className="top_section">
                <div id="dual_asset">
                    <img src={picture_light}>
                    </img>
                    <img src={picture_dark}>
                    </img>
                </div>
                <div id="dual_asset">
                    <img src={light_button} onClick={darkMode}>
                    </img>
                    <img src={dark_button} onClick={lightMode}>
                    </img>
                </div>
            </div>
            <div className="text_section">
                <h1 className='bio_text'>
                    Hi, im Ari <br></br>
                    Software Engineer/CS Student
                </h1>
            </div>
            <div className="button_section">
                <a href="http://www.linkedin.com/in/ari-kelley-bb77183b0" target='_blank'>
                    <button className='link_button'>
                        Linkedin
                    </button>
                </a>
                {/* need to make portfolio site */}
                <a href="http://www.linkedin.com/in/ari-kelley-bb77183b0" target='_blank'>
                    <button className='link_button'>
                        Portfolio
                    </button>
                </a>
                {/* //need to make resume site */}
                <a href="http://www.linkedin.com/in/ari-kelley-bb77183b0" target='_blank'>
                    <button className='link_button'>
                        Resume
                    </button>
                </a>
                <a href="https://github.com/AriWKel" target='_blank'>
                    <button className='link_button'>
                        Github
                    </button>
                </a>
            </div>
        </body>
    )
}

export default App