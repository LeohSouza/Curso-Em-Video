let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//verificar se o numero ta comprindo os parametros
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

// verifica se esta em lista
function inLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){

    //verifica se o numero esta entre os pedidos e verifica se o NAO esta em lista
    if(isNumero(num.value) && !inLista(num.value, valores)){

        // adiciona o  valor no vetor
        valores.push(Number(num.value))

        //cria uma opcao 
        let item = document.createElement('option')
        
        //mostra o valor adicionado
        item.text = `Valor adicionado ${num.value}`

        //liga o item com a lista
        lista.appendChild(item)

        res.innerHTML = ''

    } else {
        window.alert('Ta errado')
    }

    //limpa a caixa de mensagem
    num.value = ''

    //coloca o mouse na caixa de mensagem 
    num.focus()
}

function finalizar()
{
    if(valores.length == 0)
    {
        window.alert('Adicione valores antes de finalizar!')
    }
    else{
        //recebe a quantidade de valores cadastrado
        let tot = valores.length

         //receve a primeira posisao pois e sempre a maior e a menor
        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0

        // para cada valor dentro vetor ele irá fazer o teste
        for(let pos in valores)
        {
            //soma os valores de cada posicao do vetor
            soma += valores[pos]

            //verifica se o valor da posicao é maior do que o do vetor
            if(valores[pos] > maior)
            {
                maior = valores[pos]
            }

            //verifica se o valor da posicao é menor do que o do vetor
            if(valores[pos] < menor)
            {
                menor = valores[pos]
            }
        }
        media = soma / tot


        res.innerHTML = ''

        //ver quantos valores tem cadastrado
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor} </p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${mediao}</p>`
    }
}