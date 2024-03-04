let nu = document.querySelector('input#nu')
let li = document.querySelector('select#sval')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if( Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 
function inList(n, l) {
    if ( l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adcionar() {
    if (isNumero(nu.value) && !inList(nu.value, valores)) {
        valores.push(Number(nu.value))
        let item = document.createElement('option')
        item.text = `Valor ${nu.value} adcionado` 
        li.appendChild (item)
        res.innerHTML = ''
        

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    nu.value = ''
    nu.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Nenhum valor foi adcionado')
    } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for ( let pos in valores){
        soma += valores[pos]
        if (valores[pos] > maior){
            maior = valores[pos]
        }
        if ( valores[pos] < menor) {
            menor = valores[pos]
        }
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo foram adcionados ${tot} valores</p>` 
    res.innerHTML += `<p>O maior valor é ${maior}</p>`
    res.innerHTML += `<p> O menor valor é ${menor}</p>`
    res.innerHTML += `<p> A soma dos valores é igual á ${soma}</p>`
    res.innerHTML += `<p> A média dos valores é ${media}</p>`
    }
}