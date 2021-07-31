function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtAno')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || Number(fAno.value) > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    }

    else{
        var fsex = document.getElementsByName('radsex')
        var ani = document.getElementsByName('radani')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')

        //verifica se ja fez aniversario
        if(ani[1].checked)
        {
            idade = Number( idade - 1)
        }

         
        if(fsex[0].checked)
        {
            genero = 'Masculino'  
            
            if(idade >= 0 && idade < 12)
            {
                //crianca
                img.setAttribute('src','Mbebe.png')
            }

            else if(idade < 18)
            {
                //adolescente
                img.setAttribute('src','MAdo.png')
            }

            else if(idade <= 50)
            {
                //adulto
                img.setAttribute('src','MHom.png')
            }
            else
            {
                //senhor
                img.setAttribute('src','Midoso.png')
            }

        }
        
        else if(fsex[1].checked)
        {
            genero = 'Feminino'

            if(idade >= 0 && idade < 12)
            {
                //crianca
                img.setAttribute('src','Fbebe.png')

            }

            else if(idade < 18)
            {
                //adolescente
                img.setAttribute('src','FAdo.png')
            }

            else if(idade <= 50)
            {
                //adulta
                img.setAttribute('src','FMul.png')
            }
            else
            {
                //senhora
                img.setAttribute('src','Fidosa.png')
            }
        }
        
        res.innerHTML = `Sua idade é ${idade} anos. Você é do sexo ${genero}`
        res.appendChild(img)
    }
   


}