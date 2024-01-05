let listaAmigos = [];
let duplasSorteadas = [];

//nomeAmigo = nomeAmigo[0].toUpperCase() + nomeAmigo.substring(1);
function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;
    
    //evitar campo vazio
    if (nomeAmigo == ''){
        alert('Insira um nome');
        return;
    }
    //evitar nome repetido
    if (listaAmigos.includes(nomeAmigo)){
        alert('O nome já está na lista. Digite novamente');
        return;
    }

    //nomes com letra maiuscula
    let nomeComSobrenome = nomeAmigo.split(' ');
    let nomeSeparado = [];
    nomeAmigo = '';
    for (let i = 0; i < nomeComSobrenome.length; i++){
        nomeSeparado.push(nomeComSobrenome[i][0].toUpperCase() + nomeComSobrenome[i].substring(1));
    }
    nomeAmigo = nomeSeparado.join(' ');
    
    let amigosIncluidos = document.getElementById('lista-amigos');
    
    //inserir nome na lista "Amigos Incluídos"
    listaAmigos.push (nomeAmigo);
    amigosIncluidos.innerHTML = listaAmigos;
    document.getElementById('nome-amigo').value = '';
}


function sortear(){
   //verificar se a lista tem tamanho par
   if (listaAmigos.length == 0 || listaAmigos.length %2 !== 0 || listaAmigos.length < 4){
    alert('Quantidade inválida. Insira um nome');
    return;
   }
   
    //combinar indices para aparecer os pares 
   while (listaAmigos.length > 0){  
    sortearDuplas(); 
   }
   
   //Formatar array para exibição
   let sorteadosFormatados = ''
   // para dupla (elemento sendo iterado de duplas sorteadas) dentro de duplasSorteadas
   for(const dupla of duplasSorteadas){
        sorteadosFormatados += dupla +'<br>'
   }
   document.getElementById('lista-sorteio').innerHTML = sorteadosFormatados;
}

function sortearDuplas(){
//pegar números aleatórios (indice array)
    let indiceSorteadoA = Math.floor(Math.random()* listaAmigos.length);
    let sorteadoA = listaAmigos[indiceSorteadoA]
    listaAmigos.splice(indiceSorteadoA, 1);
    
    let indiceSorteadoB = Math.floor(Math.random()* listaAmigos.length);
    let sorteadoB = listaAmigos [indiceSorteadoB]
    listaAmigos.splice(indiceSorteadoB, 1);

    duplasSorteadas.push (sorteadoA+ '-> '+sorteadoB);
}

//reiniciar sorteador
function reiniciar(){
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    listaAmigos = [];
    duplasSorteadas = [];
} 