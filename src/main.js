import './main.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import bonecrackAudio from './audio/Bone-crack-sfx.mp3'
import bone from './image/bone.png'
import hoverBone from './audio/Heart-beat-sfx.mp3'
import Sleepdog from './image/dog-sleep.png'
import Themesong from './audio/C418 - Dog.mp3'
import Starttheme from './image/play-button.png'
import Stoptheme from './image/pause.png'

let idKalah = Math.floor((Math.random() * 16) + 1);
let i = 0;
let song = new Audio(Themesong)
let codeicon
let bg 

function Main() {

    const [code, setCode] = useState('01d')
    const [backgroundImage, setBackgroundImage] = useState("")

    const fetchWeather = async () => {
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-6.256595272216005&lon=106.61843082433595&appid=b8078688a43e3f4278bcc5cade8a4d50');
        const data = await res.json();
        console.log(data.weather[0].icon)
        console.log(data.weather[0].main)

        return data;
    };
    
    const WeatherHandler = async () => {
        const CurrWeather = await fetchWeather();
        setCode(CurrWeather.weather[0].icon)
        codeicon = CurrWeather.weather[0].icon
        setBackgroundImage(CurrWeather.weather[0].main)
        bg = CurrWeather.weather[0].main
        console.log(code)
        console.log(backgroundImage)
    }

    const Ref = useRef(null);

	const [timer, setTimer] = useState('00:00:00');


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		return {
			total, minutes, seconds
		};
	}

	const startTimer = (e) => {
		let { total, minutes, seconds }
					= getTimeRemaining(e);
        if(total === 0){
            console.log("habis")
            setIsPlaying(false)
            navigate('/kalah', {state : {player : Player, dog : Dog, players : location.state.players, backgnd : bg, code : codeicon}});
        }
		if (total >= 0) {
			setTimer(
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}

	const clearTimer = (e) => {

		setTimer('00:15');

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();
		deadline.setSeconds(deadline.getSeconds() + 15);
		return deadline;
	}

    const getEndTime = () => {
		let deadline = new Date();
		deadline.setSeconds(deadline.getSeconds() + 2000);
		return deadline;
	}

	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	const onClickReset = () => {
		clearTimer(getDeadTime());
	}

    const navigate = useNavigate();

    const location = useLocation();

    if(location.state.idkalah === 0){
        idKalah = Math.floor((Math.random() * 16) + 1);
        setBackgroundImage(location.state.bg)
        setCode(location.state.code)
        location.state.idkalah = 1
    }

    const [bone1, setBone1] = useState(bone)
    const [bone2, setBone2] = useState(bone)
    const [bone3, setBone3] = useState(bone)
    const [bone4, setBone4] = useState(bone)
    const [bone5, setBone5] = useState(bone)
    const [bone6, setBone6] = useState(bone)
    const [bone7, setBone7] = useState(bone)
    const [bone8, setBone8] = useState(bone)
    const [bone9, setBone9] = useState(bone)
    const [bone10, setBone10] = useState(bone)
    const [bone11, setBone11] = useState(bone)
    const [bone12, setBone12] = useState(bone)
    const [bone13, setBone13] = useState(bone)
    const [bone14, setBone14] = useState(bone)
    const [bone15, setBone15] = useState(bone)
    const [bone16, setBone16] = useState(bone)

    const[Player, setPlayer] = useState(location.state.players[i].name);
    const[Dog, setDog] = useState(location.state.players[i].dog);
    const[Theme, setTheme] = useState(Starttheme);

    const NextPlayerandCekKalah = (id) => {

        if(id === idKalah){
            setIsPlaying(false)
            clearTimer(getEndTime());
            navigate('/kalah', {state : {player : Player, dog : Dog, players : location.state.players, backgnd : bg, code : codeicon}});
        }
        else{
            if(i === location.state.players.length-1){
                i = 0
            }
            else{
                i++
            }
            
            let player = location.state.players[i].name;
            let dog = location.state.players[i].dog;
            setPlayer(player)
            setDog(dog)
        }

        
    }

    const bonecrackSound = () => {
        let boneCrack = new Audio(bonecrackAudio)
        boneCrack.play();
    }

    const [hover] = useState( typeof Audio !== "undefined" && new Audio(hoverBone)); 
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        isPlaying ? hover.play() : hover.pause();
      }, [isPlaying]);

    const hoverSound = () => {
        setIsPlaying(true)
    }

    const stopHover = () => {
        setIsPlaying(false)
    }

    const themeSound = () => {
        if(Theme == Starttheme){
            song.play();
            setTheme(Stoptheme)
        }
        else{
            song.pause();
            setTheme(Starttheme)
        }
    }

    const home = () => {
        clearTimer(getEndTime());
        setIsPlaying(false)
        song.pause();
        navigate('/')
    }

        return (
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
                            <button type="button"className='btn btn-outline-success' onClick={home} >
                                 Back
                            </button>
                        </div>
                    </div>
                    <div className={"row col-4"}>
                        <h1 className="mb-3">Don't Take Spike's Bones</h1>
                        <img className={" mx-auto imageDog"} src={Dog}/>
                    </div>
                    <div className={"row col-4"}>
                        <div className={"row"}>
                            <div className={"col-12"}>
                                <img className={"mx-auto imageWeather"} src={`http://openweathermap.org/img/wn/${code}@2x.png`} alt='image'/>
                            </div>
                            <div className={"col-12"}>
                                <button type="button"className='btn btn-outline-success weatherButton' onClick={WeatherHandler}>
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
                        <div className='col-8 player'>
                            <div className='Textboxmain'> 
                                <p>Turns : {Player}</p>
                                <p>Times: {timer}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-4 box'> 
                        <div className=''>
                            <div className='mt-5 mr-3 tulang'>
                                <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                    <img src={bone1} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone1('');hover.pause();NextPlayerandCekKalah(1);onClickReset();}}/>
                                </button>
                                <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                    <img src={bone2} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone2('');hover.pause();NextPlayerandCekKalah(2);onClickReset();}}/>
                                </button>
                                <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                    <img src={bone3} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone3('');hover.pause();NextPlayerandCekKalah(3);onClickReset();}}/>
                                </button>
                                <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                    <img src={bone4} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone4('');hover.pause();NextPlayerandCekKalah(4);onClickReset();}}/>
                                </button>
                            </div>
                            <div className='mt-5 foto'>
                                <div className='d-grid mb-3'>
                                    <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                        <img src={bone5} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone5('');hover.pause();NextPlayerandCekKalah(5);onClickReset();}}/>
                                    </button>
                                    <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                        <img src={bone6} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone6('');hover.pause();NextPlayerandCekKalah(6);onClickReset();}}/>
                                    </button>
                                    <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                        <img src={bone7} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone7('');hover.pause();NextPlayerandCekKalah(7);onClickReset();}}/>
                                    </button>
                                    <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                        <img src={bone8} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone8('');hover.pause();NextPlayerandCekKalah(8);onClickReset();}}/>
                                    </button>
                                </div>
                                <img src={Sleepdog} className="img-fluid mx-auto d-block mt-5 doggy"/>
                                <div className='d-grid'>
                                    <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                        <img src={bone9} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone9('');hover.pause();NextPlayerandCekKalah(9);onClickReset();}}/>
                                    </button>
                                    <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                        <img src={bone10} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone10('');hover.pause();NextPlayerandCekKalah(10);onClickReset();}}/>
                                    </button>
                                    <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                        <img src={bone11} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone11('');hover.pause();NextPlayerandCekKalah(11);onClickReset();}}/>
                                    </button>
                                    <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                        <img src={bone12} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone12('');hover.pause();NextPlayerandCekKalah(12);onClickReset();}}/>
                                    </button>
                                </div>
                            </div>
                            <div className='mt-5 mr-3 tulang'>
                                <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                    <img src={bone13} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone13('');hover.pause();NextPlayerandCekKalah(13);onClickReset();}}/>
                                </button>
                                <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                    <img src={bone14} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone14('');hover.pause();NextPlayerandCekKalah(14);onClickReset();}}/>
                                </button>
                                <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                    <img src={bone15} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone15('');hover.pause();NextPlayerandCekKalah(15);onClickReset();}}/>
                                </button>                                    
                                <button className='btn btn-outline-primary bonebutton' onClick={bonecrackSound}>
                                    <img src={bone16} className="boneImg" onMouseOver={hoverSound} onMouseOut={stopHover} onClick={() => {setBone16('');hover.pause();NextPlayerandCekKalah(16);onClickReset();}}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 row'>
                        <div className='col-4'> </div>
                        <div className='col-4'>
                            <button onClick={themeSound} className="">
                            <input type="image" src={Theme} width="48" height="48"/>
                            </button>
                        </div>
                        
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }

export default Main;
