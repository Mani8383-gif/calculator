const textinput = document.getElementById('textinput')
const texta= document.getElementById('textpush')

let a=0
let b=0
let operator=''
textinput.textContent=''
let value=''
let percentboolean=false
 document.addEventListener('keydown',(e)=>{
if(e.key==='Escape'){
    cleartext()
}
else if(e.key==="Backspace"){
deletetext()
}
else if(e.key==='Enter'){
equal()
}else if(e.key==='%'){
    percentnumber('%')
}else if(('+-/*').includes(e.key)){
    amaliat(e.key)
}else if(('0123456789').includes(e.key))
number(e.key)
else if(e.key==='.'){
    adddot(e.key)
}
 })

 

function number(k) {
     
    value+=k
   
  let parts=value.split('.')
  let int =parts[0]
  let float=parts[1]
  let result=''
  let count=0
  for (let i= int.length-1;i>=0; i--) {
    result=int[i]+result
    count++
    if(count%3===0 && i!==0){
    result=","+result

  }
  }
  
  if(float){
    result+='.'+float
  }
    textinput.textContent  =result
    
}

function cleartext() {
    textinput.textContent=''
    value=''
    texta.textContent=''

}

  function adddot(dot){
    if(!(value.includes('.'))){
    value+=dot
    textinput.textContent=value
    }
}


function deletetext(){
   value=value.slice(0,-1)
   textinput.textContent=textinput.textContent.slice(0,-1)
}
function amaliat(amal){
    a=Number(value) 
    operator=amal
    value=''
    textinput.textContent=amal
    texta.textContent=a
}

function equal(){
    texta.textContent=''
    if(!percentboolean){

    // b=textinput.textContent.slice(1) 
    percentboolean=false
    }
    b=Number(value)
    
    if(operator==="+"){
      a+=b
    }
    if(operator==="-"){
        a=a-b

    }
    else if(operator=="*"){
        a=a*b

    }
    else if(operator=="/"){
 a=a/b
    }
    textinput.textContent=a.toLocaleString()
    value=a.toString()
}
function percentnumber(percent){
 percentboolean=true
   textinput.textContent+=percent
   if(operator=='+'||operator=='-'){
    value=a*(textinput.textContent.slice(0,-1)/100)
    b=textinput.textContent
   }
   if(operator=='*'||operator=='/'){
    value=textinput.textContent.slice(0,-1)/100   
    b=textinput.textContent
    
   }
    
}