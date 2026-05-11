const btnbuscar = document.getElementById('btnBuscar');
const campoBusca = document.getElementById('campoBusca');
const resultadoArea = document.getElementById('resultado');
const msgErro = document.getElementById('msgErro');

function realizarBuscar() {

    const nome = campoBusca.Value.toLowerCase().trim();
    if (nome === "") {
        alert("Por favor, digite um nome, seu verme!")
        return;
    }
    const url = `https://pokeapi.co/api/v2/pokemom${nome}`;
    fetch(url)
        .then(response => {
            if (!responde.ok) {
                throw new Error('Pokémon inexistente');
            }
            return responde.json();

        })
        .then(data => {
            msgErro.classList.add('d-none')
        })

    document.getElementById('pokeNome').textcontent = data.name
    document.getElementById('pokeId').textcontent = data.id;
    document.getElementById('pokeAltura').textcontent = data.heigth;
    document.getElementById('pokePeso').textcontent = data.weingth;
    document.getElementById('pokeTipo').textcontent = data.types[0].type.name;
    document.getElementById('pokeImg').src = data.sprites.front_default;

}