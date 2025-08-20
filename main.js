const form = document.getElementById('form-atividade'); // criação da parte logica do formulario
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celbrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepicionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado"> Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado"> Reprovado</span>';
const notaMinima = parseFloat (prompt("Digite a nota minima:"));

let linhas = '';

form.addEventListener('submit', function(e){ // evento de salvear o formulario
    e.preventDefault(); // Função que ao salvar a tela não recarregue

    adicionarLinha();
    atualizarTabela();
    atualizarMediaFinal();
    //alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);
});

function adicionarLinha(){
        const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A aitividade: ${inputNomeAtividade.value} já foi inserida` );
    } else {

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td> ${inputNomeAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado }</td;>`;
    linha += `</tr>`;

    linhas += linha;
}
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabela (){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; //Inseir conteudo dentro de uma tag
}

function atualizarMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >=7 ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i =0; i <notas.length; i++){
        somaDasNotas += notas [i];
    }
    return somaDasNotas / notas.length;
}