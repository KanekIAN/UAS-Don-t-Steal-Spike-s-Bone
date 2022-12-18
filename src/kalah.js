import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Awakedog from './image/dog-awake.png'
import Themesong from './audio/C418 - Dog.mp3'
import Starttheme from './image/play-button.png'
import Stoptheme from './image/pause.png'
import './kalah.css'
import fail from './audio/Fail-sfx.mp3';

let sfx = new Audio(fail)



function Kalah (){
    
    const location = useLocation();

    const navigate = useNavigate();

    const[Theme, setTheme] = useState(Starttheme);

    console.log(location.state.players)

    const playAgain = () => {
        sfx.pause()
        navigate('/main', {state : {players : location.state.players, idkalah : 0, bg : backgroundImage, code : code}});
    }

    const backtoHome = () => {
        sfx.pause()
        navigate('/');
    }

    sfx.play()

    let code = location.state.code
    let backgroundImage = location.state.backgnd

    console.log(location.state.code)
    console.log("coba")
    console.log(location.state.backgnd)

    return(
            <div className={(
                (backgroundImage === 'Clear') 
                ? 'bg-sunny' 
                : (backgroundImage == 'Rain') 
                    ? 'bg-rain' 
                    : (backgroundImage === 'Thunderstorm') 
                        ? 'bg-thunder' 
                        : (backgroundImage === 'Drizzle') 
                            ? 'bg-drizzle' 
                            : (backgroundImage === 'Clouds') 
                                ? 'bg-cloudy' 
                                : (backgroundImage === 'Mist')
                                    ? 'bg-mist'
                                    : (backgroundImage === 'Haze')
                                        ? 'bg-mist' 
                                        : 'bg-sunny')}>
                <br></br>
                <div className={"row"}>
                    <div className={"row col-4"}>
                        <div className={"col-4"}> </div>
                        <div className={"col-8"}>
                            <Link to="/">
                                <button type="button"className='btn btn-outline-success' >
                                    Back
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={"row col-4"}>
                        <h1 className="mb-3">Don't Take Spike's Bones</h1>
                        <img className={" mx-auto imageDog"} src={location.state.dog}/>
                    </div>
                    <div className={"row col-4"}>
                        <div className={"row"}>
                            <div className={"col-12"}>
                                <img className={"mx-auto imageWeather"} src={`http://openweathermap.org/img/wn/${code}@2x.png`} alt='image'/>
                            </div>
                            <div className={"col-12"}>
                                <button type="button"className='btn btn-outline-success weatherButton'>
                                        Update Weather
                                </button>
                            </div>
                        </div>
                    </div>   
                </div>
                <hr/>
                <br></br>
                <div className='row'>
                    <div className='row col-4'>
                        <div className='col-4'> </div>
                        <div className='col-8'>
                            <div className='Textbox'>
                                <p>Turns : {location.state.player}</p>
                                <p>Times: 00:00</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-4'> 
                        <div className=''>
                            <div className='mt-5 mr-3 tulang'>
                                <button className='btn btn-outline-primary bonebutton'>
                                </button>
                                <button className='btn btn-outline-primary bonebutton'>
                                </button>
                                <button className='btn btn-outline-primary bonebutton'>
                                </button>
                                <button className='btn btn-outline-primary bonebutton'>
                                </button>
                            </div>
                            <div className='mt-5 foto'>
                                <div className='d-grid mb-3'>
                                    <button className='btn btn-outline-primary bonebutton'>
                                    </button>
                                    <button className='btn btn-outline-primary bonebutton'>
                                    </button>
                                    <button className='btn btn-outline-primary bonebutton'>
                                    </button>
                                    <button className='btn btn-outline-primary bonebutton'>
                                    </button>
                                </div>
                                <img src={Awakedog} className="img-fluid mx-auto d-block mt-5 doggy"/>
                                <div className='d-grid mb-3'>
                                    <button className='btn btn-outline-primary bonebutton'>
                                    </button>
                                    <button className='btn btn-outline-primary bonebutton'>
                                    </button>
                                    <button className='btn btn-outline-primary bonebutton'>
                                    </button>
                                    <button className='btn btn-outline-primary bonebutton'>
                                    </button>
                                </div>
                            </div>
                            <div className='mt-5 mr-3 tulang'>
                                <button className='btn btn-outline-primary bonebutton'>
                                </button>
                                <button className='btn btn-outline-primary bonebutton'>
                                </button>
                                <button className='btn btn-outline-primary bonebutton'>
                                </button>                                    
                                <button className='btn btn-outline-primary bonebutton'>
                                </button>
                            </div>
                        </div>
                    </div>
                
                </div>
                <br></br>
                <div className='row'>
                    <div className='col-4'> </div>
                    <div className='col-4'>
                        <button className='col-5 btn btn-outline-success buttonBawah' onClick={playAgain}>
                            Play Again
                        </button>
                        <button className='col-5 btn btn-outline-success buttonBawah' onClick={backtoHome}>
                            Back to Home
                        </button>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
    )
}

export default Kalah;