function carregar(){
    var comp = document.getElementById('comp')
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora= data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 5 && hora < 12) {
        img.src = 'foto manha.jpg'
        comp.innerHTML= `Bom Dia!`
        document.body.style.background = 'orange'
    } else if(hora >= 12 && hora < 18) {
        img.src = 'foto tarde.jpg'
        comp.innerHTML= `Boa Tarde!`
        document.body.style.background = 'blue'
    } else {
        img.src = 'foto noite.jpg'
        comp.innerHTML= `Boa Noite!`
        document.body.style.background ='pupple' 
}
}