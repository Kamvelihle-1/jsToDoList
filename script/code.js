let input=document.querySelector('#toDo-input')
let order=document.querySelector('#item-sort')
let add=document.querySelector('#add-item')
let display=document.querySelector('.display')
let rm=document.querySelector('#remove-item')


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
                console.log(arrData);
                clear()
                output(arrData)
                localStorage.setItem("to-Do",JSON.stringify(arrData))
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
   arrData.sort((x,y)=>{x-y})
   localStorage.setItem("to-Do",JSON.stringify(arrData))
   output(arrData)
})

rm.addEventListener('click',()=>{

   arrData.forEach(i =>{

   })
   .splice(indexOf(val)-1,1)
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
        <input type="checkbox" name="toDoList-item" id="toDoList-item">
            <span >   ${data}  </span>
            <button id="remove-item">X</button>
        </input> 
        `
    });
    
}

