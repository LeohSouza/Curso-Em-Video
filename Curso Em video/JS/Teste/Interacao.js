let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let n3 = document.getElementById('n3')
let n4 = document.getElementById('n4')
let res= document.getElementById('res')
let media


//verfica se os campos estao com valores
function vazio(n1, n2, n3, n4)
{
    if(n1.length != 0 && n2.length != 0 && n3.length != 0 && n4.length != 0)
    {
        return true
    } else{
        return false
    }
}

//verficia se o valor digitado cumpre o que é pedido
function nota(n1,n2,n3,n4)
{
    if(n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n3 >= 0 && n3 <= 10 && n4 >= 0 && n4<=10)
    {
        return true
    } else {
        return false
    }
}

function calcular(){
    //verifica se os dois valor e verdadeiro
    if(vazio(n1.value, n2.value, n3.value, n4.value) && nota(n1.value, n2.value, n3.value, n4.value))
    {
        //variaveis
        let nu1 = Number(n1.value) 
        let nu2 = Number(n2.value)
        let nu3 = Number(n3.value) 
        let nu4 = Number(n4.value)
        let situacao

        //calculando media
        media = (nu1 + nu2 + nu3 + nu4)/4

        //verifica se o aluno passou
        if(media < 4)
        {
            situacao = 'Reprovado'
        }
        else if(media <7){
            situacao = 'Recuperacao'
        }
        else{
            situacao = 'Aprovado'
        }

        //limpa a div
        res.innerHTML = ''
        //mostra na div as resp obtidas
        res.innerHTML = `A media é ${media}, o aluno esta ${situacao}`

    } 
    //verifica se a funcao nota retornou falso e a vazio verdadeiro
    else if(vazio(n1.value, n2.value, n3.value, n4.value) && !nota(n1.value, n2.value, n3.value, n4.value))
    {
        window.alert('[ERRO] A nota nao está entre 1 a 10')
    }
    //mostra que todos os campos nao estao completos
    else{
        window.alert('[ERRO] Preencha todos os campos')
    }    
}
