 let calculador = document.getElementById('calculadora');
 let pokedex;

//Fetch para obtener los pokemones de la pokedex
document.addEventListener("DOMContentLoaded", function() {
    fetch('../db/pokedex.json')
        .then(response => response.json())
        .then(data => {
             pokedex = data; 
            // Funciones de ataques
            function ataqueEfectivo(n1) {
                return n1 * 2;
            }

            function ataqueDebil(n1) {
                return n1 / 2;
            }
//Calculadora de daño
            let selectAtaque = document.getElementById("select1");
            let selectDefensa = document.getElementById("select2");
            let calcularAtaqueBtn = document.getElementById("calcularAtaque");

            calcularAtaqueBtn.addEventListener("click", function() {
                let pokemonAtk = selectAtaque.value;
                let pokemonDef = selectDefensa.value;
                let ataquePokemon;
                let defensaPokemon;
// Encontrar el Pokémon correspondiente según el valor seleccionado
                for (let pokemon of pokedex) {
                    if (pokemon.nombre === pokemonAtk) {
                        ataquePokemon = pokemon;
                    }
                    if (pokemon.nombre === pokemonDef) {
                        defensaPokemon = pokemon;
                    }
                }
                if (!ataquePokemon) {
                    alert("Pokemon atacante inválido");
                    return;
                }

                if (!defensaPokemon) {
                    alert("Pokemon defensor inválido");
                    return;
                }

                let tipoAtaque = ataquePokemon.tipo;
                let tipoDef = defensaPokemon.tipo;
                let ataque = 0;

                if ((tipoAtaque === "Fuego" && tipoDef === "Planta") ||
                    (tipoAtaque === "Planta" && tipoDef === "Agua") ||
                    (tipoAtaque === "Agua" && tipoDef === "Fuego")) {
                    ataque = ataqueEfectivo(ataquePokemon.atk);
                    calculadora.innerHTML = "<p>El ataque será de " + ataque + " puntos de daño<p>"
                    const fotoAtk = document.createElement("img");
                    fotoAtk.src = ataquePokemon.img;
                    fotoAtk.style.width = "200px"; 
                    fotoAtk.style.height = "200px";
                    calculadora.appendChild(fotoAtk);
                    const vs=document.createElement("img");
                    vs.src="../img/vs.png"
                    vs.style.width = "50px"; 
                    vs.style.height = "50px"
                    calculadora.appendChild(vs);
                    const fotoDef = document.createElement("img");
                    fotoDef.src = defensaPokemon.img;
                    fotoDef.style.width = "200px"; 
                    fotoDef.style.height = "200px";
                    calculadora.appendChild(fotoDef);
                    const volverBtn = document.createElement("button");
                    volverBtn.textContent = "Volver";
                    calculadora.appendChild(volverBtn);
                    volverBtn.addEventListener("click", () => {
                        window.location.href = "../html/inicio.html";
                    });
                } else if ((tipoAtaque === "Fuego" && tipoDef === "Agua") ||
                    (tipoAtaque === "Planta" && tipoDef === "Fuego") ||
                    (tipoAtaque === "Agua" && tipoDef === "Planta")) {
                    ataque = ataqueDebil(ataquePokemon.atk);
                    calculadora.innerHTML = "<p>El ataque será de " + ataque + " puntos de daño<p>"
                    const fotoAtk = document.createElement("img");
                    fotoAtk.src = ataquePokemon.img;
                    fotoAtk.style.width = "200px"; 
                    fotoAtk.style.height = "200px";
                    calculadora.appendChild(fotoAtk);
                    const vs=document.createElement("img");
                    vs.src="../img/vs.png"
                    vs.style.width = "50px";
                    vs.style.height = "50px"
                    calculadora.appendChild(vs);
                    const fotoDef = document.createElement("img");
                    fotoDef.src = defensaPokemon.img;
                    fotoDef.style.width = "200px"; 
                    fotoDef.style.height = "200px";
                    calculadora.appendChild(fotoDef);
                    const volverBtn = document.createElement("button");
                    volverBtn.textContent = "Volver";
                    calculadora.appendChild(volverBtn);
                    volverBtn.addEventListener("click", () => {
                        window.location.href = "../html/inicio.html";
                    });
                } else {
                    ataque = ataquePokemon.atk;
                    calculadora.innerHTML = "<p>El ataque será de " + ataque + " puntos de daño<p>"
                    const fotoAtk = document.createElement("img");
                    fotoAtk.src = ataquePokemon.img;
                    fotoAtk.style.width = "200px"; 
                    fotoAtk.style.height = "200px";
                    calculadora.appendChild(fotoAtk);
                    const vs=document.createElement("img");
                    vs.src="../img/vs.png"
                    vs.style.width = "50px"; 
                    vs.style.height = "50px"
                    calculadora.appendChild(vs);
                    const fotoDef = document.createElement("img");
                    fotoDef.src = defensaPokemon.img;
                    fotoDef.style.width = "200px"; 
                    fotoDef.style.height = "200px";
                    calculadora.appendChild(fotoDef);
                    const volverBtn = document.createElement("button");
                    volverBtn.textContent = "Volver";
                    calculadora.appendChild(volverBtn);
                    volverBtn.addEventListener("click", () => {
                        window.location.href = "../html/inicio.html";
                    });
                }
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos del archivo JSON:', error);
        });
});
        
//Consulta de pokemon al azar
  let azarBtn = document.getElementById("azar");
  azarBtn.addEventListener('click', ()=>{
    if (pokedex){
    const pokemonAleatorio = pokedex[Math.floor(Math.random() * pokedex.length)];
    Swal.fire("El pokemon elegido es: "+ pokemonAleatorio.nombre);}});
    
//consulta de ataque
    let pkConsulta = document.getElementById("consultaPk");
    let consultaBtn = document.getElementById("consultaBtn");
    let pokemonDiv=null
    consultaBtn.addEventListener('click', () => {
        let pkConsultaValor = pkConsulta.value;
        let encontrado = false;
        for (let consultado of pokedex) {
            if (consultado.nombre === pkConsultaValor) {
                if (pokemonDiv) {
                    document.body.removeChild(pokemonDiv);
                }
                pokemonDiv = document.createElement("div");
                pokemonDiv.style.maxWidth = "600px";
                pokemonDiv.style.display = "block";
                pokemonDiv.style.marginLeft = "auto";
                pokemonDiv.style.marginRight = "auto";
                encontrado = true;
                pokemonDiv.classList.add("pokemon-info");
                let pokemonImagen = document.createElement("img");
                pokemonImagen.src = consultado.img;
                pokemonImagen.style.width="200px";
                pokemonImagen.style.height="200px";
                pokemonImagen.alt = consultado.nombre;
                pokemonDiv.appendChild(pokemonImagen);
                let pokemonDaño = document.createElement("p");
                pokemonDaño.textContent = "El ataque de " + pkConsultaValor + " es de " + consultado.atk + " puntos de daño.";
                pokemonDiv.appendChild(pokemonDaño);
                pokemonDiv.appendChild(pokemonImagen);
                document.body.appendChild(pokemonDiv);
                break;
            }
        }
    if (!encontrado) {
        swal.fire("No se encontró ningún Pokémon con el nombre ingresado.");
    }})
    