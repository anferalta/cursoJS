function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
              
        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe_homem.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem_homem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'velho_homem.jpg')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe_mulher.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem_mulher.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'velho_mulher.jpg')
            }
        }
            
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
        }

    }
    
