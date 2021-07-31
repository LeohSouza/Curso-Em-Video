let num = [5,8,2,3,9]

console.log(`O vetor tem ${num.length} posições`)
let i = 0
do{
    console.log(`A posição é ${i} e o valor e ${num[i]}`)
    i++
}while(num.length > i)
//ordenar por ondem crescente
//variavel.sort()3
//variavel.indexOf(numero) <- vai te retonar posicao e se tem ou nao. -1 nao tem

for (let i in num)
{
    console.log(`A posição é ${i} e o valor e ${num[i]}`)
}

let pos = num.indexOf(11)
console.log(`O vetor está na posição ${pos}`)