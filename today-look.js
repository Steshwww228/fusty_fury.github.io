const todo_control=document.querySelector('.todo-control')
// const todo_control=document.querySelector('.header-button')
let header_input=document.querySelector('.header-input')
let todo_list=document.querySelector('.todo-list')
let todo_completed=document.querySelector('.todo-completed')
let header_button=document.querySelector('#add')

let todo_data
if (localStorage.todo_saved){
    todo_data=JSON.parse(localStorage.todo_saved)
}
else{
    todo_data=[]
}

function Addtodo(){
todo_list.textContent = '';
todo_completed.textContent = '';
todo_data.forEach(function(item, i){
    
    let li=document.createElement('li')
    li.classList.add('todo-item')
    li.innerHTML=`<span class="text-todo">${item.value}</span>
<div class="todo-buttons">
    <button class="todo-remove"></button>
    <button class="todo-complete"></button>
    
</div>`;
if (item.completed===true){
todo_completed.append(li)

}else{
    todo_list.append(li)
    
}

const btn_todo_complete=li.querySelector('.todo-complete')
btn_todo_complete.addEventListener('click',function(){
item.completed=!item.completed
Addtodo()
})
const btn_todo_remove=li.querySelector('.todo-remove')
btn_todo_remove.addEventListener('click', function(){
todo_data.splice(i,1)
Addtodo()

})

})
localStorage.todo_saved=JSON.stringify(todo_data);

}
todo_control.addEventListener('submit', function(event){
event.preventDefault();
if (header_input.value.trim()!=''){
    
    let new_todo={
        value:header_input.value,
        completed:false,
        

    }
    todo_data.push(new_todo)
    header_input.value='';
Addtodo()
}

})




Addtodo()
