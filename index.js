let write = document.getElementById("write");
let todoList = document.getElementById("todoList")

write.addEventListener("keydown" , function(e){
    if(e.key == "Enter"){
        addTodo(this.value);
        this.value = ""
    }
});


const addTodo = (e) =>{
    let list = document.createElement('li') 
    list.innerHTML = `${e}`
    todoList.appendChild(list)
    console.log(e);


    list.addEventListener("click" , function(){
          this.classList.toggle('complete')
    })
}