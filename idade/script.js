function carregar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
   
    var res = document.querySelector('div#res')
    if (fano.value.length == 0|| fano.value > ano){
window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gen =''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gen = 'Homem'
        if (idade >=0 && idade < 12) {
            //cria
            img.setAttribute("src", 'bbmas.jpg')

        } else if (idade < 27) {
            //teen
            img.setAttribute("src", 'jmas.jpg')

        } else if ( idade < 51) {
            //adu
            img.setAttribute("src", 'amas.jpg')
        } else {
            //old
            img.setAttribute("src", 'vmas.jpg')

        }

    } else {
        gen = 'Mulher'
        if (idade >=0 && idade< 12) {
            //cria
            img.setAttribute("src", 'bbfem.jpg')


        } else if (idade < 27) {
            //teen
            img.setAttribute("src", 'jfem.jpg')


        } else if ( idade < 51) {
            //adu
            img.setAttribute("src", 'afem.jpg')
            
            

        } else {
            //old
            img.setAttribute("src", 'vfem.jpg')
            
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = ` Você é ${gen} com ${idade} anos de idade`
    res.appendChild(img)
}
}

