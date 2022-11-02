// Traer desde html la data
const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');

//Creamos un diccionario con los tipos de colores
const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

const searchPokemon = e =>{
    e.preventDefault(); //cancelamos el reload del submit del form
    const { value } = e.target.pokemon //obtener valor del input
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
     .then(data => data.json())   
     .then(response => renderPokemonData(response))  //obtener la response renderPokemonData
    }


   const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const { stats, types } = data ;
    console.log(data);
   }