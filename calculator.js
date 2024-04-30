let numbers = document.querySelectorAll("[numbers]")
let closed_bracket = document.querySelector("[closed-bracket]")
let open_bracket = document.querySelector("[open-bracket]")
let display = document.getElementById("ans")
let ques = document.getElementById("ques")
let clear = document.querySelector("[clear]")
let equals = document.querySelector("[equals]")
let operators = document.querySelectorAll("[operators]")
let n = ["0","1","2","3","4","5","6","7","8","9"]
let inside_bracket = false

for (let index = 0; index < numbers.length; index++) {
    numbers[index].addEventListener('click',()=>{
        ques.innerHTML = null
        
        if (display.innerHTML == 0){
            display.innerHTML = null
        }

        if (display.innerHTML.length < 19 || display.innerHTML == null){
                display.innerHTML += numbers[index].innerHTML
            
        }
        
    })
    
}

open_bracket.addEventListener("click",()=>{
    console.log("hello")
    console.log(display.innerHTML.includes("()"))
    if (display.innerHTML.includes("()") == true){
        display.innerHTML = "(" +display.innerHTML+ ")"
    }
    display.innerHTML = "()"
     
    inside_bracket = true
})

clear.addEventListener('click',()=>{
    ques.innerHTML = null
    display.innerHTML = 0
})

for (let i = 0; i < operators.length; i++) {
    
    operators[i].addEventListener("click",()=>{
        ques.innerHTML = null
        if (n.includes(display.innerHTML[display.innerHTML.length - 1]) == true){

            display.innerHTML += operators[i].innerHTML
    }   
        else if (display.innerHTML[display.innerHTML.length - 1] == ")"){
            display.innerHTML = display.innerHTML.replace(")","")
            display.innerHTML += operators[i].innerHTML +")"
        }
})
}

equals.addEventListener('click',()=>{
    ques.innerHTML = display.innerHTML + "="
    let operation = display.innerHTML
    operation = operation.replaceAll("×","*")
    operation = operation.replaceAll("−","-")
    operation = operation.replaceAll("÷","/")
    display.innerHTML = eval(operation)
})