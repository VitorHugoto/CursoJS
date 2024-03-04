function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res= document.querySelector('div#res')
    if( ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML= 'Impossível contar \u{1F644}	'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo inválido. Consideramdo passo 1')
            p = 1
        }
        if (i < f) {
            for( var c = i ; c <= f ; c += p){
            res.innerHTML += `${c} \u{1F449} `}
        }
        else {
            for(var c= i; c >=f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'

}
}

