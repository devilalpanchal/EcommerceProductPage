

const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const zero = document.querySelector('#zero')
const addCart = document.querySelector('.addCartInHeader')
const addCartBtn = document.querySelector('.cartBtn')
let count = 0

minus.addEventListener('click',()=>{
count--
zero.innerHTML = count
let division = document.createElement('div')
division.innerHTML = "  "
addCart.innerHTML = count
addCart.append(division)
})

plus.addEventListener('click',()=>{
count++
zero.innerHTML = count
let division = document.createElement('div')
division.innerHTML = "  "
addCart.innerHTML = count
addCart.append(division)

})

addCartBtn.addEventListener('click', ()=>{
    if (count == 0) {
    addCart.classList.add('hide')
    // console.log('devillalju not hide');
        
    } else {
    addCart.classList.remove('hide')
    // console.log('devillalju  hide');
        
    }
})