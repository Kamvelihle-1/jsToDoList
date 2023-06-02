let input=document.querySelector('#toDo-input')
let order=document.querySelector('#item-sort')
let add=document.querySelector('#add-item')
let display=document.querySelector('.display')
let rm=document.querySelector('#remove-item')
let ck=document.querySelector('#toDoList-item')
let sn=document.querySelector('#info')


let arrData=[]

add.addEventListener('click',()=>{
   
    if (isNaN(input.value)){
        switch (true) {
            case input.value.charAt(0)!=input.value.charAt(0).toUpperCase():
                alert("The first charecter must be upper case")
                break;
            case !input.value:
                alert("Please enter a value")
                break;
            case input.value.length<3:
                alert("Please enter at least three charecters")
                break;
            
            default:
                arrData.push(input.value)
                clear()
                localStorage.setItem("to-Do",JSON.stringify(arrData))
                output(arrData)
                input.value=""
                break;


        }
        
    } else{
        alert("Please enter string values");
        clear();
    }
    
    
})
order.addEventListener('click',()=>{
   clear()
   arrData.sort()
   localStorage.setItem("to-Do",JSON.stringify(arrData))
   output(arrData)
})

ck.addEventListener('change',()=>{
    if (ck.checked) {
        sn.style="text-decoration: line-through"
    }
   
})
    

    


rm.addEventListener('click',()=>{


   
})
function clear() {
    input.value=" "
    display.innerHTML=""
}
function output(y) {
    y=JSON.parse(localStorage.getItem("to-Do"));
    y.forEach(data => {
        display.innerHTML+=
        `
        <input type="checkbox"  name="toDoList-item" id="toDoList-item">
            <span id="info">   ${data}  </span>
            <button id="remove-item">X</button>
        </input> 
        `
    });
    
}

