import Player from './components/Player.jsx';
import { useState, useRef } from 'react';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {

  const [playerName, setPlayerName] = useState('');
  const player = useRef(); // using ref for input

  const handleClick = () => {
    setPlayerName(player.current.value); // targetting the value of input
  }

  return (
    <>
      <Player player={player} handleClick={handleClick} playerName={playerName}/> 
      {/* sending props to children --> Player*/}
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={5} />
        <TimerChallenge title="not so easy" targetTime={10} />
        <TimerChallenge title="getting tough" targetTime={15} />
        <TimerChallenge title="pros only" targetTime={20} />
      </div>
    </>
  );
}

export default App;
