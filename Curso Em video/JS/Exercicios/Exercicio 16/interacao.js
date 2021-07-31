function tabuada()
{
    let numero = document.getElementById('numero')
    let res = document.getElementById('tabuada')
    

    if(numero.value.length == 0)
    {
        window.alert('[ERRO] Digite um numero !')
    }
    else
    {   
        let c = 1
        var num = Number(numero.value) 
        res.innerHTML =('')

        while(c <= 10)
        {  
            let item = document.createElement('option')
            item.text = `\u{1F449} ${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            res.appendChild(item)
            c++
        }        
    }
}