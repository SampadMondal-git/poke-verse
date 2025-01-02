import React from 'react';
import styles from './result.module.css';

export default function Result({ data }) {
    if (!data) {
        return null;
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.name}>
                    <h2>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
                </div>

                <div className={styles.image}>
                    <img src={data.sprites.front_default} alt={data.name} />
                </div>

                <div className={styles.description}>
                    <div className={styles.height}>
                        <strong>Height:</strong> {data.height * 10} cm
                    </div>

                    <div className={styles.weight}>
                        <strong>Weight:</strong> {data.weight / 10} kg
                    </div>

                    <div className={styles.power}>
                        <strong>Base Experience:</strong> {data.base_experience}
                    </div>

                    <div className={styles.hp}>
                        <strong>HP:</strong> {data.stats.find(stat => stat.stat.name === 'hp').base_stat}
                    </div>

                    <div className={styles.speed}>
                        <strong>Speed:</strong> {data.stats.find(stat => stat.stat.name === 'speed').base_stat}
                    </div>

                    <div className={styles.attack}>
                        <strong>Attack:</strong> {data.stats.find(stat => stat.stat.name === 'attack').base_stat}
                    </div>

                    <div className={styles.specialAttack}>
                        <strong>Special Attack:</strong> {data.stats.find(stat => stat.stat.name === 'special-attack').base_stat}
                    </div>

                    <div className={styles.defense}>
                        <strong>Defense:</strong> {data.stats.find(stat => stat.stat.name === 'defense').base_stat}
                    </div>

                    <div className={styles.specialDefense}>
                        <strong>Special Defense:</strong> {data.stats.find(stat => stat.stat.name === 'special-defense').base_stat}
                    </div>

                    <div className={styles.types}>
                        <strong>Types:</strong> {data.types.map(type => type.type.name).join(', ')}
                    </div>

                    <div className={styles.abilities}>
                        <strong>Abilities:</strong> {data.abilities.map(ability => ability.ability.name).join(', ')}
                    </div>
                </div>

                <div className="button">
                    <button onClick={() => window.location.reload()}>Find another pokémon</button>
                </div>
            </div>
        </>
    );
}