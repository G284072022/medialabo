function culc(){
    let ans = document.querySelector('span#answer') 
    let il = document.querySelector('input#left')
    let ir = document.querySelector('input#right')
    let left = Number(il.value)
    let right = Number(ir.value)
    ans.textContent = left + right
}

let but = document.querySelector('button#calc')
but.addEventListener('click', culc)