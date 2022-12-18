import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

let nextId = 0;

function App() {

    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [players, setPlayers] = useState([]);

    const [dogs, setDog] = useState('https://images.dog.ceo/breeds/dhole/n02115913_4188.jpg');

    const fetchDogs = async () => {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await res.json();
        return data;
    };

    const handleGetDogs = async () => {
        const dogsFromServer = await fetchDogs();
        setDog(dogsFromServer.message);
        console.log(dogsFromServer.message)
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(players)
        if(players.length === 0){
            alert("you need atleast 1 player to play")
        }
        else{
            navigate('/main', {state : {players : players}});
        }
        
    }

    const PlayerHandler = () => {
        if(name === ''){
            alert("please input your name")
        }
        else{
            setName('');
            setPlayers([...players,{ id: nextId++, name: name, dog: dogs }]);
        }  
    }

    return (
        <div className="container col-12">
            <h1 className="mb-3">Don't Take Spike's Bones</h1>
            <hr/>
            <div>
                <div className=''>
                    <img className={" mx-auto d-block imageDog"} src={dogs}/>
                    <button className={"btn btn-outline-success buttonCenter"} onClick={handleGetDogs} >Next Dog</button>
                </div>

                <hr/>
        
                <div id = "inputPeserta">
                    <div id = "button">
                        <h1>- Player -</h1>
                        <input className="form-control text-center mb-4" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                        <button className='btn btn-outline-success' onClick={PlayerHandler}>Add Player</button>
                        <br></br>
                        <br></br>
                        <form onSubmit={handleSubmit}>
                            <input className='btn btn-outline-success' type="submit" value="Play"/>
                        </form>
                        <br></br>
                        <h4 className="mb-3 text-center"><b>List Player: </b></h4>
                        <div className="text-center">
                        <ul className={"textCenter"}>
                            {players.map(player => (
                            <li key={player.id}>{player.name}</li>
                            ))}
                        </ul>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    
  );
}

export default App;