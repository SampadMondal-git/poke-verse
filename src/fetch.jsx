import React, { useState } from 'react';
import Result from './result.jsx';
import Loader from './loader.jsx';
import './fetch.css';

export default function Fetch() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        const name = pokemonName.toLowerCase();
        setLoading(true);

        if (!name) {
            setErrorMessage(
                <>
                    Please enter a Pokémon name.
                    <div className="button">
                        <button onClick={() => window.location.reload()}>Enter Pokémon Name</button>
                    </div>
                </>
            );
            setPokemonData(null);
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

            if (!response.ok) {
                throw new Error('Could not fetch data');
            }

            const data = await response.json();
            setPokemonData(data);
            setErrorMessage('');
        } catch (error) {
            console.log(error);
            setPokemonData(null);
            setErrorMessage(
                <>
                    Could not fetch Pokémon data.<br />
                    Please enter another Pokémon name.
                    <div className="button">
                        <button onClick={() => window.location.reload()}>Find another pokémon</button>
                    </div>
                </>
            );
        } finally {
            setLoading(false);
        }

        const display = document.querySelector('.text-box');
        display.style.display = 'none';
    }

    return (
        <>
            <div className="text-box">
                <div className="title">
                    <h1>Poké Verse</h1>
                </div>

                <div className="container">
                    <div className="inputs">
                        <input
                            type="text"
                            placeholder="Enter a pokémon name"
                            value={pokemonName}
                            onChange={(name) => setPokemonName(name.target.value)}
                        />
                    </div>

                    <div className="button">
                        <button type="submit" onClick={fetchData}>Find Your Pokémon</button>
                    </div>

                    <div className="example">
                        Example: Pikachu, Charizard, Metapod etc.
                    </div>
                </div>
            </div>

            <div className={errorMessage ? 'error' : ''}>
                {errorMessage && <p>{errorMessage}</p>}
            </div>

            <footer>
                <div className="footer">
                    <p>© 2024 Pika Pika, Inc. All rights reserved. Designed by <a href="https://www.instagram.com/_ursfav.sxmy/">Samy</a></p>
                </div>
            </footer>

            {loading ? <Loader /> : pokemonData && <Result data={pokemonData} />}
        </>
    );
}