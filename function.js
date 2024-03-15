
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const zero = document.querySelector('#zero')
const addCart = document.querySelector('.addCartInHeader')
const incresePop = document.querySelector('.incresePop')
const Multiply125 = document.querySelector('.Multiply125')
const addCartBtn = document.querySelector('.cartBtn')
const trash = document.querySelector('#trash')

const img01 = document.getElementById('devi1')
const img02 = document.getElementById('devi2')
const img03 = document.querySelector('#devi3')
const img04 = document.querySelector('#devi4')

const Simage01 = document.querySelector('#Simage01')
const Simage02 = document.querySelector('#Simage02')
const Simage03 = document.querySelector('#Simage03')
const Simage04 = document.querySelector('#Simage04')

// to increase & decrese****************
let count = 0
minus.addEventListener('click', () => {
    count--
    zero.innerHTML = count
    let division = document.createElement('div')
    division.innerHTML = "  "
    addCart.innerHTML = count
    addCart.append(division)
    Multiply125.innerHTML =   count * -125
    incresePop.innerHTML = count
})

plus.addEventListener('click', () => {
    count++
    zero.innerHTML = count
    let division = document.createElement('div')
    division.innerHTML = "  "
    addCart.innerHTML = count
    addCart.append(division)
    Multiply125.innerHTML =   count * 125
    incresePop.innerHTML = count 
})
trash.addEventListener('click',()=>{
    count = 0
    Multiply125.innerHTML =   count * 0
    incresePop.innerHTML = count
HideEmpety.classList.add('hide')
empty.classList.remove('hide')
addCart.classList.add('hide')
    
})

addCartBtn.addEventListener('click', () => {
    if (count == 0) {
        addCart.classList.add('hide')
    } else {
        addCart.classList.remove('hide')
    }
})

// to image change*********
Simage01.addEventListener('click',()=>{
    img01.classList.toggle('hide')
    img02.classList.add('hide')
    img03.classList.add('hide')
    img04.classList.add('hide')
    // document.location.reload();
})

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

// to pop btn***************
const AddCartimgOfAvatarImage = document.querySelector('.imgOfAvatarImage')
const popup = document.querySelector('.popup')
const content = document.querySelector('.content')
AddCartimgOfAvatarImage.addEventListener('click',()=>{
    popup.classList.toggle('hide')
})


// to add imge in pop***********
const HideEmpety = document.querySelector('.HideEmpety')
const empty = document.querySelector('.empty')
const ppimage1 = document.querySelector('#ppimage1')
const ppimage2 = document.querySelector('#ppimage2')
const ppimage3 = document.querySelector('#ppimage3')
const ppimage4 = document.querySelector('#ppimage4')

Simage01.addEventListener('click',()=>{
    ppimage1.classList.toggle('hide')
    ppimage2.classList.add('hide')
    ppimage3.classList.add('hide')
    ppimage4.classList.add('hide')
})

Simage02.addEventListener('click',()=>{
ppimage2.classList.remove('hide')
ppimage1.classList.add('hide')
ppimage3.classList.add('hide')
ppimage4.classList.add('hide')
})

Simage03.addEventListener('click',()=>{
    ppimage3.classList.remove('hide')
    ppimage1.classList.add('hide')
    ppimage2.classList.add('hide')
    ppimage4.classList.add('hide')
})

Simage04.addEventListener('click',()=>{
    ppimage4.classList.remove('hide')
    ppimage1.classList.add('hide')
    ppimage2.classList.add('hide')
    ppimage3.classList.add('hide')
})


