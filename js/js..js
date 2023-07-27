let d = document

let nBtn = d.querySelectorAll('.mBtn')
let vvv = d.querySelector('.modlForm')
let close = d.querySelector('.close')
let btn = d.querySelector('#btn')

nBtn.forEach(i => {

    i.addEventListener('click', function M() {
        vvv.classList.add('modlFormAct')
    })
});

close.onclick = ()=>{
    vvv.classList.remove('modlFormAct')
}
btn.onclick = ()=>{
    vvv.classList.remove('modlFormAct')
}