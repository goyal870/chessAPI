import {useRef} from 'react';
import axios from 'axios';
import { useState } from 'react';
import './stats.css';

const Stats = () => {
    const [best,setBest]=useState("");
    const inputRef = useRef(null);
function handleClick() {
    const input1 = inputRef.current.value;
    console.log(input1);
    axios.get(`https://api.chess.com/pub/player/${input1}/stats`)
      .then((response) => {
        console.log(response.data.chess_blitz.best)
        setBest(response.data.chess_blitz.best)
      });
}

return (
    <div className='playerstats'>
      <div className='ss'><u>Statistics</u></div><br /><br />
      <button onClick={handleClick}><h5>Name</h5></button>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />
      <br />
      <br />
      <h7>Puzzle-Rush&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{best.rating}</h7>
    </div>
);
}
export default Stats;