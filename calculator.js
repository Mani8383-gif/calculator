const textinput = document.getElementById('textinput')
const texta= document.getElementById('textpush')
let input=''
let a=0
let b=0
let operator=''

let percentboolean=false

function number(k) {
    textinput.textContent += k

}
function cleartext() {
    textinput.textContent=''

}
function deletetext(){
   textinput.textContent=textinput.textContent.slice(0,-1)
}
function amaliat(amal){
    a=textinput.textContent
    a=parseFloat(a)
    operator=amal
    
    textinput.textContent=''
    textinput.textContent+=amal
    texta.textContent=a
}

function equal(){
    texta.textContent=''
    if(!percentboolean){

    b=textinput.textContent.slice(1,10) 
    percentboolean=false
    }
    b=parseFloat(b)
    
    if(operator==="+"){

      a+=b
       textinput.textContent=a
    }
    if(operator==="-"){
        a=a-b
        textinput.textContent=a

    }
    else if(operator=="*"){
        
        
        a=a*b
        textinput.textContent=a

    }
    else if(operator=="/"){
 a=a/b
        textinput.textContent=a
    }
    
}
function percentnumber(percent){
 percentboolean=true
   textinput.textContent+=percent
   if(operator=='+'||operator=='-'){
    textinput.textContent=a*(textinput.textContent.slice(1,-1)/100)
    b=textinput.textContent
   }
   if(operator=='*'||operator=='/'){
    textinput.textContent=textinput.textContent.slice(1,-1)/100   
    b=textinput.textContent
    
   }
    
}