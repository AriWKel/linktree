// import blue_button_light from './assets/blue_button_light.svg'
// import blue_button_dark from './assets/blue_button_dark.svg'
// import purple_button_light from './assets/purple_button_light.svg'
// import purple_button_dark from './assets/purple_button_dark.svg'
// import dark_button from './assets/dark_button.svg'
import light_button from './assets/light_button.svg'
import picture_light from './assets/picture_light.svg'
// import picture_dark from './assets/picture_dark.svg'
import './vars.css'
import './App.css'
import React from 'react'

function App() {
    return (
        <body className="main_section">
            <div className="top_section">
                <img src={picture_light}>
                </img>
                <img src={light_button}>
                </img>
            </div>
            <div className="text_section">
                <h1 cstyle={{color: '--base02'}}>
                    Hi, im Ari
                </h1>
            </div>
            <div className="button_section">
                
            </div>
        </body>
    )
}

export default App