export default function Player({playerName, handleClick, player}) {
  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown entity'} </h2>
      <p>
        <input ref={player} type="text" />
        {/* used ref attribute for ref  */}
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
