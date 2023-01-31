let counterDisplayElm = document.querySelector('.counter-display')
let counterMinusElm = document.querySelector('.counter-minus')
let counterPlusElm = document.querySelector('.counter-plus')
let cn = document.querySelector(".counter-reset")
let counthtml = document.getElementById("count")
let count = 0
counterPlusElm.addEventListener("click", () => {
    
    counthtml.innerHTML = ++count
})
counterMinusElm.addEventListener("click", () => {
    
    counthtml.innerHTML = --count

})
cn.addEventListener("click", ()=>{
    counthtml.innerHTML= count = 0
} )
