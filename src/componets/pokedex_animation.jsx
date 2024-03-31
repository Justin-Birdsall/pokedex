import { useState, useEffect } from 'react';

function Pokedex() {
  const [openPokedex, setOpenPokedex] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenPokedex(false);
    }, 500); // Display Pokedex after 0.5 seconds
  }, []);

  const toggleOpenPokedex = () => {
    setOpenPokedex(!openPokedex);
  };

  return (
    <div>
      {!openPokedex && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-pokemonRed z-20">
          <img
            src="pokedex-upper.png"
            alt="Pokedex"
            onClick={toggleOpenPokedex}
            className="cursor-pointer"
          />
          <img
            src="pokedex-lower.png"
            alt="Pokedex"
            onClick={toggleOpenPokedex}
            className="cursor-pointer"
          />
          <p className="text-white">Tap to open Pokedex</p>
        </div>
      )}
      {openPokedex && (
        <div className="fixed inset-0 bg-pokemonRed z-0"></div>
      )}
    </div>
  );
}

export default Pokedex;
