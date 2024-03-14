

const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const zero = document.querySelector('#zero')
const addCart = document.querySelector('.addCartInHeader')
const addCartBtn = document.querySelector('.cartBtn')

const img01 = document.getElementById('devi1')
const img02 = document.getElementById('devi2')
const img03 = document.querySelector('#devi3')
const img04 = document.querySelector('#devi4')


const Simage01 = document.querySelector('#Simage01')
const Simage02 = document.querySelector('#Simage02')
const Simage03 = document.querySelector('#Simage03')
const Simage04 = document.querySelector('#Simage04')
let count = 0
minus.addEventListener('click', () => {
    count--
    zero.innerHTML = count
    let division = document.createElement('div')
    division.innerHTML = "  "
    addCart.innerHTML = count
    addCart.append(division)
})

plus.addEventListener('click', () => {
    count++
    zero.innerHTML = count
    let division = document.createElement('div')
    division.innerHTML = "  "
    addCart.innerHTML = count
    addCart.append(division)

})

addCartBtn.addEventListener('click', () => {
    if (count == 0) {
        addCart.classList.add('hide')
    } else {
        addCart.classList.remove('hide')
    }
})

Simage01.addEventListener('click',()=>{
    img01.classList.toggle('hide')
    img01.classList.toggle('hide')
    document.location.reload();
})
2
Simage02.addEventListener('click',()=>{
    img02.classList.toggle('hide')
    img01.classList.add('hide')
    img03.classList.add('hide')
    img04.classList.add('hide')

})

Simage03.addEventListener('click',()=>{
    img03.classList.toggle('hide')
    img01.classList.add('hide')
    img02.classList.add('hide')
    img04.classList.add('hide')

})
Simage04.addEventListener('click',()=>{
    img04.classList.toggle('hide')
    img01.classList.add('hide')
    img02.classList.add('hide')
    img03.classList.add('hide')
})

