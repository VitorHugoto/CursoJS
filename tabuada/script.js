function gerar() {
let nu = document.getElementById('txtn')
let t = document.getElementById('tab')
if ( nu.value == 0) {
    window.alert('Digite um numero para gerar tabuada')
} else { 
    let n = Number(nu.value)
    let c = 1
    t.innerHTML = ''
    
    while( c <= 10) {
    let item = document.createElement('option')
    item.text = ` ${n} x ${c} = ${n*c} `
    //item.value = `t${c}` para PHP
    t.appendChild(item)
    c++
    }
}
}